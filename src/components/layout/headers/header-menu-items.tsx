"use client";
import { INavItems } from "@/constants/interfaces";
import { usePathname } from "next/navigation";

interface IGetNavigationItems {
  leftNavItems: INavItems[];
  rightNavItems: INavItems[];
}

interface IMenuItems {
  language: string;
}

const HeaderMenuItems = ({ language }: IMenuItems): IGetNavigationItems => {
  let leftNavItems: INavItems[] = [];
  let rightNavItems: INavItems[] = [];
  const pathname = usePathname();

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
        link: `/${{ language }}/about`,
      },
      {
        title: "Documentation",
        link: `/${language}/documentation`,
      },
      {
        title: "Portfolio",
        link: `/${language}/portfolio`,
      },
    ];
  }

  if (!pathname.includes("portfolio")) {
    rightNavItems = [
      {
        title: "Login",
        link: `/${language}/login`,
      },
      {
        title: "Sign Up",
        link: `/${language}/register`,
      },
    ];
  }

  return { leftNavItems, rightNavItems };
};

export default HeaderMenuItems;
