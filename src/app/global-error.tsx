"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import Error from "next/error";

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        <Error statusCode={undefined as any} />
      </body>
    </html>
  );
};
export default GlobalError;
