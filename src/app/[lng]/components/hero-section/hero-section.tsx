import { useTranslation } from "@/app/i18n";
import classes from "./hero-section.module.css";

const HeroSection = async ({ language }: { language: string }) => {
  const { t } = await useTranslation({ language, ns: "translation" });
  return (
    <section className={`${classes.background} flex h-screen text-white`}>
      <div className="w-full flex flex-col justify-between">
        <div className="text-center pt-40">
          <h1 className=" m-0 p-0 text-3x1 font-bold leading-tight md:text-4xl">
            {t("heroTitle")}
          </h1>
          <p className="text-2xl pt-6">{t("heroSubtitle")}</p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
