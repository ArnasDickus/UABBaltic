"use client";

import { FooterBase } from "./footerbase";
import { FC } from "react";
import { useTranslation } from "@/app/i18n/client";
import { IFooterParams } from "./footer-interface";

export const ClientFooter: FC<IFooterParams> = ({ language, path }) => {
  const { t } = useTranslation({ language, ns: "footer" });
  return <FooterBase t={t} lng={language} path={path} />;
};
