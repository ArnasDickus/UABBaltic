import * as Sentry from "@sentry/nextjs";

export const clientErrorResponseHandler = (
  error: any,
  defaultMessage: string,
  throwError: boolean
) => {
  Sentry.captureException(error);

  if (throwError) {
    throw new Error(defaultMessage);
  }
};
