"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { IPageParamProps } from "@/constants/interfaces";
import { ClientFooter } from "@/components/layout/footer/clientfooter";
import { useTranslation } from "@/app/i18n/client";

const Page: FC<IPageParamProps> = ({ params: { lng } }) => {
  const { t } = useTranslation({ language: lng, ns: "client-page" });
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("counter", { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
      <Link href={`/${lng}`}>
        <button type="button">{t("back-to-home")}</button>
      </Link>
      <Link href={`/${lng}/client-page`}>
        <button type="button">{t("to-client-page")}</button>
      </Link>
      <ClientFooter language={lng} path={"/client-page"} />
    </>
  );
};

export default Page;
