"use client";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import "@/styles/global.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { INavItems, IPageParamsLayout } from "@/constants/interfaces";
import ReduxProvider from "../providers/redux-provider";
import MainHeader from "@/components/layout/headers/main-header";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface IGetNavigationItems {
  leftNavItems: INavItems[];
  rightNavItems: INavItems[];
}

export default function RootLayout({
  children,
  params: { lng },
}: IPageParamsLayout) {
  const pathname = usePathname();

  const getNavigationItems = (): IGetNavigationItems => {
    let leftNavItems: INavItems[] = [];
    let rightNavItems: INavItems[] = [];

    if (pathname.includes("portfolio")) {
      leftNavItems = [
        {
          title: "Home",
          link: "#hero-section",
        },
        {
          title: "Experience",
          link: "#experience-section",
        },
      ];
    } else {
      leftNavItems = [
        {
          title: "About",
          link: `/${lng}/about`,
        },
        {
          title: "Documentation",
          link: `/${lng}/documentation`,
        },
      ];

      rightNavItems = [
        {
          title: "Login",
          link: `/${lng}/login`,
        },
        {
          title: "Sign Up",
          link: `/${lng}/register`,
        },
      ];
    }

    return { leftNavItems, rightNavItems };
  };

  const navigationItems: IGetNavigationItems = getNavigationItems();

  return (
    <html className="scroll-smooth" lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <ReduxProvider>
          <MainHeader
            language={lng}
            leftNavItems={navigationItems.leftNavItems}
            rightNavItems={navigationItems.rightNavItems}
          />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
