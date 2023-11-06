import { IPageParamProps } from "@/constants/interfaces";
import { FC } from "react";

import RegisterForm from "./components/register-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { formContainerClassNames } from "@/styles/reusable-styles";

const PageRegister: FC<IPageParamProps> = async ({ params: { lng } }) => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className={formContainerClassNames}>
      <RegisterForm language={lng} />
    </div>
  );
};
export default PageRegister;
