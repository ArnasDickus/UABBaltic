import client from "../../../../apollo-client";
import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";

import dayjs from "dayjs";
import { GET_USER_CONFIRMATION } from "@/store/modules/user-confirmation/query";
import { UPDATE_USERS } from "@/store/modules/user/query";
import {
  GetUserConfirmationQuery,
  GetUserConfirmationQueryVariables,
  UpdateUsersMutation,
  UpdateUsersMutationVariables,
} from "@/gql/graphql";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NConfirmEmail.IRequest["body"]>;
}

const getUserConfirmation = async (token: string): Promise<number> => {
  try {
    const userId = await client
      .query<GetUserConfirmationQuery, GetUserConfirmationQueryVariables>({
        query: GET_USER_CONFIRMATION,
        variables: {
          whereUserConfirmation: {
            token: { _eq: token },
            expires_at: { _gte: dayjs().format() },
          },
        },
      })
      .then((user) => user.data.user_confirmation[0].user_confirmation_id?.id);

    if (!userId) {
      throw new Error("Failed Get User Confirmation");
    } else {
      return userId;
    }
  } catch (error) {
    throw new Error("Failed Get User Confirmation");
  }
};

const updateUser = async (userId: number): Promise<void> => {
  try {
    await client.mutate<UpdateUsersMutation, UpdateUsersMutationVariables>({
      mutation: UPDATE_USERS,
      variables: {
        whereUpdateUsers: {
          id: { _eq: userId },
        },
        setUpdateUsers: {
          email_confirmed: true,
        },
      },
    });
  } catch (error) {
    throw new Error("Failed to Update User");
  }
};

export const POST = async (req: CustomNextApiRequest) => {
  try {
    const requestData: NConfirmEmail.IRequest["body"] = await req.json();
    const userId = await getUserConfirmation(requestData.token);
    await updateUser(userId);

    return NextResponse.json(
      { message: "Email confirmed" },
      { status: StatusCodes.okStatus }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Confirm Email POST" },
      { status: StatusCodes.internalServerError }
    );
  }
};

export namespace NConfirmEmail {
  export interface IRequest {
    body: {
      token: string;
    };
  }
  export interface IResponse {}
}
