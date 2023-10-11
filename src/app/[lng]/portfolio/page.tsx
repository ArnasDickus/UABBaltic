import ExperienceSection from "@/components/portfolio/experience-section/experience-section";
import HeroSection from "@/components/portfolio/hero-section/hero-section";
import ProjectsSection from "@/components/portfolio/projects-section/projects-section";

import { IPageParamProps } from "@/constants/interfaces";

const Page = ({ params: { lng } }: IPageParamProps) => {
  return (
    <>
      <HeroSection />
      <ProjectsSection language={lng} />
      <ExperienceSection />
    </>
  );
};
export default Page;
