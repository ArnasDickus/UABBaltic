"use client";
import Input from "@/components/input/input";
import SnackAlert, { ISnackAlert } from "@/components/snack-alert/snack-alert";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IResetPasswordForm } from "./interfaces";
import * as Yup from "yup";
import Button from "@/components/button/button";
import { apiRoutes } from "@/constants/routes";
import { StatusCodes } from "@/constants/status-code";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();
  const [alert, setAlert] = useState<ISnackAlert>({
    message: "",
    severity: "success",
    showAlert: false,
  });

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    repeatPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("newPassword")], "Your passwords do not match."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<IResetPasswordForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IResetPasswordForm> = async (data) => {
    const resetPasswordResponse = await fetch(apiRoutes["reset-password"], {
      method: "POST",
      body: JSON.stringify({ password: data.newPassword, token }),
    });

    if (resetPasswordResponse.status === StatusCodes.okStatus) {
      setAlert({
        message: "Password was changed",
        severity: "success",
        showAlert: true,
      });
      // @ts-ignore
      router.push("/");
    } else if (
      resetPasswordResponse.status === StatusCodes.internalServerError
    ) {
      setAlert({
        message: "Something went wrong, please try again later",
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
            name="New Password"
            errorText={errors.newPassword?.message}
            inputProps={{
              type: "password",
              disabled: isSubmitting,
              ...register("newPassword"),
            }}
          />
        </div>
        <div className="mb-4">
          <Input
            name="Repeat password"
            errorText={errors.repeatPassword?.message}
            inputProps={{
              type: "password",
              disabled: isSubmitting,
              ...register("repeatPassword"),
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            buttonProps={{
              disabled: isSubmitting,
              type: "submit",
            }}>
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
export default ResetPasswordForm;
