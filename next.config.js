const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_HASURA_ADMIN_SECRET:
      process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
    NEXT_HASURA_PROJECT_ENDPOINT: process.env.NEXT_HASURA_PROJECT_ENDPOINT,
    NEXT_PUBLIC_NEXT_HASURA_PROJECT_ENDPOINT:
      process.env.NEXT_PUBLIC_NEXT_HASURA_PROJECT_ENDPOINT,
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    NEXT_PUBLIC_LOCAL_BASE_URL: process.env.NEXT_PUBLIC_LOCAL_BASE_URL,
    NEXT_PUBLIC_PRODUCTION_BASE_URL:
      process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
  sentry: {
    tunnelRoute: "/en/monitoring-tunnel",
  },
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverActions: true,
  },
};

module.exports = nextConfig;

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "uabbaltic",
    project: "uab-baltic",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/en/monitoring-tunnel",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
