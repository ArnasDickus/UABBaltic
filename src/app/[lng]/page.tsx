import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "../i18n";
import { IPageParamProps } from "@/constants/interfaces";
import { ServerFooter } from "@/components/layout/footer/serverfooter";

export const dynamic = "force-dynamic";

const Home: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const { t } = await useTranslation({
    language: lng,
  });
  return (
    <main>
      <p>{t("title")}</p>
      <Link href={`/${lng}/client-page`}>
        <button type="button">{t("to-client-page")}</button>
      </Link>
      <ServerFooter language={lng} path="/" />
    </main>
  );
};

export default Home;
