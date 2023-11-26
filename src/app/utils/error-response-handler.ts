import logger from "@/services/logger";
import * as Sentry from "@sentry/nextjs";

export const errorResponseHandler = (error: any, defaultMessage: string) => {
  logger.error(defaultMessage, { error });
  Sentry.captureException(error);
};
