# Professional README Generator

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project. 


As a developer, I want a README generator so that I can quickly create a professional README for a new project.
 
With this command-line application the user would be able to quickly and easily generate a README file. This allows the project creator to devote more time to working on the project.

I have created a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Using the guideline from [Good README Guide](../../01-HTML-Git-CSS/04-Important/Good-README-Guide/README.md) as a reminder of everything that a high-quality, professional README should contain. 
 
The application will be invoked by using the following command:

```bash
node index.js
```

Link to the a walkthrough video demonstrating the functionality of the application - https://drive.google.com/file/d/1Cpd4nuSZnIOw3f74aCdFf4LKNFdLlUbY/view?usp=sharing

This application has the following functionality:
* Accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README


Professional README Generator
MIT<br>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description 
         A command-line application that allows the user to quickly and easily generate a README file.
## Table of contents
- [Professional README Generator](#professional-readme-generator)
  - [Description](#description)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
## Installation
            Run npm install inquirer and then run node index.js
## Usage 
            For generating a professional README file
## License
            MIT
            MIT license covered by MIT
## Contributions
            Sabrina Hua
## Tests
            To be manually tested
## Questions
    For questions regarding this application please contact me at:
        - E-mail: j.hua@york.ac.uk
        - Github:
        <https://github.com/SabrinaHuajy>
        