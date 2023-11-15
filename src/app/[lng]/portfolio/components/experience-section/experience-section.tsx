import Image from "next/image";
import Emendis from "../../../../../../public/images/emendis.png";
import ITODev from "../../../../../../public/images/ito-dev.png";
import Pixinn from "../../../../../../public/images/pixinn.png";
import { useTranslation } from "@/app/i18n";
import { sectionHeader } from "@/styles/reusable-styles";

const ExperienceSection = async ({ language }: { language: string }) => {
  const { t } = await useTranslation({ language, ns: "portfolio" });
  return (
    <section className="pt-10" id="experience-section">
      <h2 className={sectionHeader}>{t("companies")}</h2>
      <div className="flex justify-center items-center gap-10">
        <a href="https://www.emendis.io/" target="_blank">
          <Image src={Emendis} width={200} alt="Emendis logo" />
        </a>
        <a href="https://ito.lt/" target="_blank">
          <Image src={ITODev} width={200} alt="ItoDev logo" />
        </a>
        <a href="https://pixinn.lt/" target="_blank">
          <Image src={Pixinn} width={200} alt="Pixinn logo" />
        </a>
      </div>
    </section>
  );
};
export default ExperienceSection;
