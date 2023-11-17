"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPageRegisterInputs } from "./interfaces";
import { apiRoutes } from "@/constants/routes";
import SnackAlert, { ISnackAlert } from "@/components/snack-alert/snack-alert";
import { useState } from "react";
import { StatusCodes } from "@/constants/status-code";

import client from "../../../../../apollo-client";
import {
  formButtonContainerClassNames,
  formClassNames,
} from "@/styles/reusable-styles";
import { isEmailExist } from "@/app/utils/auth-functions";
import { useTranslation } from "@/app/i18n/client";
import { GET_USER } from "@/store/modules/user/query";

const RegisterForm = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "register" });
  const [alert, setAlert] = useState<ISnackAlert>({
    message: "",
    severity: "success",
    showAlert: false,
  });

  const isUsernameExist = async (username: string) => {
    const isUsernameExist: boolean = await client
      .query({
        query: GET_USER,
        variables: {
          whereUser: {
            username: { _eq: username },
          },
        },
      })
      .then((user) => !!user.data.user.length)
      .catch((error) => {
        console.error("isUsernameExist >", error);
        return false;
      });

    return isUsernameExist;
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("required")),
    email: Yup.string().email().required(t("required")),
    username: Yup.string().required(t("required")),
    password: Yup.string()
      .required(t("required"))
      .min(8, t("passwordTooShort"))
      .matches(/[a-zA-Z]/, t("passwordLatin")),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IPageRegisterInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IPageRegisterInputs> = async (data) => {
    const emailExist = await isEmailExist(data.email);
    const usernameExist = await isUsernameExist(data.username);

    if (emailExist) {
      setAlert({
        message: t("emailExist"),
        severity: "error",
        showAlert: true,
      });
      return;
    }

    if (usernameExist) {
      setAlert({
        message: t("usernameInUse"),
        severity: "error",
        showAlert: true,
      });
      return;
    }

    const newUser = await fetch(apiRoutes["create-user"], {
      method: "POST",
      body: JSON.stringify({ formData: data, language: language }),
    });
    if (newUser.status === StatusCodes.okStatus) {
      setAlert({
        message: t("emailWasSent"),
        severity: "success",
        showAlert: true,
      });
    } else if (newUser.status === StatusCodes.internalServerError) {
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
            name={t("name")}
            errorText={errors.name?.message}
            inputProps={{
              type: "text",
              disabled: isSubmitting,
              ...register("name"),
            }}
          />
        </div>
        <div className="mb-4">
          <Input
            name={t("username")}
            errorText={errors.username?.message}
            inputProps={{
              type: "text",
              disabled: isSubmitting,
              ...register("username"),
            }}
          />
        </div>
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
        <div className="mb-6">
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
            {t("register")}
          </Button>
        </div>
      </form>
    </>
  );
};
export default RegisterForm;
