import { formContainerClassNames } from "@/styles/reusable-styles";
import ResetPasswordForm from "./components/reset-password-form";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { Metadata } from "next";
import Image from "next/image";
import ResetPasswordBackground from "@/../public/images/reset-password-background.jpg";
import ContentCenterImageContainer from "@/styles/components/content-center-image-container/content-center-image-container";
import { useTranslation } from "@/app/i18n";

export const metadata: Metadata = {
  title: "Reset password",
  description: "A place to reset password",
  keywords: ["Reset"],
};

const PageResetPassword = async ({ params, searchParams }: IPageParamProps) => {
  const { t } = await useTranslation({
    language: params.lng,
    ns: "reset_password",
  });

  return (
    <PageContainer
      language={params.lng}
      footer={<ServerFooter language={params.lng} path="/reset-password" />}>
      <div className="relative h-screen">
        <div className={formContainerClassNames}>
          <Image
            src={ResetPasswordBackground}
            objectFit="cover"
            fill
            priority
            alt={t("village")}
          />
          <ContentCenterImageContainer>
            <ResetPasswordForm
              language={params.lng}
              token={searchParams.token as string}
            />
          </ContentCenterImageContainer>
        </div>
      </div>
    </PageContainer>
  );
};
export default PageResetPassword;
