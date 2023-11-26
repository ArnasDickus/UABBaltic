import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import client from "../../../../apollo-client";
import { GET_USER } from "@/store/modules/user/query";
import { GetUserQuery, GetUserQueryVariables } from "@/gql/graphql";
import {
  ICheckEmailApi,
  ICheckUsernameRequest,
} from "@/app/[lng]/register/components/interfaces";
import { errorResponseHandler } from "@/app/utils/error-response-handler";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NCheckEmail.IRequest["body"]>;
}

export const POST = async (req: CustomNextApiRequest) => {
  const checkUserExistence = async (email: string): Promise<boolean> => {
    try {
      const user = await client.query<GetUserQuery, GetUserQueryVariables>({
        query: GET_USER,
        variables: {
          whereUser: {
            email: { _eq: email },
          },
        },
      });

      return !!user.data.user.length;
    } catch (error) {
      errorResponseHandler(error, "Failed to Get User");
      throw new Error("Failed to Get User");
    }
  };

  try {
    const requestData: NCheckEmail.IRequest["body"] = await req.json();
    const emailExist = await checkUserExistence(requestData.email);

    return NextResponse.json(
      { message: "User checked", response: { emailExist: emailExist } },
      { status: StatusCodes.okStatus }
    );
  } catch (error) {
    return errorResponseHandler(error, "Failed to get User POST");
  }
};

export namespace NCheckEmail {
  export interface IRequest {
    body: ICheckUsernameRequest;
  }
  export interface IResponse extends ICheckEmailApi {}
}
