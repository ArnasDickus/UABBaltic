import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "q8jzd3",
  e2e: {
    baseUrl: "http://localhost:3000/",
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
