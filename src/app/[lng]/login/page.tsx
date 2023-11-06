import { getServerSession } from "next-auth";
import LoginForm from "./components/login-form/login-form";
import { redirect } from "next/navigation";
import { formContainerClassNames } from "@/styles/reusable-styles";

const isLoggedIn = async () => {
  const session = await getServerSession();
  if (session) {
    return false;
  }
  return true;
};

const PageLogin = async () => {
  const isLogged = await isLoggedIn();
  console.log("isLoggedIn", isLogged);
  if (!isLogged) redirect("/");
  // const session = await getServerSession();
  // if (session) {
  //   redirect("/");
  // }
  return (
    <div className={formContainerClassNames}>
      <LoginForm />
    </div>
  );
};
export default PageLogin;
