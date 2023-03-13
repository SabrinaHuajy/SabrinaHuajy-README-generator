const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const util = require("util");
const writeToFile = util.promisify(fs.writeFile);


// array of questions for user
function promptUser() {

    return inquirer.prompt([
        {
            type: "input",
            message: "Title of the project",
            name: "title"
        },
        {
            type: "input",
            message: "Project description",
            name: "description"
        },
        {
            type: "input",
            message: "Installation instructions",
            name: "instal"
        },
        {
            type: "input",
            message: "Direction of usage",
            name: "usage"
        },
        {
            type: "list",
            message: "Licenses",
            name: "badge",
            choices: [
                "MIT",
                "IBM",
                "Apache",
                "Perl"
            ]
        },
        {
            type: "input",
            message: "Description of the license to use",
            name: "license"
        },
        {
            type: "input",
            message: "List contributions if applicable",
            name: "contributions"
        },
        {
            type: "input",
            message: "Test instructions or notes",
            name: "test"
        },
        {
            type: "input",
            message: "E-mail address",
            name: "Email"
        },
        {
            type: "input",
            message: "Github User name",
            name: "github"
        },
    ]);
}


// function to write README file
// function writeToFile(dist, data) {
// }


function generatefile(answers) {
    var profile = ("https://github.com/" + answers.github)
    return `
# ${answers.title}
${answers.badge === "Apache" ? "Apache" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : answers.badge === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : answers.badge === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl" + "" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
## Description 
         ${answers.description}
## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
            ${answers.instal}
## Usage 
            ${answers.usage}
## License
            ${answers.badge}
            ${answers.license}
## Contributions
            ${answers.contributions}
## Tests
            ${answers.test}
## Questions
    For questions regarding this application please contact me at:
        - E-mail: ${answers.Email}
        - Github:
        <${profile}>
        `;
}

// function to initialize program
async function init() {

    console.log("Initialising Professional README generator");
    try {
        const answers = await promptUser();

        const md = generatefile(answers);

        await writeToFile("./sample_README/README.md", md);

        console.log("Success! Professional README file completed.");

    } catch (err) {
        console.log(err);
    }
};

// function call to initialize program
init();
