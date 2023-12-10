import LoginForm from "./components/login-form/login-form";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { FC } from "react";
import { IPageParamProps } from "@/constants/interfaces";
import { Metadata } from "next";
import Image from "next/image";
import LoginBackground from "@/../public/images/login-background.jpg";
import classes from "./login.module.css";

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
      <div className="relative h-screen">
        <Image src={LoginBackground} fill priority alt="sea" />
        <div className={classes.loginForm}>
          <LoginForm language={lng} />
        </div>
      </div>
    </PageContainer>
  );
};
export default PageLogin;
