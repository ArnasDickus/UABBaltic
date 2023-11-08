import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { FC } from "react";

const PagePrivacyPolicy: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      footer={<ServerFooter language={lng} path={`/${lng}/privacy-policy`} />}>
      <p>PagePrivacyPolicy</p>
    </PageContainer>
  );
};
export default PagePrivacyPolicy;
