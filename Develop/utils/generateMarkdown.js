// Function to return a license badge based on the license type
// If no license is provided, return an empty string
function renderLicenseBadge(license) {
  if (!license) return "";
  const badges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    GPL: "![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)",
    Apache: "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-red.svg)",
    BSD: "![License: BSD](https://img.shields.io/badge/License-BSD-orange.svg)"
  };
  return badges[license] || "";
}

// Function to return the license link
// If no license is provided, return an empty string
function renderLicenseLink(license) {
  if (!license) return "";
  const links = {
    MIT: "https://opensource.org/licenses/MIT",
    GPL: "https://www.gnu.org/licenses/gpl-3.0",
    Apache: "https://opensource.org/licenses/Apache-2.0",
    BSD: "https://opensource.org/licenses/BSD-3-Clause"
  };
  return links[license] || "";
}

// Function to return the license section of the README
// If no license is provided, return an empty string
function renderLicenseSection(license) {
  if (!license) return "";
  return `## License\nThis project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact [${data.github}](https://github.com/${data.github}) or email at ${data.email}.
`;
}

export default generateMarkdown;
