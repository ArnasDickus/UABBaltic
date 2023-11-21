import { formContainerClassNames } from "@/styles/reusable-styles";
import ResetPasswordForm from "./components/reset-password-form";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset password",
  description: "A place to reset password",
  keywords: ["Reset"],
};

const PageResetPassword = ({ params, searchParams }: IPageParamProps) => {
  return (
    <PageContainer
      language={params.lng}
      footer={<ServerFooter language={params.lng} path="/reset-password" />}>
      <div className={formContainerClassNames}>
        <ResetPasswordForm
          language={params.lng}
          token={searchParams.token as string}
        />
      </div>
    </PageContainer>
  );
};
export default PageResetPassword;
