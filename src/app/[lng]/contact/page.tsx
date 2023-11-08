import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { FC } from "react";

const PageContact: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      footer={<ServerFooter language={lng} path={`/${lng}/contact`} />}>
      <p>PageContact</p>
    </PageContainer>
  );
};
export default PageContact;
