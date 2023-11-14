import { ServerFooter } from "@/components/layout/footer/serverfooter";
import ExperienceSection from "@/app/[lng]/portfolio/components/experience-section/experience-section";
import HeroSection from "@/app/[lng]/portfolio/components/hero-section/hero-section";
import ProjectsSection from "@/app/[lng]/portfolio/components/projects-section/projects-section";

import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import AboutSection from "./components/about-section/about-section";

const PagePortfolio = ({ params: { lng } }: IPageParamProps) => {
  return (
    <PageContainer footer={<ServerFooter language={lng} path="/portfolio" />}>
      <HeroSection language={lng} />
      <AboutSection language={lng} />
      <ProjectsSection language={lng} />
      <ExperienceSection />
    </PageContainer>
  );
};
export default PagePortfolio;
