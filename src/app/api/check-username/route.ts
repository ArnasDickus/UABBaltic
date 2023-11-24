import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import client from "../../../../apollo-client";
import { GET_USER } from "@/store/modules/user/query";
import { GetUserQuery, GetUserQueryVariables } from "@/gql/graphql";
import { errorResponseHandler } from "@/app/utils/error-response-handler";
import { ICheckUsernameApi } from "@/app/[lng]/register/components/interfaces";

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
    errorResponseHandler(error, "Failed ToGetUser");
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
        usernameExist: userNameExist,
      },
      { status: StatusCodes.okStatus }
    );
  } catch (error) {
    return errorResponseHandler(error, "Failed ToGetUser POST");
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
