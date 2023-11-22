import fs from "fs";

const commitMessagePattern = /^#[0-9]+\s+/;

// Read the commit message from the Git commit message file
const commitMessage = fs.readFileSync(".git/COMMIT_EDITMSG", "utf-8").trim();

// Validate the commit message against the pattern
if (!commitMessagePattern.test(commitMessage)) {
  console.error('Invalid commit message. Must start with "#<number> "');
  process.exit(1);
} else {
  console.log("Commit message is valid.");
  process.exit(0);
}
