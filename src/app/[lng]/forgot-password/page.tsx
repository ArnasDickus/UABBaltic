import ForgotPasswordForm from "./components/forgot-password-form";
import { FC } from "react";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { Metadata } from "next";
import ForgotPasswordBackground from "@/../public/images/forgot-password-background.jpg";
import Image from "next/image";
import ContentCenterImageContainer from "@/styles/components/content-center-image-container/content-center-image-container";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot Password Form",
  keywords: ["Forgot Password"],
};

const PageForgotPassword: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      language={lng}
      footer={<ServerFooter language={lng} path="/forgot-password" />}>
      <div className="relative h-screen">
        <Image
          src={ForgotPasswordBackground}
          objectFit="cover"
          fill
          priority
          alt="road"
        />
        <ContentCenterImageContainer>
          <ForgotPasswordForm language={lng} />
        </ContentCenterImageContainer>
      </div>
    </PageContainer>
  );
};
export default PageForgotPassword;
