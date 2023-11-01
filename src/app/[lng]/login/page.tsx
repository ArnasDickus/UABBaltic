import { getServerSession } from "next-auth";
import LoginForm from "./components/login-form/login-form";
import { redirect } from "next/navigation";

const PageLogin = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="w-full justify-center flex items-center h-screen ml-auto mr-auto">
      <LoginForm />
    </div>
  );
};
export default PageLogin;
