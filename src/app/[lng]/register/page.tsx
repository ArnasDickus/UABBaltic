import { IPageParamProps } from "@/constants/interfaces";
import { FC } from "react";

import RegisterForm from "./components/register-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const PageRegister: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="w-full justify-center flex items-center h-screen ml-auto mr-auto">
      <RegisterForm language={lng} />
    </div>
  );
};
export default PageRegister;
