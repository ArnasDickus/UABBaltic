import { RouteType } from "next/dist/lib/load-custom-routes";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface ILinkButton {
  dataTestId?: string;
  linkProps: LinkProps<RouteType>;
  children: ReactNode;
}

const LinkButton = ({ linkProps, children, dataTestId }: ILinkButton) => {
  return (
    <Link
      data-testid={dataTestId}
      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
      {...linkProps}>
      {children}
    </Link>
  );
};
export default LinkButton;
