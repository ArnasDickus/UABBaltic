export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_LOCAL_BASE_URL;
  } else {
    return process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL;
  }
};
