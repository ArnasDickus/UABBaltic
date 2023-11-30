import * as Yup from "yup";

interface IValidationSchema {
  t?: (key: string) => string;
}

export const registerValidationSchema = ({ t }: IValidationSchema = {}) => {
  if (t) {
    return Yup.object().shape({
      name: Yup.string().required(""),
      email: Yup.string()
        .email()
        .required(t("required") || ""),
      username: Yup.string().required(t("required") || ""),
      password: Yup.string()
        .required(t("required") || "")
        .min(8, t("passwordTooShort") || "")
        .matches(/[a-zA-Z]/, t("passwordLatin") || ""),
    });
  } else {
    return Yup.object().shape({
      name: Yup.string().required("required"),
      email: Yup.string().email().required("required"),
      username: Yup.string().required("required"),
      password: Yup.string()
        .required("required")
        .min(8, "passwordTooShort")
        .matches(/[a-zA-Z]/, "passwordLatin"),
    });
  }
};
