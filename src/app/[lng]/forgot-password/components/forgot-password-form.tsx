"use client";
import Input from "@/components/input/input";
import SnackAlert, { ISnackAlert } from "@/components/snack-alert/snack-alert";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForgotPassword } from "./interfaces";
import Button from "@/components/button/button";
import { apiRoutes } from "@/constants/routes";
import { StatusCodes } from "@/constants/status-code";
import {
  formButtonContainerClassNames,
  formClassNames,
} from "@/styles/reusable-styles";
import { isEmailExist } from "@/app/utils/auth-functions";
import { useTranslation } from "@/app/i18n/client";

const ForgotPasswordForm = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "forgot_password" });
  const [alert, setAlert] = useState<Omit<ISnackAlert, "onClose">>({
    message: "",
    severity: "success",
    showAlert: false,
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(t("required")).email(t("invalidEmail")),
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
        message: t("emailNotExist"),
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
          message: t("emailSent"),
          severity: "success",
          showAlert: true,
        });
      } else if (forgotPassword.status === StatusCodes.internalServerError) {
        setAlert({
          message: t("error"),
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
      <form className={formClassNames} onSubmit={handleSubmit(onSubmit)}>
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
        <div className={formButtonContainerClassNames}>
          <Button
            buttonProps={{
              disabled: isSubmitting,
              type: "submit",
            }}>
            {t("resetPassword")}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ForgotPasswordForm;
