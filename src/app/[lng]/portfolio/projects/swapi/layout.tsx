import SideMenu from "@/components/layout/side-menu/side-menu";

const SwapiLayout = ({ children, params: { lng } }: any) => {
  return (
    <div className="flex ml-16 sm:ml-40">
      <SideMenu language={lng} />
      {children}
    </div>
  );
};

export default SwapiLayout;
