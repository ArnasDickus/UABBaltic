import PageContainer from "@/styles/components/page-container";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import { FC } from "react";
import { IPageParamProps } from "@/constants/interfaces";
import { Tasks } from "./components/tasks";


const PageInterview: FC<IPageParamProps> = async ({ params: { lng } }) => {
  return (
    <PageContainer
      language={lng}
      footer={<ServerFooter language={lng} path="/login" />}>
        <div>
            <Tasks />
        </div>
    </PageContainer>
  );
};
export default PageInterview;
