import { NextApiRequest } from "next";
import client from "../../../../apollo-client";
import { IPageRegisterInputs } from "@/app/[lng]/register/components/interfaces";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { ADD_USER } from "@/components/store/modules/user/query";
import { transporter } from "@/app/providers/email";

interface CustomNextApiRequest extends NextApiRequest {
  json: () => Promise<NCreateUser.IRequest["body"]>;
}

export const POST = async (req: CustomNextApiRequest) => {
  const requestData: NCreateUser.IRequest["body"] = await req.json();
  const saltRounds = 10;
  console.log(process.env.EMAIL_USERNAME);
  console.log(process.env.EMAIL_PASSWORD);
  bcrypt.genSalt(saltRounds, function (error, salt: string) {
    bcrypt.hash(
      requestData.formData.password,
      salt,
      async function (error, hash: string) {
        await client
          .mutate({
            mutation: ADD_USER,
            variables: {
              addUserObject: {
                name: requestData.formData.name,
                password: hash,
                email: requestData.formData.email,
                username: requestData.formData.username,
              },
            },
          })
          .catch((error) => {
            console.error("ADD_USER", error);
            return NextResponse.json({ message: "Failed to create user" });
          });
      }
    );
  });

  // Send Email
  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: requestData.formData.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  return NextResponse.json({ message: "User created successfully" });
};

export namespace NCreateUser {
  export interface IRequest {
    body: {
      formData: IPageRegisterInputs;
    };
  }
  export interface IResponse {}
}
