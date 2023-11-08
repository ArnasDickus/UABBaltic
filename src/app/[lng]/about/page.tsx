import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { FC } from "react";

const PageAbout: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer footer={<ServerFooter language={lng} path="/about" />}>
      <p>This is page About</p>
    </PageContainer>
  );
};
export default PageAbout;
