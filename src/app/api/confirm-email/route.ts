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

export const POST = async (req: CustomNextApiRequest) => {
  const requestData: NConfirmEmail.IRequest["body"] = await req.json();

  const userId = await client
    .query<GetUserConfirmationQuery, GetUserConfirmationQueryVariables>({
      query: GET_USER_CONFIRMATION,
      variables: {
        whereUserConfirmation: {
          token: { _eq: requestData.token },
          expires_at: { _gte: dayjs().format() },
        },
      },
    })
    .then((val) => val.data.user_confirmation[0].user_confirmation_id?.id);
  // .catch((error) => {
  //   console.error("USER CONFIRMATION", error);
  //   return NextResponse.json(
  //     { error: "Internal Server Error" },
  //     { status: StatusCodes.internalServerError }
  //   );
  // });

  // if (userId typeof 'number')
  await client
    .mutate<UpdateUsersMutation, UpdateUsersMutationVariables>({
      mutation: UPDATE_USERS,
      variables: {
        whereUpdateUsers: {
          id: { _eq: userId },
        },
        setUpdateUsers: {
          email_confirmed: true,
        },
      },
    })
    .catch((error) => {
      console.error("UPDATE USER", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: StatusCodes.internalServerError }
      );
    });

  return NextResponse.json(
    { error: "Email confirmed" },
    { status: StatusCodes.okStatus }
  );
};

export namespace NConfirmEmail {
  export interface IRequest {
    body: {
      token: string;
    };
  }
  export interface IResponse {}
}
