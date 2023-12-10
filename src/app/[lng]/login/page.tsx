import LoginForm from "./components/login-form/login-form";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { FC } from "react";
import { IPageParamProps } from "@/constants/interfaces";
import { Metadata } from "next";
import Image from "next/image";
import LoginBackground from "@/../public/images/login-background.jpg";
import ContentCenterImageContainer from "@/styles/components/content-center-image-container/content-center-image-container";
import { useTranslation } from "@/app/i18n";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Form",
  keywords: ["Login"],
};

const PageLogin: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation({
    language: lng,
    ns: "login_form",
  });
  return (
    <PageContainer
      language={lng}
      footer={<ServerFooter language={lng} path="/login" />}>
      <div className="relative h-screen">
        <Image
          src={LoginBackground}
          objectFit="cover"
          fill
          priority
          alt={t("wood")}
        />
        <ContentCenterImageContainer>
          <LoginForm language={lng} />
        </ContentCenterImageContainer>
      </div>
    </PageContainer>
  );
};
export default PageLogin;
