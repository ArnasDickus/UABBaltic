import { ReactNode } from "react";

const NavbarWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">{children}</div>
  );
};
export default NavbarWrapper;
