import { FC } from "react";
import { useTranslation } from "../i18n";
import { IPageParamProps } from "@/constants/interfaces";
import { ServerFooter } from "@/components/layout/footer/serverfooter";

const Home: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation({
    language: lng,
  });
  return (
    <main>
      <p>{t("title")}</p>
      <ServerFooter language={lng} path="/" />
    </main>
  );
};

export default Home;
