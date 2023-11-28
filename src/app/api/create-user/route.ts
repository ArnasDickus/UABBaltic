import client from "../../../../apollo-client";
import {
  ICreateUserResponse,
  IPageRegisterInputs,
} from "@/app/[lng]/register/components/interfaces";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { transporter } from "@/app/providers/email";
import { StatusCodes } from "@/constants/status-code";
import { getBaseUrl } from "@/app/utils/get-base-url";

import dayjs from "dayjs";
import { generateToken } from "@/app/utils/generate-email-confirmation-token";
import { ADD_USER, DELETE_USER } from "@/store/modules/user/query";
import { ADD_USER_CONFIRMATION } from "@/store/modules/user-confirmation/query";
import {
  AddUserConfirmationMutation,
  AddUserConfirmationMutationVariables,
  AddUserMutation,
  AddUserMutationVariables,
} from "@/gql/graphql";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NCreateUser.IRequest["body"]>;
}

const createUser = async (requestData: NCreateUser.IRequest["body"]) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(requestData.formData.password, salt);

    const newUserId = await client.mutate<
      AddUserMutation,
      AddUserMutationVariables
    >({
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
    });
    if (!newUserId) {
      throw new Error("Failed Add User");
    } else {
      return newUserId;
    }
  } catch (error) {
    //  @ts-ignore
    throw new Error(error.graphQLErrors[0].message);
  }
};

const addUserConfirmation = async (
  newUserId: number,
  confirmationToken: string
) => {
  try {
    await client.mutate<
      AddUserConfirmationMutation,
      AddUserConfirmationMutationVariables
    >({
      mutation: ADD_USER_CONFIRMATION,
      variables: {
        addUserConfirmationObject: {
          expires_at: dayjs().add(1, "week"),
          user_id: newUserId,
          token: confirmationToken,
        },
      },
    });
  } catch (error) {
    await client.mutate({
      mutation: DELETE_USER,
      variables: {
        whereDeleteUser: {
          id: { _eq: newUserId },
        },
      },
    });
    throw new Error("Failed add user confirmation");
  }
};

const sendEmail = async (
  requestData: NCreateUser.IRequest["body"],
  confirmationToken: string
) => {
  try {
    const emailLink = `${getBaseUrl()}/${
      requestData.language
    }/confirm-email?token=${confirmationToken}`;

    await transporter.sendMail({
      from: `UAB Baltic <${process.env.EMAIL_USERNAME}>`,
      to: requestData.formData.email,
      subject: "UABBaltic email confirmation",
      html: `<div>
            <a href=${emailLink}>Confirm Email</a>
            </div>`,
    });
  } catch (error) {
    throw new Error("Failed Send Email");
  }
};

export const POST = async (req: CustomNextApiRequest) => {
  try {
    const requestData: NCreateUser.IRequest["body"] = await req.json();
    const newUserId = await createUser(requestData);

    const confirmationToken = generateToken();
    await addUserConfirmation(
      newUserId.data?.insert_user?.returning[0].id || 0,
      confirmationToken
    );
    await sendEmail(requestData, confirmationToken);

    return NextResponse.json(
      { message: "User created successfully" },
      { status: StatusCodes.okStatus }
    );
  } catch (error) {
    return NextResponse.json(
      // @ts-ignore
      { message: error.message },
      { status: StatusCodes.internalServerError }
    );
  }
};

export namespace NCreateUser {
  export interface IRequest {
    body: {
      formData: IPageRegisterInputs;
      language: string;
    };
  }
  export interface IResponse extends ICreateUserResponse {}
}
