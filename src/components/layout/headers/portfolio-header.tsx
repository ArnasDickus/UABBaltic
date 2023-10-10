"use client";
import React, { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import LogoIcon from "@/styles/icons/logo-icon";
import HamburgerButton from "./hamburger-button/hamburger-button";
import Link from "next/link";

interface IPortfolioHeader {
  language: string;
}

interface INavItems {
  title: string;
  link: string;
}

const PortfolioHeader = ({ language }: IPortfolioHeader): JSX.Element => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navItems: INavItems[] = [
    {
      title: "Home",
      link: "#hero-section",
    },
    {
      title: "Experience",
      link: "#experience-section",
    },
  ];

  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <HamburgerButton
                onClick={() => {
                  setMenuOpen(!isMenuOpen);
                }}
              />
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex isMenuOpenflex-shrink-0 items-center">
                <LogoIcon />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.title}
                      // @ts-ignore
                      href={item.link}
                      className="hover:bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="hover:bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default PortfolioHeader;
