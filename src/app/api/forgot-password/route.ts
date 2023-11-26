import client from "../../../../apollo-client";
import { NextRequest, NextResponse } from "next/server";

import { transporter } from "@/app/providers/email";
import { StatusCodes } from "@/constants/status-code";
import { getBaseUrl } from "@/app/utils/get-base-url";
import dayjs from "dayjs";
import { generateToken } from "@/app/utils/generate-email-confirmation-token";
import { GET_USER } from "@/store/modules/user/query";
import { ADD_USER_PASSWORD_CHANGE_REQUEST } from "@/store/modules/user-password-change-request/query";
import {
  AddUserPasswordChangeRequestMutation,
  AddUserPasswordChangeRequestMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
} from "@/gql/graphql";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NForgotPassword.IRequest["body"]>;
}

const getUser = async (email: string) => {
  try {
    const userId = await client
      .query<GetUserQuery, GetUserQueryVariables>({
        query: GET_USER,
        variables: {
          whereUser: {
            email: { _eq: email },
          },
        },
      })
      .then((val) => val.data.user[0].id);

    if (!userId) {
      throw new Error("User not found");
    } else {
      return userId;
    }
  } catch (error) {
    throw new Error("Failed Get User");
  }
};

const addUserPasswordChangeRequest = async (
  userId: number,
  confirmationToken: string
) => {
  try {
    await client.mutate<
      AddUserPasswordChangeRequestMutation,
      AddUserPasswordChangeRequestMutationVariables
    >({
      mutation: ADD_USER_PASSWORD_CHANGE_REQUEST,
      variables: {
        addUserPasswordChangeRequestObject: {
          expires_at: dayjs().add(1, "hour"),
          token: confirmationToken,
          user_id: userId,
        },
      },
    });
  } catch (error) {
    throw new Error("Failed Add User Password Change Request");
  }
};

const sendEmail = async (
  language: string,
  confirmationToken: string,
  email: string
) => {
  try {
    const emailLink = `${getBaseUrl()}/${language}/reset-password?token=${confirmationToken}`;

    await transporter.sendMail({
      from: `UAB Baltic <${process.env.EMAIL_USERNAME}>`,
      to: email,
      subject: "UABBaltic password reset",
      html: `<div>
            <a href=${emailLink}>Reset password</a>
            </div>`,
    });
  } catch (error) {
    throw new Error("Failed Send Email");
  }
};

export const POST = async (req: CustomNextApiRequest) => {
  try {
    const requestData: NForgotPassword.IRequest["body"] = await req.json();
    const confirmationToken = generateToken();
    const userId = await getUser(requestData.email);
    await addUserPasswordChangeRequest(userId, confirmationToken);
    await sendEmail(requestData.language, confirmationToken, requestData.email);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: StatusCodes.okStatus }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "FAILED forgot password POS" },
      { status: StatusCodes.internalServerError }
    );
  }
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
