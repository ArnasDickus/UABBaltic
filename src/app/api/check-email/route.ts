import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import client from "../../../../apollo-client";
import { GET_USER } from "@/components/store/modules/user/query";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NCheckEmail.IRequest["body"]>;
}

export const POST = async (req: CustomNextApiRequest) => {
  const requestData: NCheckEmail.IRequest["body"] = await req.json();

  const isEmailExist = await client
    .query({
      query: GET_USER,
      variables: {
        whereUser: {
          email: { _eq: requestData.email },
        },
      },
    })
    .then((user) => !!user.data.user.length)
    .catch((error) => {
      console.error("isEmailExist >", error);
      return NextResponse.json(
        { message: "GET_USER Internal Error", emailExist: false },
        { status: StatusCodes.internalServerError }
      );
    });

  return NextResponse.json(
    { message: "Email checked successfully", emailExist: isEmailExist },
    { status: StatusCodes.okStatus }
  );
};

export namespace NCheckEmail {
  export interface IRequest {
    body: {
      email: string;
    };
  }
  export interface IResponse {
    emailExist: boolean;
    message: string;
  }
}
