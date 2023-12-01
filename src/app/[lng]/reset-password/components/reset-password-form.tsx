"use client";
import Input from "@/components/input/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
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
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { clientErrorResponseHandler } from "@/app/utils/client-error-response-handler";

const ResetPasswordForm = ({
  language,
  token,
}: {
  language: string;
  token: string;
}) => {
  const { t } = useTranslation({ language, ns: "reset_password" });
  const router = useRouter();
  const dispatch = useAppDispatch();

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

  const resetPassword = async (newPassword: string) => {
    try {
      const resetPasswordResponse = await fetch(apiRoutes["reset-password"], {
        method: "POST",
        body: JSON.stringify({ password: newPassword, token }),
      });

      if (resetPasswordResponse.status === StatusCodes.okStatus) {
        dispatch(
          showHideAlert({
            message: t("passwordChanged"),
            severity: "success",
            showAlert: true,
          })
        );
        // @ts-ignore
        router.push("/");
      } else if (
        resetPasswordResponse.status === StatusCodes.internalServerError
      ) {
        dispatch(
          showHideAlert({
            message: t("internalError"),
            severity: "error",
            showAlert: true,
          })
        );
      }
    } catch (error) {
      clientErrorResponseHandler("Failed Reset Password OnSubmit", true);
    }
  };

  const onSubmit: SubmitHandler<IResetPasswordForm> = async (data) => {
    try {
      await resetPassword(data.newPassword);
    } catch (error) {
      clientErrorResponseHandler("Failed Reset Password OnSubmit", false);
    }
  };

  return (
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
  );
};
export default ResetPasswordForm;
