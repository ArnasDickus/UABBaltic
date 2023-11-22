import client from "../../../../apollo-client";
import { IPageRegisterInputs } from "@/app/[lng]/register/components/interfaces";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { transporter } from "@/app/providers/email";
import { StatusCodes } from "@/constants/status-code";
import { getBaseUrl } from "@/app/utils/get-base-url";

import dayjs from "dayjs";
import { generateToken } from "@/app/utils/generate-email-confirmation-token";
import { ADD_USER } from "@/store/modules/user/query";
import { ADD_USER_CONFIRMATION } from "@/store/modules/user-confirmation/query";
import { AddUserConfirmationMutation, AddUserMutation } from "@/gql/graphql";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NCreateUser.IRequest["body"]>;
}

export const POST = async (req: CustomNextApiRequest) => {
  const requestData: NCreateUser.IRequest["body"] = await req.json();
  const saltRounds = 10;
  const confirmationToken = generateToken();

  const emailLink = `${getBaseUrl()}/${
    requestData.language
  }/confirm-email?token=${confirmationToken}`;

  bcrypt.genSalt(saltRounds, function (error, salt: string) {
    bcrypt.hash(
      requestData.formData.password,
      salt,
      async function (error, hash: string) {
        const newUser = await client
          .mutate<AddUserMutation>({
            mutation: ADD_USER,
            variables: {
              addUserObject: {
                name: requestData.formData.name,
                password: hash,
                email: requestData.formData.email,
                username: requestData.formData.username,
                email_confirmed: false,
              },
            },
          })
          .then((val) => val.data?.insert_user?.returning[0]);

        await client.mutate<AddUserConfirmationMutation>({
          mutation: ADD_USER_CONFIRMATION,
          variables: {
            addUserConfirmationObject: {
              expires_at: dayjs().add(1, "week"),
              user_id: newUser?.id,
              token: confirmationToken,
            },
          },
        });

        await transporter
          .sendMail({
            from: `UAB Baltic <${process.env.EMAIL_USERNAME}>`,
            to: requestData.formData.email,
            subject: "UABBaltic email confirmation",
            html: `<div>
            <a href=${emailLink}>Confirm Email</a>
            </div>`,
          })
          .catch((error) => {
            console.error("ADD_USER", error);
            return NextResponse.json(
              { error: "Internal Server Error" },
              { status: StatusCodes.internalServerError }
            );
          });
      }
    );
  });

  return NextResponse.json(
    { error: "User created successfully" },
    { status: StatusCodes.okStatus }
  );
};

export namespace NCreateUser {
  export interface IRequest {
    body: {
      formData: IPageRegisterInputs;
      language: string;
    };
  }
  export interface IResponse {}
}
