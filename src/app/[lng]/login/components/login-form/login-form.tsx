"use client";
import SnackAlert, { ISnackAlert } from "@/components/snack-alert/snack-alert";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "./interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as Yup from "yup";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import { apiRoutes } from "@/constants/routes";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [alert, setAlert] = useState<ISnackAlert>({
    message: "",
    severity: "success",
    showAlert: false,
  });

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Privaloma"),
    password: Yup.string().required("No password provided."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<ILoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    await fetch(apiRoutes["login-user"], {
      method: "POST",
      body: JSON.stringify({ formData: data }),
    });
    const response = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    console.log("response", response);
    //  const newUser = await fetch(apiRoutes["create-user"], {
    //    method: "POST",
    //    body: JSON.stringify({ formData: data, language: language }),
    //  });
    //  if (newUser.status === StatusCodes.okStatus) {
    //    setAlert({
    //      message: "Email was sent.",
    //      severity: "success",
    //      showAlert: true,
    //    });
    //  } else if (newUser.status === StatusCodes.internalServerError) {
    //    setAlert({
    //      message: "Something went wrong, please try again later",
    //      severity: "error",
    //      showAlert: true,
    //    });
    //  }
  };

  return (
    <>
      <SnackAlert {...alert} />
      <form
        className="bg-white shadow-md rounded px-8 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            name="Username"
            errorText={errors.username?.message}
            inputProps={{
              type: "text",
              disabled: isSubmitting,
              ...register("username"),
            }}
          />
        </div>
        <div className="mb-4">
          <Input
            name="Password"
            errorText={errors.password?.message}
            inputProps={{
              type: "password",
              disabled: isSubmitting,
              ...register("password"),
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            buttonProps={{
              disabled: isSubmitting,
              type: "submit",
            }}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
