import { formContainerClassNames } from "@/styles/reusable-styles";
import ResetPasswordForm from "./components/reset-password-form";
import { IPageParamProps } from "@/constants/interfaces";

const PageResetPassword = ({ params, searchParams }: IPageParamProps) => {
  return (
    <div className={formContainerClassNames}>
      <ResetPasswordForm token={searchParams.token as string} />
    </div>
  );
};
export default PageResetPassword;
