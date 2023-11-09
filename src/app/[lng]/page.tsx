import { FC } from "react";
import { useTranslation } from "../i18n";
import { IPageParamProps } from "@/constants/interfaces";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import PageContainer from "@/styles/components/page-container";

const Home: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation({
    language: lng,
  });
  return (
    <PageContainer footer={<ServerFooter language={lng} path="/" />}>
      <p>{t("title")}</p>
    </PageContainer>
  );
};

export default Home;
