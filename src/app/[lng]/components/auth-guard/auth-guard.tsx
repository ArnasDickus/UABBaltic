"use client";
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
import { ReactNode } from "react";
import PageLoader from "../page-loader/page-loader";

const AuthGuard = ({
  children,
  language,
}: {
  children: ReactNode;
  language: string;
}) => {
  const { status } = useSession();
  const pathname = usePathname();

  const publicRoutes = [
    `/${language}/login`,
    `/${language}/register`,
    `/${language}/confirm-email`,
    `/${language}/forgot-password`,
    `/${language}/reset-password`,
  ];

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "authenticated" && publicRoutes.includes(pathname)) {
    redirect(`/${language}`);
  }

  return <>{children}</>;
};
export default AuthGuard;
