"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import LinkButton from "@/components/link-button/link-button";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { IPageRegisterInputs } from "./interfaces";
import { apiRoutes } from "@/constants/routes";
import SnackAlert, { ISnackAlert } from "@/components/snack-alert/snack-alert";
import { useState } from "react";
import { StatusCodes } from "@/constants/status-code";
import { GET_USER } from "@/components/store/modules/user/query";
import client from "../../../../../apollo-client";
import {
  formButtonContainerClassNames,
  formClassNames,
} from "@/styles/reusable-styles";
import { isEmailExist } from "@/app/utils/auth-functions";

const RegisterForm = ({ language }: { language: string }) => {
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
    name: Yup.string().required("Privaloma"),
    email: Yup.string().email().required("Privaloma"),
    username: Yup.string().required("Privaloma"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<IPageRegisterInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IPageRegisterInputs> = async (data) => {
    const emailExist = await isEmailExist(data.email);
    const usernameExist = await isUsernameExist(data.username);

    if (emailExist) {
      setAlert({
        message: `Emailas jau egzistuoja`,
        severity: "error",
        showAlert: true,
      });
      return;
    }

    if (usernameExist) {
      setAlert({
        message: `Username jau egzistuoja`,
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
        message: "Email was sent.",
        severity: "success",
        showAlert: true,
      });
    } else if (newUser.status === StatusCodes.internalServerError) {
      setAlert({
        message: "Something went wrong, please try again later",
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
            name="Name"
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
            name="Username"
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
            name="Email"
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
            name="Password"
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
            Register
          </Button>
          <LinkButton
            linkProps={{
              // @ts-ignore
              href: `/${language}/forgot-password`,
            }}>
            Forgot Password?
          </LinkButton>
        </div>
      </form>
    </>
  );
};
export default RegisterForm;
