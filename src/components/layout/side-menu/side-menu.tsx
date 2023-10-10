"use client";
import AboutIcon from "@/styles/icons/about-icon";
import FilmsIcon from "@/styles/icons/films-icon";
import LogoIcon from "@/styles/icons/logo-icon";
import Link from "next/link";
import { Fragment, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface IMenuItems {
  title: string;
  icon: ReactNode;
  link: string;
}

const SideMenu = ({ language }: { language: string }) => {
  const pathName = usePathname();

  const menuItems: IMenuItems[] = [
    {
      title: "About",
      icon: <AboutIcon />,
      link: `/${language}/portfolio/projects/swapi/about`,
    },
    {
      title: "Films",
      icon: <FilmsIcon />,
      link: `/${language}/portfolio/projects/swapi/films`,
    },
  ];
  console.log("language", language);
  return (
    <>
      <div className="fixed top-15 left-0 z-40 w-16 h-screen overflow-hidden text-gray-400 bg-gray-900 sm:w-40">
        <Link
          className="flex items-center w-full px-3 mt-3"
          // @ts-ignore
          href="/">
          <LogoIcon />
          <span className="ml-2 text-sm font-bold hidden sm:block">SWAPI</span>
        </Link>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            {menuItems.map((item) => (
              <Fragment key={item.title}>
                <Link
                  className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
                    pathName === item.link
                      ? "bg-gray-700 text-gray-300"
                      : "hover:bg-gray-700 hover:text-gray-300"
                  }`}
                  //   @ts-ignore
                  href={item.link}>
                  {item.icon}
                  <span className="ml-2 text-sm font-medium hidden sm:block">
                    {item.title}
                  </span>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SideMenu;
