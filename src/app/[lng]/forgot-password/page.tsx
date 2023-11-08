import { formContainerClassNames } from "@/styles/reusable-styles";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ForgotPasswordForm from "./components/forgot-password-form";
import { FC } from "react";
import { IPageParamProps } from "@/constants/interfaces";

const PageForgotPassword: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className={formContainerClassNames}>
      <ForgotPasswordForm language={lng} />
    </div>
  );
};
export default PageForgotPassword;
