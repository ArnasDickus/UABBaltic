"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPageRegisterInputs } from "./interfaces";
import { apiRoutes } from "@/constants/routes";
import { StatusCodes } from "@/constants/status-code";

import client from "../../../../../apollo-client";
import {
  formButtonContainerClassNames,
  formClassNames,
} from "@/styles/reusable-styles";
import { isEmailExist } from "@/app/utils/auth-functions";
import { useTranslation } from "@/app/i18n/client";
import { GET_USER } from "@/store/modules/user/query";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { GetUserQuery, GetUserQueryVariables } from "@/gql/graphql";

const RegisterForm = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "register" });
  const dispatch = useAppDispatch();

  const isUsernameExist = async (username: string) => {
    const isUsernameExist: boolean = await client
      .query<GetUserQuery, GetUserQueryVariables>({
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
      dispatch(
        showHideAlert({
          message: t("emailExist"),
          severity: "error",
          showAlert: true,
        })
      );
      return;
    }

    if (usernameExist) {
      dispatch(
        showHideAlert({
          message: t("usernameInUse"),
          severity: "error",
          showAlert: true,
        })
      );
      return;
    }

    const newUser = await fetch(apiRoutes["create-user"], {
      method: "POST",
      body: JSON.stringify({ formData: data, language: language }),
    });
    if (newUser.status === StatusCodes.okStatus) {
      dispatch(
        showHideAlert({
          message: t("emailWasSent"),
          severity: "success",
          showAlert: true,
        })
      );
    } else if (newUser.status === StatusCodes.internalServerError) {
      dispatch(
        showHideAlert({
          message: t("internalError"),
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
  );
};
export default RegisterForm;
