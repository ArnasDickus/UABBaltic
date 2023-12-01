export const clientErrorResponseHandler = (
  defaultMessage: string,
  throwError: boolean
) => {
  if (throwError) {
    throw new Error(defaultMessage);
  }
};
