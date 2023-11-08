import { ServerFooter } from "@/components/layout/footer/serverfooter";
import ExperienceSection from "@/components/portfolio/experience-section/experience-section";
import HeroSection from "@/components/portfolio/hero-section/hero-section";
import ProjectsSection from "@/components/portfolio/projects-section/projects-section";

import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";

const Page = ({ params: { lng } }: IPageParamProps) => {
  return (
    <PageContainer
      footer={<ServerFooter language={lng} path={`/${lng}/portfolio`} />}>
      <HeroSection />
      <ProjectsSection language={lng} />
      <ExperienceSection />
    </PageContainer>
  );
};
export default Page;
