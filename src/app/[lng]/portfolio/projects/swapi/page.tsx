import { useTranslation } from "@/app/i18n";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Swapi",
  description: "Swapi the most common api for companies to use as task",
  keywords: ["Swapi"],
};

const PageSwapi: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation({ language: lng, ns: "swapi" });
  return (
    <PageContainer
      footer={<ServerFooter language={lng} path="/portfolio/projects/swapi" />}>
      <div className="m-10 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {t("aboutTitle")}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {t("aboutDescription")}
        </p>
      </div>
    </PageContainer>
  );
};
export default PageSwapi;
