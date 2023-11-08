import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { FC } from "react";

const PageDocumentation: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      footer={<ServerFooter language={lng} path="/documentation" />}>
      <p>Documentation page</p>
    </PageContainer>
  );
};
export default PageDocumentation;
