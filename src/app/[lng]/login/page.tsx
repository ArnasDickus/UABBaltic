import { getServerSession } from "next-auth";
import LoginForm from "./components/login-form/login-form";
import { redirect } from "next/navigation";
import { formContainerClassNames } from "@/styles/reusable-styles";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { FC } from "react";
import { IPageParamProps } from "@/constants/interfaces";

const PageLogin: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }

  return (
    <PageContainer
      footer={<ServerFooter language={lng} path={`/${lng}/login`} />}>
      <div className={formContainerClassNames}>
        <LoginForm />
      </div>
    </PageContainer>
  );
};
export default PageLogin;
