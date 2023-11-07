"use client";
import Input from "@/components/input/input";
import SnackAlert, { ISnackAlert } from "@/components/snack-alert/snack-alert";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForgotPassword } from "./interfaces";
import Button from "@/components/button/button";
import { apiRoutes } from "@/constants/routes";
import { NCheckEmail } from "@/app/api/check-email/route";
import { StatusCodes } from "@/constants/status-code";

const ForgotPasswordForm = ({ language }: { language: string }) => {
  const router = useRouter();
  const [alert, setAlert] = useState<Omit<ISnackAlert, "onClose">>({
    message: "",
    severity: "success",
    showAlert: false,
  });

  const isEmailExist = async (email: string): Promise<boolean> => {
    const isEmail: NCheckEmail.IResponse = await fetch(
      apiRoutes["check-email"],
      {
        method: "POST",
        body: JSON.stringify({ email: email }),
      }
    ).then((emailResult) => {
      return emailResult.json();
    });
    return isEmail.emailExist;
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Privaloma").email("Invalid Email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IForgotPassword>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IForgotPassword> = async (data) => {
    const emailExist = await isEmailExist(data.email);

    if (!emailExist) {
      setAlert({
        message: "Emailas neegzistuoja",
        severity: "error",
        showAlert: true,
      });
    } else {
      const forgotPassword = await fetch(apiRoutes["forgot-password"], {
        method: "POST",
        body: JSON.stringify({ email: data.email, language: language }),
      });

      if (forgotPassword.status === StatusCodes.okStatus) {
        setAlert({
          message: "Emailas išsiųstas",
          severity: "success",
          showAlert: true,
        });
      } else if (forgotPassword.status === StatusCodes.internalServerError) {
        setAlert({
          message: "Internal server error",
          severity: "error",
          showAlert: true,
        });
      }
    }
  };

  return (
    <div>
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
        <div className="flex items-center justify-between">
          <Button
            buttonProps={{
              disabled: isSubmitting,
              type: "submit",
            }}>
            Reset password
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ForgotPasswordForm;
