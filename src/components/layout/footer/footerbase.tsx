import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { TFunction } from "i18next";
import { languages } from "@/app/i18n/settings";

interface IUseTranslation {
  t: TFunction<any, undefined>;
  lng: string;
  path: string;
}

export const FooterBase = ({ t, lng, path = "" }: IUseTranslation) => {
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-ignore */}
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((language) => lng !== language)
        .map((language, index) => {
          return (
            <span key={language}>
              {index > 0 && " or "}
              <Link href={`/${language}${path}`}>{language}</Link>
            </span>
          );
        })}
    </footer>
  );
};
