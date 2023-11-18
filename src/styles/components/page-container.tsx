"use client";
import { hideMainHeader } from "@/app/utils/hide-main-header-footer";
import { usePathname } from "next/navigation";

import { ReactNode } from "react";

const PageContainer = ({
  children,
  footer,
  language,
}: {
  children: ReactNode;
  footer?: ReactNode;
  language: string;
}) => {
  const pathname = usePathname();
  return (
    <div
      className={`${
        hideMainHeader(language, pathname)
          ? ""
          : "pt-16 flex flex-col min-h-screen w-full"
      }`}>
      <div className="grow">{children}</div>
      {footer ?? null}
    </div>
  );
};
export default PageContainer;
