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
import {
  formButtonContainerClassNames,
  formClassNames,
} from "@/styles/reusable-styles";
import { useTranslation } from "@/app/i18n/client";

const ResetPasswordForm = ({
  language,
  token,
}: {
  language: string;
  token: string;
}) => {
  const { t } = useTranslation({ language, ns: "reset_password" });
  const router = useRouter();
  const [alert, setAlert] = useState<ISnackAlert>({
    message: "",
    severity: "success",
    showAlert: false,
  });

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required(t("requred"))
      .min(8, t("passwordTooShort"))
      .matches(/[a-zA-Z]/, t("passwordLatin")),
    repeatPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("newPassword")], t("passwordMatch")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
        message: t("passwordChanged"),
        severity: "success",
        showAlert: true,
      });
      // @ts-ignore
      router.push("/");
    } else if (
      resetPasswordResponse.status === StatusCodes.internalServerError
    ) {
      setAlert({
        message: t("internalError"),
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
      <form className={formClassNames} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Input
            name={t("newPassword")}
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
            name={t("repeatPassword")}
            errorText={errors.repeatPassword?.message}
            inputProps={{
              type: "password",
              disabled: isSubmitting,
              ...register("repeatPassword"),
            }}
          />
        </div>
        <div className={formButtonContainerClassNames}>
          <Button
            buttonProps={{
              disabled: isSubmitting,
              type: "submit",
            }}>
            {t("submit")}
          </Button>
        </div>
      </form>
    </>
  );
};
export default ResetPasswordForm;
