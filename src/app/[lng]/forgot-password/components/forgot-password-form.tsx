"use client";
import Input from "@/components/input/input";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { useTranslation } from "@/app/i18n/client";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { clientErrorResponseHandler } from "@/app/utils/client-error-response-handler";
import { customErrors } from "@/constants/custom-errors";
import Title from "@/components/typography/title";
import Subtitle from "@/components/typography/subtitle";

const ForgotPasswordForm = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "forgot_password" });
  const dispatch = useAppDispatch();

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

  const displayToastMessage = (status: number, message: string) => {
    if (message === customErrors.userNotFound) {
      dispatch(
        showHideAlert({
          message: t("emailNotExist"),
          severity: "error",
          showAlert: true,
          alertDataTestId: "forgotPasswordEmailExistModal",
        })
      );
    } else if (status === StatusCodes.okStatus) {
      dispatch(
        showHideAlert({
          message: t("emailSent"),
          severity: "success",
          showAlert: true,
          alertDataTestId: "ForgotPasswordSuccessModal",
        })
      );
    } else {
      dispatch(
        showHideAlert({
          message: t("error"),
          severity: "error",
          showAlert: true,
        })
      );
      throw new Error("Internal Error");
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      const forgotPassword = await fetch(apiRoutes["forgot-password"], {
        method: "POST",
        body: JSON.stringify({ email: email, language: language }),
      });
      const forgotPasswordJson: { message: string } =
        await forgotPassword.json();

      displayToastMessage(forgotPassword.status, forgotPasswordJson.message);
    } catch (error) {
      clientErrorResponseHandler("Failed Forgot Password", true);
    }
  };

  const onSubmit: SubmitHandler<IForgotPassword> = async (data) => {
    try {
      await forgotPassword(data.email);
    } catch (error) {
      clientErrorResponseHandler("Failed OnSubmit", false);
    }
  };

  return (
    <form
      className={formClassNames}
      data-testid="forgotPasswordFormId"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="pb-5">
        <Title>{t("forgotPassword")}</Title>
        <Subtitle>{t("subtitle")}</Subtitle>
      </div>
      <div className="mb-4">
        <Input
          name={t("email")}
          dataTestIdInput="forgotPasswordEmail"
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
          dataTestIdButton="forgotPasswordButton"
          buttonProps={{
            disabled: isSubmitting,
            type: "submit",
          }}>
          {t("resetPassword")}
        </Button>
      </div>
    </form>
  );
};
export default ForgotPasswordForm;
