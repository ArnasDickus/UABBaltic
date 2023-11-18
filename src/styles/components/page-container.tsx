"use client";
import { hideMainHeaderFooter } from "@/app/utils/hide-main-header-footer";
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
          ? ""
          : "pt-16 flex flex-col min-h-screen w-full"
      }`}>
      <div className="grow">{children}</div>
      {hideMainHeaderFooter(language, pathname) ? null : footer}
    </div>
  );
};
export default PageContainer;
