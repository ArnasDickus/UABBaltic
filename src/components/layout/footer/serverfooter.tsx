import { FC } from "react";
import { FooterBase } from "./footerbase";
import { useTranslation } from "@/app/i18n";
import { IFooterParams } from "./footer-interface";

export const ServerFooter: FC<IFooterParams> = async ({ language, path }) => {
  const { t } = await useTranslation({ language, ns: "footer" });
  return <FooterBase t={t} lng={language} path={path} />;
};
