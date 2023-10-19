"use client";
import Button from "@/components/button/button";
import Input from "@/components/input/input";
import LinkButton from "@/components/link-button/link-button";
import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ADD_USER } from "@/app/store/modules/user/query";

type IPageRegisterInputs = {
  name: string;
  email: string;
  username: string;
  password: string;
};

const RegisterForm = ({ language }: { language: string }) => {
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
    formState: { errors },
  } = useForm<IPageRegisterInputs>({
    resolver: yupResolver(validationSchema),
  });

  const [addUser] = useMutation(ADD_USER);

  const onSubmit: SubmitHandler<IPageRegisterInputs> = async (data) => {
    await addUser({
      variables: {
        addUserObject: [
          {
            name: data.name,
            password: data.password,
            email: data.email,
            username: data.username,
          },
        ],
      },
    });
  };
  return (
    <form
      className="bg-white shadow-md rounded px-8 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Input
          name="Name"
          errorText={errors.name?.message}
          inputProps={{
            type: "text",
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
            ...register("password"),
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <Button
          buttonProps={{
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
  );
};
export default RegisterForm;
