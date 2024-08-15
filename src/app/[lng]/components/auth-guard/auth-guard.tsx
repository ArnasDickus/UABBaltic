"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const publicRoutes = [
    `/${language}/login`,
    `/${language}/register`,
    `/${language}/confirm-email`,
    `/${language}/forgot-password`,
    `/${language}/reset-password`,
  ];

  const privateRoutes = [`/${language}/chess`, `/${language}/chess/play-chess`];

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "authenticated" && publicRoutes.includes(pathname)) {
    router.push(`/${language}`);
  }

  if (status === "unauthenticated" && privateRoutes.includes(pathname)) {
    router.push(`/${language}`);
  }
  return <>{children}</>;
};
export default AuthGuard;
