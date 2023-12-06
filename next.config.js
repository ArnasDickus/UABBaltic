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
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
