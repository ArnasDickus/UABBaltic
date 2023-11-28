import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "q8jzd3",
  e2e: {
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
