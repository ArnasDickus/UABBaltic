/**
 * This script merges the coverage reports from Cypress and Jest into a single one,
 * inside the "coverage" folder
 */

const { execSync } = require("child_process");
const fs = require("fs-extra");

const REPORTS_FOLDER = "reports";
const FINAL_OUTPUT_FOLDER = "coverage";

const runFunction = (commands: string[]) => {
  commands.forEach((command: string) =>
    execSync(command, { stdio: "inherit" })
  );
};
// TODO DELETE CYPRESS LOGIC
// Create the reports folder and move the reports from cypress and jest inside it
fs.emptyDirSync(REPORTS_FOLDER);
fs.copyFileSync(
  "cypress-coverage/coverage-final.json",
  `${REPORTS_FOLDER}/from-cypress.json`
);
fs.copyFileSync(
  "jest-coverage/coverage-final.json",
  `${REPORTS_FOLDER}/from-jest.json`
);

fs.emptyDirSync(".nyc_output");
fs.emptyDirSync(FINAL_OUTPUT_FOLDER);

// Run "nyc merge" inside the reports folder, merging the two coverage files into one,
// then generate the final report on the coverage folder
runFunction([
  // "nyc merge" will create a "coverage.json" file on the root, we move it to .nyc_output
  `nyc merge ${REPORTS_FOLDER} && move coverage.json .nyc_output/out.json`,
  `nyc report --reporter lcov --report-dir ${FINAL_OUTPUT_FOLDER}`,
]);
