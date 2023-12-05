"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPageRegisterInputs } from "./interfaces";
import { apiRoutes } from "@/constants/routes";
import { StatusCodes } from "@/constants/status-code";

import { formButtonContainerClassNames } from "@/styles/reusable-styles";

import { useTranslation } from "@/app/i18n/client";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import { clientErrorResponseHandler } from "@/app/utils/client-error-response-handler";
import { graphqlErrors } from "@/constants/graphql-errors";
import { IResponseJSON } from "@/app/utils/generic-interface";
import Link from "next/link";
import { registerValidationSchema } from "@/app/utils/validation-schemas";
import { AppDispatch } from "@/store/store";
import Title from "@/components/typography/title";
import Subtitle from "@/components/typography/subtitle";
import CustomLink from "@/components/typography/custom-link";

interface IHandleErrors {
  message: string;
  status: number;
  dispatch: AppDispatch;
  t: (key: string) => string;
}

export const handleErrors = ({
  message,
  dispatch,
  status,
  t,
}: IHandleErrors) => {
  if (message === graphqlErrors.dublicateEmail) {
    dispatch(
      showHideAlert({
        message: t("emailExist"),
        severity: "error",
        showAlert: true,
        alertDataTestId: "emailExistsModal",
      })
    );
  } else if (message === graphqlErrors.dublicateUsername) {
    dispatch(
      showHideAlert({
        message: t("usernameInUse"),
        severity: "error",
        showAlert: true,
        alertDataTestId: "usernameExistsModal",
      })
    );
  } else if (status === StatusCodes.okStatus) {
    dispatch(
      showHideAlert({
        message: t("emailWasSent"),
        severity: "success",
        showAlert: true,
        alertDataTestId: "emailWasSentModal",
      })
    );
  } else {
    dispatch(
      showHideAlert({
        message: t("internalError"),
        severity: "error",
        showAlert: true,
      })
    );
    throw new Error("Internal Error");
  }
};

const RegisterForm = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "register" });
  const dispatch = useAppDispatch();

  const validationSchema = registerValidationSchema({
    t: t,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IPageRegisterInputs>({
    resolver: yupResolver(validationSchema),
  });

  const getNewUser = async (data: IPageRegisterInputs) => {
    try {
      const newUser = await fetch(apiRoutes["create-user"], {
        method: "POST",
        body: JSON.stringify({ formData: data, language: language }),
      });

      const newUserJson: IResponseJSON = await newUser.json();
      handleErrors({
        dispatch,
        message: newUserJson.message,
        status: newUser.status,
        t,
      });
    } catch (error) {
      clientErrorResponseHandler("FailedCreateUser", true);
    }
  };

  const onSubmit: SubmitHandler<IPageRegisterInputs> = async (data) => {
    try {
      await getNewUser(data);
    } catch (error) {
      clientErrorResponseHandler("Failed OnSubmit", false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white px-8 py-8 shadow-md rounded md:bg-inherit md:shadow-none md:px-0 md:py-8">
      <div>
        <Title>{t("createAccount")}</Title>
        <div className="flex gap-1">
          <Subtitle> {t("alreadyHave")}</Subtitle>
          <CustomLink href={`/${language}/login`}> {t("login")}</CustomLink>
        </div>
      </div>
      <div className="mb-4">
        <Input
          name={t("name")}
          errorText={errors.name?.message}
          dataTestIdInput="nameInput"
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
          dataTestIdInput="usernameInput"
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
          dataTestIdInput="emailInput"
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
          dataTestIdInput="passwordInput"
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
          dataTestIdButton="submitButton"
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
