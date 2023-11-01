import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const PageForgotPassword = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div>
      <p>PageForgotPassword</p>
    </div>
  );
};
export default PageForgotPassword;
