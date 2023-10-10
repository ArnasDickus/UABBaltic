import HeroSection from "@/components/portfolio/hero-section/hero-section";

import { IPageParamProps } from "@/constants/interfaces";

const Page = ({ params: { lng } }: IPageParamProps) => {
  return (
    <>
      <HeroSection />
    </>
  );
};
export default Page;
