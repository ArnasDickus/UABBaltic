"use client";
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
import { ApolloProvider } from "@apollo/client";
import client from "../../../apollo-client";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: IPageParamsLayout) {
  return (
    <html className="scroll-smooth" lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <SessionProvider>
          <ApolloProvider client={client}>
            <ReduxProvider>
              <MainHeader language={lng} />
              {children}
            </ReduxProvider>
          </ApolloProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
