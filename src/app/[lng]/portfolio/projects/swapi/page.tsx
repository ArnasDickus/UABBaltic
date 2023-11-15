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
  return (
    <PageContainer
      footer={<ServerFooter language={lng} path="/portfolio/projects/swapi" />}>
      <p>
        This task was inspired by all the practical tasks I did regarding Swap
        Api
      </p>
    </PageContainer>
  );
};
export default PageSwapi;
