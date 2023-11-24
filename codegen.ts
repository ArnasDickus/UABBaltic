import type { CodegenConfig } from "@graphql-codegen/cli";

const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    "https://uabbaltic.hasura.app/v1/graphql": {
      headers: {
        "x-hasura-admin-secret": `${process.env.HASURA_ADMIN_SECRET}`,
      },
    },
  },
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
    "src/gql/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
