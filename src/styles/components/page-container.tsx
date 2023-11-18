"use client";
import { hideMainHeaderFooter } from "@/constants/hide-main-header-footer";
import { usePathname } from "next/navigation";

import { ReactNode } from "react";

const PageContainer = ({
  children,
  footer,
  language,
}: {
  children: ReactNode;
  footer: ReactNode;
  language: string;
}) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        hideMainHeaderFooter(language, pathname)
          ? "pt-16 flex flex-col min-h-screen w-ful"
          : ""
      }`}>
      <div className="grow">{children}</div>
      {hideMainHeaderFooter(language, pathname) ? footer : null}
    </div>
  );
};
export default PageContainer;
