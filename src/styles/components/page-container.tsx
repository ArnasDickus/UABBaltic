import { ReactNode } from "react";

const PageContainer = ({
  children,
  footer,
}: {
  children: ReactNode;
  footer: ReactNode;
}) => {
  return (
    <div className="pt-16 flex flex-col min-h-screen w-full">
      <div className="grow">{children}</div>
      {footer}
    </div>
  );
};
export default PageContainer;
