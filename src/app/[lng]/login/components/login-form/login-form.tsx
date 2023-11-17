"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginForm } from "./interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import { apiRoutes } from "@/constants/routes";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  formButtonContainerClassNames,
  formClassNames,
} from "@/styles/reusable-styles";
import { useTranslation } from "@/app/i18n/client";
import LinkButton from "@/components/link-button/link-button";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";

const LoginForm = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "login_form" });
  const router = useRouter();
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
      dispatch(
        showHideAlert({
          message: t("emailPasswordMatch"),
          severity: "error",
          showAlert: true,
        })
      );
    }
  };

  return (
    <form className={formClassNames} onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Input
          name={t("email")}
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
          name={t("password")}
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
