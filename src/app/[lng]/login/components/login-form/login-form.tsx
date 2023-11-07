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
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [alert, setAlert] = useState<Omit<ISnackAlert, "onClose">>({
    message: "",
    severity: "success",
    showAlert: false,
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Privaloma"),
    password: Yup.string().required("No password provided."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    await fetch(apiRoutes["login-user"], {
      method: "POST",
      body: JSON.stringify({ formData: data }),
    });
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!response?.error) {
      // @ts-ignore
      router.push("/");
      router.refresh();
    } else {
      setAlert({
        message: "Username and Password does not match",
        severity: "error",
        showAlert: true,
      });
    }
  };

  return (
    <>
      <SnackAlert
        {...alert}
        onClose={() => {
          setAlert((prevState) => ({
            ...prevState,
            showAlert: false,
          }));
        }}
      />
      <form
        className="bg-white shadow-md rounded px-8 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            name="Email"
            errorText={errors.email?.message}
            inputProps={{
              type: "text",
              disabled: isSubmitting,
              ...register("email"),
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
