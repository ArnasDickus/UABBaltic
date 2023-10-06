import { ClientFooter } from "@/components/layout/footer/clientfooter";

import { IPageParamProps } from "@/constants/interfaces";

const Page = ({ params: { lng } }: IPageParamProps) => {
  return (
    <div>
      {/* <Header language={lng} /> */}
      <p>Portfolio Page</p>

      <div id="hero-section" className="mb-96">
        <h2>hero section</h2>
      </div>
      <div className="mb-96">Hello</div>
      <div className="mb-96">Hello</div>
      <div className="mb-96">Hello</div>

      <div id="experience-section" className="mb-96">
        <h2>Experience Sections</h2>
      </div>

      <div className="mb-96">Hello</div>
      <div className="mb-96">Hello</div>

      <ClientFooter language={lng} path="/portfolio" />
    </div>
  );
};
export default Page;
