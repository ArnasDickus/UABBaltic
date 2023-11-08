import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import { FC } from "react";

const PageDashboard: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer footer={<ServerFooter language={lng} path="/dashboard" />}>
      <p>PageDashboard</p>
    </PageContainer>
  );
};
export default PageDashboard;
