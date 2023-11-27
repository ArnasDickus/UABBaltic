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
import { useLazyCheckEmailApiQuery } from "@/store/services/auth-api";
import { clientErrorResponseHandler } from "@/app/utils/client-error-response-handler";

const ForgotPasswordForm = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "forgot_password" });
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(t("required")).email(t("invalidEmail")),
  });

  const [checkEmailTrigger] = useLazyCheckEmailApiQuery();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IForgotPassword>({
    resolver: yupResolver(validationSchema),
  });

  const checkIfEmailExist = async (email: string) => {
    try {
      const emailExistResult = await checkEmailTrigger({
        email: email,
      })
        .unwrap()
        .then((val) => val.response.emailExist);

      if (!emailExistResult) {
        dispatch(
          showHideAlert({
            message: t("emailNotExist"),
            severity: "error",
            showAlert: true,
          })
        );
      }
      return !emailExistResult;
    } catch (error) {
      clientErrorResponseHandler(error, "Failed Check Email", true);
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      const forgotPassword = await fetch(apiRoutes["forgot-password"], {
        method: "POST",
        body: JSON.stringify({ email: email, language: language }),
      });

      if (forgotPassword.status === StatusCodes.okStatus) {
        dispatch(
          showHideAlert({
            message: t("emailSent"),
            severity: "success",
            showAlert: true,
          })
        );
      } else if (forgotPassword.status === StatusCodes.internalServerError) {
        dispatch(
          showHideAlert({
            message: t("error"),
            severity: "error",
            showAlert: true,
          })
        );
      }
    } catch (error) {
      clientErrorResponseHandler(error, "Failed Forgot Password", true);
    }
  };

  const onSubmit: SubmitHandler<IForgotPassword> = async (data) => {
    try {
      if (await checkIfEmailExist(data.email)) {
        return;
      }
      await forgotPassword(data.email);
    } catch (error) {
      clientErrorResponseHandler(error, "Failed OnSubmit", false);
    }
  };

  return (
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
  );
};
export default ForgotPasswordForm;
