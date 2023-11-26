"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPageRegisterInputs } from "./interfaces";
import { apiRoutes } from "@/constants/routes";
import { StatusCodes } from "@/constants/status-code";

import {
  formButtonContainerClassNames,
  formClassNames,
} from "@/styles/reusable-styles";

import { useTranslation } from "@/app/i18n/client";
import { useAppDispatch } from "@/store/redux-hooks";
import { showHideAlert } from "@/store/slices/toast-alert-slice";
import {
  useLazyCheckEmailApiQuery,
  useLazyCheckUsernameApiQuery,
} from "@/store/services/auth-api";
import { clientErrorResponseHandler } from "@/app/utils/client-error-response-handler";
import { useLazyGetCurrentWeatherApiQuery } from "@/store/services/weather-app-api";

const RegisterForm = ({ language }: { language: string }) => {
  const { t } = useTranslation({ language, ns: "register" });
  const dispatch = useAppDispatch();

  const [checkEmailTrigger] = useLazyCheckEmailApiQuery();
  const [checkUsernameTrigger] = useLazyCheckUsernameApiQuery();
  const [currentWeatherTrigger] = useLazyGetCurrentWeatherApiQuery();

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

  const checkIfEmailExist = async (email: string): Promise<boolean> => {
    try {
      const emailExistResult = await checkEmailTrigger({
        email: email,
      })
        .unwrap()
        .then((val) => val.emailExist);

      if (emailExistResult) {
        dispatch(
          showHideAlert({
            message: t("emailExist"),
            severity: "error",
            showAlert: true,
          })
        );
      }
      return emailExistResult;
    } catch (error) {
      clientErrorResponseHandler(error, "FailedEmailExist", true);
      return true;
    }
  };

  const checkIfUsernameExist = async (username: string): Promise<boolean> => {
    try {
      const userNameExistResult = await checkUsernameTrigger({
        username: username,
      })
        .unwrap()
        .then((val) => val.usernameExist);

      if (userNameExistResult) {
        dispatch(
          showHideAlert({
            message: t("usernameInUse"),
            severity: "error",
            showAlert: true,
          })
        );
      }
      return userNameExistResult;
    } catch (error) {
      clientErrorResponseHandler(error, "FailedUsernameExist", true);
      return true;
    }
  };

  const getNewUser = async (data: IPageRegisterInputs) => {
    try {
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
    } catch (error) {
      clientErrorResponseHandler(error, "FailedCreateUser", true);
    }
  };

  const checkWeather = async () => {
    try {
      await currentWeatherTrigger({
        lat: 54.6891,
        lon: 25.2798,
        language,
      });
      return true;
    } catch (error) {
      clientErrorResponseHandler(error, "FailedCreateUser", true);
    }
  };

  const onSubmit: SubmitHandler<IPageRegisterInputs> = async (data) => {
    try {
      if (await checkWeather()) {
        return;
      }

      if (await checkIfEmailExist(data.email)) {
        return;
      }
      if (await checkIfUsernameExist(data.username)) {
        return;
      }

      await getNewUser(data);
    } catch (error) {
      clientErrorResponseHandler(error, "Failed OnSubmit", false);
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
