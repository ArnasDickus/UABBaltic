import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import client from "../../../../apollo-client";
import { GET_USER } from "@/store/modules/user/query";
import { GetUserQuery, GetUserQueryVariables } from "@/gql/graphql";
import {
  ICheckEmailApi,
  ICheckUsernameRequest,
} from "@/app/[lng]/register/components/register-form/interfaces";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NCheckEmail.IRequest["body"]>;
}

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
    throw new Error("Failed to Get User");
  }
};

export const POST = async (req: CustomNextApiRequest) => {
  try {
    const requestData: NCheckEmail.IRequest["body"] = await req.json();
    const emailExist = await checkUserExistence(requestData.email);

    return NextResponse.json(
      { message: "Success", response: { emailExist: emailExist } },
      { status: StatusCodes.okStatus }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get User POST" },
      { status: StatusCodes.internalServerError }
    );
  }
};

export namespace NCheckEmail {
  export interface IRequest {
    body: ICheckUsernameRequest;
  }
  export interface IResponse extends ICheckEmailApi {}
}
