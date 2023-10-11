"use-client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import "@/styles/global.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IPageParamsLayout } from "@/constants/interfaces";
import ReduxProvider from "../providers/redux-provider";
import MainHeader from "@/components/layout/headers/main-header";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
// TODO improve SEO
export const metadata: Metadata = {
  title: "UAB Baltic",
  description: "The only portfolio you need to see",
};

export default function RootLayout({
  children,
  params: { lng },
}: IPageParamsLayout) {
  return (
    <html className="scroll-smooth" lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <ReduxProvider>
          <MainHeader />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
