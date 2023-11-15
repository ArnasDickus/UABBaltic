import { apiRoutes } from "@/constants/routes";
import { NCheckEmail } from "../api/check-email/route";
import { NCheckUsername } from "../api/check-username/route";

export const isEmailExist = async (email: string): Promise<boolean> => {
  const isEmail: NCheckEmail.IResponse = await fetch(apiRoutes["check-email"], {
    method: "POST",
    body: JSON.stringify({ email: email }),
  }).then((emailResult) => {
    return emailResult.json();
  });
  return isEmail.emailExist;
};

export const isUsernameExist = async (email: string): Promise<boolean> => {
  const isUsername: NCheckUsername.IResponse = await fetch(
    apiRoutes["check-username"],
    {
      method: "POST",
      body: JSON.stringify({ email: email }),
    }
  ).then((usernameResult) => {
    return usernameResult.json();
  });
  return isUsername.usernameExist;
};
