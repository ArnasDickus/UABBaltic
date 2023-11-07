"use client";
import Input from "@/components/input/input";
import { ISnackAlert } from "@/components/snack-alert/snack-alert";
import { IPageParamProps } from "@/constants/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IResetPasswordForm } from "./interfaces";
import * as Yup from "yup";
import Button from "@/components/button/button";

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
  //   console;
  const onSubmit: SubmitHandler<IResetPasswordForm> = async (data) => {
    console.log("data", data);
  };

  return (
    <div>
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
    </div>
  );
};
export default ResetPasswordForm;
