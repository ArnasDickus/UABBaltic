import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import client from "../../../../apollo-client";
import { GET_USER } from "@/store/modules/user/query";
import { GetUserQuery, GetUserQueryVariables } from "@/gql/graphql";
import { ICheckUsernameApi } from "@/app/[lng]/register/components/register-form/interfaces";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NCheckUsername.IRequest["body"]>;
}

const checkUsernameExistance = async (username: string) => {
  try {
    const user = await client.query<GetUserQuery, GetUserQueryVariables>({
      query: GET_USER,
      variables: {
        whereUser: {
          username: { _eq: username },
        },
      },
    });

    return !!user.data.user.length;
  } catch (error) {
    throw new Error("Failed to get User");
  }
};

export const POST = async (req: CustomNextApiRequest) => {
  try {
    const requestData: NCheckUsername.IRequest["body"] = await req.json();
    const userNameExist = await checkUsernameExistance(requestData.username);

    return NextResponse.json(
      {
        message: "Username checked successfully",
        response: { usernameExist: userNameExist },
      },
      { status: StatusCodes.okStatus }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get User POST" },
      { status: StatusCodes.internalServerError }
    );
  }
};

export namespace NCheckUsername {
  export interface IRequest {
    body: {
      username: string;
    };
  }
  export interface IResponse extends ICheckUsernameApi {}
}
