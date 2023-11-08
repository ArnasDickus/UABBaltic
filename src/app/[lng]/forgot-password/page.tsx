import { formContainerClassNames } from "@/styles/reusable-styles";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ForgotPasswordForm from "./components/forgot-password-form";
import { FC } from "react";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";

const PageForgotPassword: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <PageContainer
      footer={<ServerFooter language={lng} path={`/${lng}/forgot-password`} />}>
      <div className={formContainerClassNames}>
        <ForgotPasswordForm language={lng} />
      </div>
    </PageContainer>
  );
};
export default PageForgotPassword;
