"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "./interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import { signIn } from "next-auth/react";
import {
  formButtonContainerClassNames,
  formClassNames,
} from "@/styles/reusable-styles";
import { useTranslation } from "@/app/i18n/client";
import LinkButton from "@/components/link-button/link-button";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { clientErrorResponseHandler } from "@/app/utils/client-error-response-handler";

const LoginForm = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "login_form" });
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(t("required")),
    password: Yup.string().required(t("required")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const signInUser = async (data: ILoginForm) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.error) {
        dispatch(
          showHideAlert({
            message: t("emailPasswordMatch"),
            severity: "error",
            showAlert: true,
          })
        );
      }
    } catch (error) {
      clientErrorResponseHandler(error, "Failed Login", true);
    }
  };

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    try {
      await signInUser(data);
    } catch (error) {
      clientErrorResponseHandler(error, "Failed Login onSubmit", false);
    }
  };

  return (
    <form className={formClassNames} onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Input
          name={t("email")}
          errorText={errors.email?.message}
          dataTestIdInput="loginEmail"
          inputProps={{
            type: "text",
            disabled: isSubmitting,
            ...register("email"),
          }}
        />
      </div>
      <div className="mb-4">
        <Input
          name={t("password")}
          dataTestIdInput="loginPassword"
          errorText={errors.password?.message}
          inputProps={{
            type: "password",
            disabled: isSubmitting,
            ...register("password"),
          }}
        />
      </div>
      <div className={formButtonContainerClassNames}>
        <Button
          dataTestIdButton="loginSubmitButton"
          buttonProps={{
            disabled: isSubmitting,
            type: "submit",
          }}>
          {t("login")}
        </Button>
        <LinkButton
          linkProps={{
            // @ts-ignore
            href: `/${language}/forgot-password`,
          }}>
          {t("forgotPassword")}
        </LinkButton>
      </div>
    </form>
  );
};
export default LoginForm;
