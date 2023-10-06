import { ClientFooter } from "@/components/layout/footer/clientfooter";
import Header from "@/components/layout/header/header";
import { IPageParamProps } from "@/constants/interfaces";

const Page = ({ params: { lng } }: IPageParamProps) => {
  return (
    <div>
      <Header language={lng} />
      <p>Portfolio Page</p>
      <ClientFooter language={lng} path="/portfolio" />
    </div>
  );
};
export default Page;
