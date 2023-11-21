import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import "@/styles/global.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IPageParamsLayout } from "@/constants/interfaces";
import MainHeader from "@/components/layout/headers/main-header";
import Providers from "./components/providers/providers";
import { Metadata } from "next";
import SnackAlert from "./components/snack-alert/snack-alert";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const title = "UAB Baltic | A place to test inpractical ideas";
const description = "Every developer needs a hobby website";

export const metadata: Metadata = {
  title: {
    template: "%s - UABBaltic",
    absolute: "",
  },
  description,
  keywords: ["Next.js", "React", "Web Development"],
  openGraph: {
    type: "website",
    url: "https://www.uabbaltic.lt/",
    title,
    description,
  },
  metadataBase: new URL("https://www.uabbaltic.lt/"),
  twitter: {
    card: "summary_large_image",
    site: "@DickusArnas",
    creator: "@DickusArnas",
    title,
    description,
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
  params: { lng },
}: IPageParamsLayout) {
  return (
    <html className="scroll-smooth" lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Providers language={lng}>
          <MainHeader language={lng} />
          <SnackAlert />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
