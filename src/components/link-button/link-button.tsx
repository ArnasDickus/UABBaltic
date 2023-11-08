import { RouteType } from "next/dist/lib/load-custom-routes";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface ILinkButton {
  linkProps: LinkProps<RouteType>;
  children: ReactNode;
}

const LinkButton = ({ linkProps, children }: ILinkButton) => {
  return (
    <Link
      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
      {...linkProps}>
      {children}
    </Link>
  );
};
export default LinkButton;
