import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import client from "../../../../apollo-client";
import { GET_USER } from "@/store/modules/user/query";
import { GetUserQuery, GetUserQueryVariables } from "@/gql/graphql";
import { errorResponseHandler } from "@/app/utils/error-response-handler";
import { ICheckEmailApi } from "@/app/[lng]/register/components/interfaces";

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
    errorResponseHandler(error, "Failed to Get User");
    throw new Error("Failed to Get User");
  }
};

export const POST = async (req: CustomNextApiRequest) => {
  try {
    // const requestData: NCheckEmail.IRequest["body"] = await req.json();
    // const emailExist = await checkUserExistence(requestData.email);

    return NextResponse.json(
      { message: "User checked", emailExist: true },
      { status: StatusCodes.okStatus }
    );
    // const requestData: NCheckEmail.IRequest["body"] = await req.json();
    // const emailExist = await checkUserExistence(requestData.email);

    // return NextResponse.json(
    //   { message: "User checked", emailExist: emailExist },
    //   { status: StatusCodes.okStatus }
    // );
  } catch (error) {
    return errorResponseHandler(error, "Failed to get User POST");
  }
};

export namespace NCheckEmail {
  export interface IRequest {
    body: {
      email: string;
    };
  }
  export interface IResponse extends ICheckEmailApi {}
}
