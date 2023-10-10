import SideMenu from "@/components/layout/side-menu/side-menu";
import { IPageParamsLayout } from "@/constants/interfaces";

const SwapiLayout = ({ children, params: { lng } }: IPageParamsLayout) => {
  return (
    <div className="flex ml-16 sm:ml-40">
      <SideMenu language={lng} />
      {children}
    </div>
  );
};

export default SwapiLayout;
