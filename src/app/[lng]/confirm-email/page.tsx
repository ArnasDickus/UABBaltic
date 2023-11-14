import { IPageParamProps } from "@/constants/interfaces";
import PageContainer from "@/styles/components/page-container";
import ValidateEmail from "./components/validate-email/validate-email";
import { ServerFooter } from "@/components/layout/footer/serverfooter";

const ConfirmEmail = ({ params, searchParams }: IPageParamProps) => {
  return (
    <PageContainer
      footer={<ServerFooter language={params.lng} path="/confirm-email" />}>
      <ValidateEmail params={params} searchParams={searchParams} />
    </PageContainer>
  );
};
export default ConfirmEmail;
