import { useTranslation } from "@/app/i18n";
import classes from "./hero-section.module.css";
import HeroDevicesIcon from "@/styles/icons/hero-devices-icon";

const HeroSection = async ({ language }: { language: string }) => {
  const { t } = await useTranslation({ language, ns: "portfolio" });
  return (
    <section className={`${classes.background} flex h-screen text-white`}>
      <div className="w-full flex flex-col justify-between">
        <div className="text-center pt-40">
          <h1 className=" m-0 p-0 text-5xl font-bold leading-tight">
            {t("introduction")}
          </h1>
          <p className="text-2xl pt-6">{t("subtitle")}</p>
        </div>
        <div className="mr-auto ml-auto hidden md:block">
          <HeroDevicesIcon width={800} height={340} />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
