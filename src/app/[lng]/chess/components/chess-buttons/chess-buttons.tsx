import { useTranslation } from "@/app/i18n";
import Button from "@/components/button/button";
import Link from "next/link";

const ChessButtons = async ({ language }: { language: string }) => {
  const { t } = await useTranslation({
    language,
    ns: "chess",
  });

  return (
    <div>
      <Button
        dataTestIdButton="loginSubmitButton"
        buttonProps={{
          type: "button",
        }}>
        {/* @ts-ignore */}
        <Link href={`/${language}/chess/play-chess`}>{t("newGame")}</Link>
      </Button>
    </div>
  );
};
export default ChessButtons;
