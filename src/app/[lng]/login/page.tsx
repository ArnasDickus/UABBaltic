import { getServerSession } from "next-auth";
import LoginForm from "./components/login-form/login-form";
import { redirect } from "next/navigation";
import { formContainerClassNames } from "@/styles/reusable-styles";

const PageLogin = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }

  return (
    <div className={formContainerClassNames}>
      <LoginForm />
    </div>
  );
};
export default PageLogin;
