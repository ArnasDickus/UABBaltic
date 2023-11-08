import crypto from "crypto";

export const generateToken = () => {
  const tokenLength = 64;
  return crypto.randomBytes(tokenLength).toString("hex");
};
