import Link from "next/link";
import { ReactNode } from "react";

interface ICustomLink {
  href: string;
  children: ReactNode;
}

const CustomLink = ({ href, children }: ICustomLink) => {
  return (
    <Link
      className="underline text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400"
      //   @ts-ignore
      href={href}>
      {children}
    </Link>
  );
};
export default CustomLink;
