export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.LOCAL_BASE_URL;
  } else {
    return process.env.PRODUCTION_BASE_URL;
  }
};
