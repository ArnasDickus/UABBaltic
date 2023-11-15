import Link from "next/link";
import { TFunction } from "i18next";
import { languages } from "@/app/i18n/settings";
import Flag from "@/components/flag/flag";

interface IUseTranslation {
  t: TFunction<any, undefined>;
  lng: string;
  path: string;
}

export const FooterBase = async ({ t, lng, path = "" }: IUseTranslation) => {
  const getValidCountryCode = (language: string) => {
    if (language === "en") {
      return "gb";
    }
    return "lt";
  };

  return (
    <footer>
      <footer className="bg-white rounded-lg shadow mt-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href={`/${lng}`} className="hover:underline">
              UABBaltic
            </Link>
            . {t("allRights")}.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {languages
              .filter((language) => lng !== language)
              .map((language, index) => {
                return (
                  <span key={language} className="flex">
                    {index > 0 && " or "}
                    <Link href={`/${language}${path}`}>
                      <Flag countryCode={getValidCountryCode(language)} />
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
