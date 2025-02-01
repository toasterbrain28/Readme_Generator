import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage instructions:",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can people contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "What is the license for your project?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0"],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }
    console.log("README file created successfully!");
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

init();