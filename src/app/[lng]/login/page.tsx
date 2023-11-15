import { getServerSession } from "next-auth";
import LoginForm from "./components/login-form/login-form";
import { redirect } from "next/navigation";
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
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }

  return (
    <PageContainer footer={<ServerFooter language={lng} path="/login" />}>
      <div className={formContainerClassNames}>
        <LoginForm language={lng} />
      </div>
    </PageContainer>
  );
};
export default PageLogin;
