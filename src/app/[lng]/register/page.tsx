"use client";
import Button from "@/components/button/button";
import TailwindInput from "@/components/input/input";
import LinkButton from "@/components/link-button/link-button";
import { IPageParamProps } from "@/constants/interfaces";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type IPageRegisterInputs = {
  name: string;
  email: string;
  username: string;
  password: string;
};

const PageRegister: FC<IPageParamProps> = ({ params: { lng } }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPageRegisterInputs>();
  console.log("errors", errors);
  const onSubmit: SubmitHandler<IPageRegisterInputs> = (data) => {
    console.log("data", data);
  };

  return (
    <div className="w-full max-w-lg ml-auto mr-auto mt-32">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <TailwindInput
            name="Name"
            errorText=""
            inputProps={{
              type: "text",
              ...register("name"),
            }}
          />
        </div>
        <div className="mb-4">
          <TailwindInput
            name="Username"
            errorText=""
            inputProps={{
              type: "text",
              ...register("email"),
            }}
          />
        </div>
        <div className="mb-4">
          <TailwindInput
            name="Email"
            errorText=""
            inputProps={{
              type: "text",
              ...register("username"),
            }}
          />
        </div>
        <div className="mb-6">
          <TailwindInput
            name="Password"
            inputProps={{
              type: "password",
              ...register("password"),
            }}
            errorText=""
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            buttonProps={{
              type: "submit",
            }}>
            Register
          </Button>
          <LinkButton
            linkProps={{
              // @ts-ignore
              href: `/${lng}/forgot-password`,
            }}>
            Forgot Password?
          </LinkButton>
        </div>
      </form>
    </div>
  );
};
export default PageRegister;
