import { ServerFooter } from "@/components/layout/footer/serverfooter";
import ExperienceSection from "@/app/[lng]/portfolio/components/experience-section/experience-section";
import HeroSection from "@/app/[lng]/portfolio/components/hero-section/hero-section";

import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import AboutSection from "./components/about-section/about-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio a place to show off my skill to future employer",
  keywords: ["Portfolio"],
};

const PagePortfolio = ({ params: { lng } }: IPageParamProps) => {
  return (
    <PageContainer footer={<ServerFooter language={lng} path="/portfolio" />}>
      <HeroSection language={lng} />
      <AboutSection language={lng} />
      <ExperienceSection language={lng} />
    </PageContainer>
  );
};
export default PagePortfolio;
