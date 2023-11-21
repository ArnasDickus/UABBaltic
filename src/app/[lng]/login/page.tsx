import LoginForm from "./components/login-form/login-form";
import { formContainerClassNames } from "@/styles/reusable-styles";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { FC } from "react";
import { IPageParamProps } from "@/constants/interfaces";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Form",
  keywords: ["Login"],
};

const PageLogin: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      language={lng}
      footer={<ServerFooter language={lng} path="/login" />}>
      <div className={formContainerClassNames}>
        <LoginForm language={lng} />
      </div>
    </PageContainer>
  );
};
export default PageLogin;
