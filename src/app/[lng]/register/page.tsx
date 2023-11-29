import { IPageParamProps } from "@/constants/interfaces";
import { FC } from "react";

import RegisterForm from "./components/register-form";

import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { Metadata } from "next";
import Image from "next/image";
import RegisterBackground from "@/../public/images/register-background.jpg";

export const metadata: Metadata = {
  title: "Register",
  description: "A place to register",
  keywords: ["Register"],
};

const PageRegister: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      language={lng}
      footer={<ServerFooter language={lng} path="/register" />}>
      <div className="flex w-full h-screen">
        <div className="w-full h-screen relative md:w-1/2">
          <Image
            fill
            objectFit="cover"
            className="w-full h-auto"
            src={RegisterBackground}
            alt="sea"
          />
        </div>
        <div className="w-full absolute pt-24 pl-10 pr-10 md:static md:w-1/2 sm:pt-20 sm:pl-20">
          <RegisterForm language={lng} />
        </div>
      </div>
    </PageContainer>
  );
};
export default PageRegister;
