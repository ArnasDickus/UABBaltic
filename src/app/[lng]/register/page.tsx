import { IPageParamProps } from "@/constants/interfaces";
import { FC } from "react";

import RegisterForm from "./components/register-form";

const PageRegister: FC<IPageParamProps> = ({ params: { lng } }) => {
  return (
    <div className="w-full justify-center flex items-center h-screen ml-auto mr-auto">
      <RegisterForm language={lng} />
    </div>
  );
};
export default PageRegister;
