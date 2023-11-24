import { apiRoutes } from "@/constants/routes";
import { NCheckEmail } from "../api/check-email/route";
import { NCheckUsername } from "../api/check-username/route";

export const isEmailExist = async (email: string): Promise<boolean> => {
  const isEmail: NCheckEmail.IResponse = await fetch(apiRoutes["check-email"], {
    method: "POST",
    body: JSON.stringify({ email: email }),
  }).then(async (emailResult) => {
    if (!emailResult.ok) {
      throw new Error(`Failed to fetch. Status: ${emailResult.status}`);
    }

    const json = await emailResult.json();
    return json;
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
  ).then(async (usernameResult) => {
    if (!usernameResult.ok) {
      throw new Error(`Failed to fetch. Status: ${usernameResult.status}`);
    }
    const json = await usernameResult.json();
    return json;
  });
  return isUsername.usernameExist;
};
