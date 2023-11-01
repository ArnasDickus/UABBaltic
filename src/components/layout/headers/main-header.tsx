"use client";
import LogoIcon from "@/styles/icons/logo-icon";
import HamburgerButton from "./hamburger-button/hamburger-button";
import { INavItems } from "@/constants/interfaces";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import Button from "@/components/button/button";

interface IMainHeader {
  language: string;
}

interface IGetNavigationItems {
  leftNavItems: INavItems[];
  rightNavItems: INavItems[];
}

const MainHeader = ({ language }: IMainHeader) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [session, setSession] = useState<Session | null>(null);
  console.log("session", session);
  const linkClassNames = "text-white rounded-md px-3 py-2 text-sm font-medium";

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
          link: `/${language}/about`,
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
      if (!session) {
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
      } else if (!!session) {
        rightNavItems = [
          {
            title: "Logout",
            link: ``,
          },
        ];
      }
    }

    return { leftNavItems, rightNavItems };
  };

  const navigationItems: IGetNavigationItems = getNavigationItems();

  const isRouteActive = (route: string) => {
    if (route === pathname) {
      return "bg-gray-900 ";
    }
    return "hover:bg-gray-900 ";
  };

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };

    fetchSession();
  }, []);

  return (
    <header className="fixed w-full">
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
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link
                  href={`/${language}`}
                  className="flex flex-shrink-0 items-center">
                  <LogoIcon />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationItems.leftNavItems.map((item) => (
                      <Link
                        key={item.title}
                        // @ts-ignore
                        href={item.link}
                        className={` ${isRouteActive(
                          item.link
                        )}${linkClassNames}`}
                        aria-current="page">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="sm:flex hidden space-x-4">
                  {navigationItems.rightNavItems.map((item) => {
                    if (item.title === "Logout" && !!session) {
                      return (
                        <Button key={item.title} onClick={() => signOut()}>
                          {item.title}
                        </Button>
                      );
                    } else {
                      return (
                        <Link
                          key={item.title}
                          className={`${isRouteActive(
                            item.link
                          )} ${linkClassNames}`}
                          /* @ts-ignore */
                          href={item.link}>
                          {item.title}
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigationItems.leftNavItems
                .concat(navigationItems.rightNavItems)
                .map((item) => {
                  if (item.title === "Logout" && !!session) {
                    return (
                      <Button key={item.title} onClick={() => signOut()}>
                        {item.title}
                      </Button>
                    );
                  } else {
                    return (
                      <Link
                        className={`${isRouteActive(
                          item.link
                        )} ${linkClassNames} block`}
                        key={item.title}
                        onClick={() => setMenuOpen(false)}
                        // @ts-ignore
                        href={item.link}>
                        {item.title}
                      </Link>
                    );
                  }
                })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default MainHeader;
