import { NextResponse } from "next/server";
import logger from "@/services/logger";
import * as Sentry from "@sentry/nextjs";
import { StatusCodes } from "@/constants/status-code";

export const errorResponseHandler = (
  error: any,
  defaultMessage: string
): NextResponse => {
  logger.error(defaultMessage, { error });
  Sentry.captureException(error);

  return NextResponse.json(
    { message: defaultMessage },
    { status: StatusCodes.internalServerError }
  );
};
