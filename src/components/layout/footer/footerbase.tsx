import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { TFunction } from "i18next";
import { languages } from "@/app/i18n/settings";
import Flag from "@/components/flag/flag";

interface IUseTranslation {
  t: TFunction<any, undefined>;
  lng: string;
  path: string;
}

export const FooterBase = ({ t, lng, path = "" }: IUseTranslation) => {
  const listItems = [
    {
      name: "About",
      link: `/${lng}/about`,
    },
    {
      name: "Privacy Policy",
      link: `/${lng}/privacy-policy`,
    },
    {
      name: "Contact",
      link: `/${lng}/contact`,
    },
  ];

  return (
    <footer>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href={`/${lng}`} className="hover:underline">
              UABBaltic
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {listItems.map((item) => (
              <li key={item.name}>
                <Link
                  className="mr-4 hover:underline md:mr-6 "
                  /* @ts-ignore */
                  href={item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
            {languages
              .filter((language) => lng !== language)
              .map((language, index) => {
                return (
                  <span key={language} className="flex">
                    {index > 0 && " or "}
                    <Link href={`/${language}${path}`}>
                      <Flag countryCode={language} />
                    </Link>
                  </span>
                );
              })}
          </ul>
        </div>
      </footer>
    </footer>
  );
};
