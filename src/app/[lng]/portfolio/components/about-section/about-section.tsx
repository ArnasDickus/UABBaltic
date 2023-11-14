import classes from "./about-section.module.css";
import { useTranslation } from "@/app/i18n";

const AboutSection = async ({ language }: { language: string }) => {
  const { t } = await useTranslation({ language, ns: "portfolio" });
  return (
    <section className={classes.section}>
      <div className="flex justify-center">
        <div className={classes.wrapper}>
          <h2 className="text-2xl text-white text-center pb-4">
            {t("aboutIntro")}
          </h2>
          <h3 className="text-white">{t("aboutDescription")}</h3>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
