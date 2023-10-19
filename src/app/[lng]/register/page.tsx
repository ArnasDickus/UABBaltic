"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import LinkButton from "@/components/link-button/link-button";
import { IPageParamProps } from "@/constants/interfaces";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type IPageRegisterInputs = {
  name: string;
  email: string;
  username: string;
  password: string;
};

const PageRegister: FC<IPageParamProps> = ({ params: { lng } }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Privaloma"),
    email: Yup.string().required("Privaloma"),
    username: Yup.string().required("Privaloma"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPageRegisterInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IPageRegisterInputs> = (data) => {
    console.log("data", data);
  };

  return (
    <div className="w-full justify-center flex items-center h-screen ml-auto mr-auto">
      <form
        className="bg-white shadow-md rounded px-8 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            name="Name"
            errorText={errors.name?.message}
            inputProps={{
              type: "text",
              ...register("name"),
            }}
          />
        </div>
        <div className="mb-4">
          <Input
            name="Username"
            errorText={errors.username?.message}
            inputProps={{
              type: "text",
              ...register("username"),
            }}
          />
        </div>
        <div className="mb-4">
          <Input
            name="Email"
            errorText={errors.email?.message}
            inputProps={{
              type: "text",
              ...register("email"),
            }}
          />
        </div>
        <div className="mb-6">
          <Input
            name="Password"
            errorText={errors.password?.message}
            inputProps={{
              type: "password",
              ...register("password"),
            }}
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
