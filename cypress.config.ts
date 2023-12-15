import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "q8jzd3",
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    setupNodeEvents: (on, config) => {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents: (on, config) => {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
    defaultCommandTimeout: 6000,
    env: {
      codeCoverage: {
        exclude: ["node_modules"],
        // At end of run, call this endpoint to retrieve code coverage info from the backend
        // and combine with coverage info from frontend code executed in the browser
        url: "http://localhost:3000/api/__coverage__",
      },
    },
  },
});
