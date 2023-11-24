import client from "../../../../apollo-client";
import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";

import dayjs from "dayjs";
import bcrypt from "bcrypt";
import { GET_USER_PASSWORD_CHANGE_REQUEST } from "@/store/modules/user-password-change-request/query";
import { UPDATE_USERS } from "@/store/modules/user/query";
import {
  GetUserPasswordChangeRequestQuery,
  GetUserPasswordChangeRequestQueryVariables,
  UpdateUsersMutation,
} from "@/gql/graphql";
import { errorResponseHandler } from "@/app/utils/error-response-handler";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NForgotPassword.IRequest["body"]>;
}

const getUserPasswordChangeRequest = async (token: string): Promise<number> => {
  try {
    const userId = await client
      .query<
        GetUserPasswordChangeRequestQuery,
        GetUserPasswordChangeRequestQueryVariables
      >({
        query: GET_USER_PASSWORD_CHANGE_REQUEST,
        variables: {
          whereUserPasswordChangeRequest: {
            token: { _eq: token },
            expires_at: { _gte: dayjs().format() },
          },
        },
      })
      .then((val) => val.data.user_password_change_request?.[0]?.user?.id);

    if (!userId) {
      throw new Error("FAILED GET_USER_PASSWORD_CHANGE_REQUEST");
    } else {
      return userId;
    }
  } catch (error) {
    errorResponseHandler(error, "FAILED GET_USER_PASSWORD_CHANGE_REQUEST");
    throw new Error("FAILED GET_USER_PASSWORD_CHANGE_REQUEST failed");
  }
};

const updateUser = async (userId: number, password: string) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    await client.mutate<UpdateUsersMutation>({
      mutation: UPDATE_USERS,
      variables: {
        whereUpdateUsers: {
          id: { _eq: userId },
        },
        setUpdateUsers: {
          password: hash,
        },
      },
    });
  } catch (error) {
    errorResponseHandler(error, "Failed UPDATE_USERS");
    throw new Error("Failed UPDATE_USERS");
  }
};

export const POST = async (req: CustomNextApiRequest) => {
  try {
    const requestData: NForgotPassword.IRequest["body"] = await req.json();
    const userId = await getUserPasswordChangeRequest(requestData.token);
    await updateUser(userId, requestData.password);

    return NextResponse.json(
      { message: "Reset password success" },
      { status: StatusCodes.okStatus }
    );
  } catch (error) {
    return errorResponseHandler(error, "Failed Reset Password POST");
  }
};

export namespace NForgotPassword {
  export interface IRequest {
    body: {
      token: string;
      password: string;
    };
  }
  export interface IResponse {}
}
