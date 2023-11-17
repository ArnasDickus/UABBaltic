import { formContainerClassNames } from "@/styles/reusable-styles";
import ForgotPasswordForm from "./components/forgot-password-form";
import { FC } from "react";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot Password Form",
  keywords: ["Forgot Password"],
};

const PageForgotPassword: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      footer={<ServerFooter language={lng} path="/forgot-password" />}>
      <div className={formContainerClassNames}>
        <ForgotPasswordForm language={lng} />
      </div>
    </PageContainer>
  );
};
export default PageForgotPassword;
