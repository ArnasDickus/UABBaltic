import { ReactNode } from "react";
import { UseTranslationOptions } from "react-i18next";

export interface IPageParamProps {
  params: {
    lng: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface IUseTranslation {
  language: string;
  ns?: string;
  options?: UseTranslationOptions<undefined> | undefined;
}

export interface IPageParamsLayout extends IPageParamProps {
  children: ReactNode;
}
