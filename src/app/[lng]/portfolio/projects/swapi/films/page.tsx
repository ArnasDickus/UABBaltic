import { Metadata } from "next";
import FilmContent from "./components/film-content/film-content";
import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { IPageParamProps } from "@/constants/interfaces";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Swapi Films",
  description: "Swapi Films",
  keywords: ["Films", "Swapi"],
};

const PageFilms: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      footer={<ServerFooter language={lng} path="/portfolio/projects/swapi" />}>
      <FilmContent />
    </PageContainer>
  );
};
export default PageFilms;
