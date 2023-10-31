import crypto from "crypto";

export const generateEmailConfirmationToken = () => {
  const tokenLength = 64;
  return crypto.randomBytes(tokenLength).toString("hex");
};
