const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Get the input value
  const nameToGreet = core.getInput('name');
  const message = `Hello, ${nameToGreet}!`;
  console.log(message);

  // Set the output variable
  core.setOutput("phrase", message);
  
} catch (error) {
  core.setFailed(error.message);
}