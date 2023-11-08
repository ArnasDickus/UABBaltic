import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import client from "../../../../apollo-client";
import { GET_USER } from "@/components/store/modules/user/query";

interface CustomNextApiRequest extends NextRequest {
  json: () => Promise<NCheckUsername.IRequest["body"]>;
}

export const POST = async (req: CustomNextApiRequest) => {
  const requestData: NCheckUsername.IRequest["body"] = await req.json();

  const isUsernameExist = await client
    .query({
      query: GET_USER,
      variables: {
        whereUser: {
          username: { _eq: requestData.username },
        },
      },
    })
    .then((user) => !!user.data.user.length)
    .catch((error) => {
      console.error("isUsernameExist >", error);
      return NextResponse.json(
        { message: "GET_USER Internal Error", UsernameExist: false },
        { status: StatusCodes.internalServerError }
      );
    });

  return NextResponse.json(
    {
      message: "Username checked successfully",
      usernameExist: isUsernameExist,
    },
    { status: StatusCodes.okStatus }
  );
};

export namespace NCheckUsername {
  export interface IRequest {
    body: {
      username: string;
    };
  }
  export interface IResponse {
    usernameExist: boolean;
    message: string;
  }
}
