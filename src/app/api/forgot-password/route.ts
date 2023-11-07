import { NextApiRequest } from "next";
import client from "../../../../apollo-client";
import { NextResponse } from "next/server";

import { transporter } from "@/app/providers/email";
import { StatusCodes } from "@/constants/status-code";
import { getBaseUrl } from "@/app/utils/get-base-url";
import dayjs from "dayjs";
import { generateToken } from "@/app/utils/generate-email-confirmation-token";
import { ADD_USER_PASSWORD_CHANGE_REQUEST } from "@/components/store/modules/user-password-change-request/query";
import { GET_USER } from "@/components/store/modules/user/query";

interface CustomNextApiRequest extends NextApiRequest {
  json: () => Promise<NForgotPassword.IRequest["body"]>;
}

export const POST = async (req: CustomNextApiRequest) => {
  const requestData: NForgotPassword.IRequest["body"] = await req.json();
  const confirmationToken = generateToken();

  const userId = await client
    .query({
      query: GET_USER,
      variables: {
        whereUser: {
          email: { _eq: requestData.email },
        },
      },
    })
    .then((val) => val.data.user[0].id)
    .catch((error) => {
      console.error("GET_USER", error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: StatusCodes.internalServerError }
      );
    });

  await client.mutate({
    mutation: ADD_USER_PASSWORD_CHANGE_REQUEST,
    variables: {
      addUserPasswordChangeRequestObject: {
        expires_at: dayjs().add(1, "week"),
        token: confirmationToken,
        user_id: userId,
      },
    },
  });

  const emailLink = `${getBaseUrl()}/${
    requestData.language
  }/reset-password?token=${confirmationToken}`;

  await transporter
    .sendMail({
      from: `UAB Baltic <${process.env.EMAIL_USERNAME}>`,
      to: "1arnasdickus1@gmail.com",
      // TODO update to proper email
      // to: requestData.formData.email,
      subject: "UABBaltic email confirmation",
      html: `<div>
            <a href=${emailLink}>Reset password</a>
            </div>`,
    })
    .catch((error) => {
      console.error("ADD_USER", error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: StatusCodes.internalServerError }
      );
    });

  return NextResponse.json(
    { message: "Email sent successfully" },
    { status: StatusCodes.okStatus }
  );
};

export namespace NForgotPassword {
  export interface IRequest {
    body: {
      email: string;
      language: string;
    };
  }
  export interface IResponse {}
}
