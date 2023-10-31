import { NextApiRequest } from "next";
import client from "../../../../apollo-client";
import { NextResponse } from "next/server";
import { StatusCodes } from "@/constants/status-code";
import { ILoginForm } from "@/app/[lng]/login/components/login-form/interfaces";

interface CustomNextApiRequest extends NextApiRequest {
  json: () => Promise<NLoginUser.IRequest["body"]>;
}

export const POST = async (req: CustomNextApiRequest) => {
  const requestData: NLoginUser.IRequest["body"] = await req.json();
  console.log("requestData", requestData);
  //

  return NextResponse.json(
    { error: "User created successfully" },
    { status: StatusCodes.okStatus }
  );
};

export namespace NLoginUser {
  export interface IRequest {
    body: {
      formData: ILoginForm;
    };
  }
  export interface IResponse {}
}
