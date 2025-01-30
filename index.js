const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the input value
  const nameToGreet = core.getInput('who-to-greet');
  const message = `Hello, ${nameToGreet}!`;
  console.log(message);

  // Set the output variable
  core.setOutput("greeting", message);

  // Optionally, you can set more outputs
  core.setOutput("time", new Date().toTimeString());
} catch (error) {
  core.setFailed(error.message);
}