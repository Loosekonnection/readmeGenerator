// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'GNU General Public License v3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
        case 'MIT License':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'BSD 2-Clause "Simplified" License':
            return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        case 'BSD 3-Clause "New" or "Revised" License':
            return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        case 'Boost Software License 1.0':
            return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        case 'Creative Commons Zero v1.0 Universal':
            return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
        case 'Eclispe Public License 2.0':
            return '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
        case 'GNU Affero General Puplic License v3.0':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
        case 'GNU General Public License v2.0':
            return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
        case 'GNU Lesser General Public License v2.1':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)';
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case 'The Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        default:
          // If there is no license, return an empty string
          return "";
      }
 }

// Function that returns the license link
function renderLicenseLink(license) {
    switch (license) {
        case 'Apache License 2.0':
            return 'Apache License 2.0 - for more detail [Visit Site](https://opensource.org/licenses/Apache-2.0)';
        case 'GNU General Public License v3.0':
            return 'GNU General Public License v3.0 - for more detail [Visit Site](http://www.gnu.org/licenses/gpl-3.0)';
        case 'MIT License':
            return 'MIT License - for more detail [Visit Site](https://opensource.org/licenses/MIT)';
        case 'BSD 2-Clause "Simplified" License':
            return 'BSD 2-Clause "Simplified" License - for more detail [Visit Site](https://opensource.org/licenses/BSD-2-Clause)';
        case 'BSD 3-Clause "New" or "Revised" License':
            return 'BSD 3-Clause "New" or "Revised" License - for more detail [Visit Site](https://opensource.org/licenses/BSD-3-Clause)';
        case 'Boost Software License 1.0':
            return 'Boost Software License 1.0 - for more detail [Visit Site](https://www.boost.org/LICENSE_1_0.txt)';
        case 'Creative Commons Zero v1.0 Universal':
            return 'Creative Commons Zero v1.0 Universal - for more detail [Visit Site](http://creativecommons.org/publicdomain/zero/1.0/)';
        case 'Eclispe Public License 2.0':
            return 'Eclispe Public License 2.0 - for more detail [Visit Site](https://opensource.org/licenses/EPL-2.0)';
        case 'GNU Affero General Puplic License v3.0':
            return 'GNU Affero General Puplic License v3.0 - for more detail [Visit Site](http://www.gnu.org/licenses/agpl-3.0)';
        case 'GNU General Public License v2.0':
            return 'GNU General Public License v2.0 - for more detail [Visit Site](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
        case 'GNU Lesser General Public License v2.1':
            return 'GNU Lesser General Public License v2.1 - for more detail [Visit Site](http://www.gnu.org/licenses/lgpl-3.0)';
        case 'Mozilla Public License 2.0':
            return 'Mozilla Public License 2.0 - for more detail [Visit Site](https://opensource.org/licenses/MPL-2.0)';
        case 'The Unlicense':
            return 'The Unlicense - for more detail [Visit Site](http://unlicense.org/)';
        default:
          // If there is no license, return an empty string
          return "";
      }
 }

// Function that returns the license section of README
function renderLicenseSection(license) {
    if (license !== "Other") {
        return renderLicenseLink(license);
      } else {
        // If there is no license, return an empty string
        return "";
      }
 }

// Function to generate markdown for README
function generateMarkdown(data) {

// Create Table of Contents
    let toc = `
## Table of Contents`;

    if (data.installation !== '') {
        toc += `       
   * [Installation](#installation)` };

    if (data.usage !== '') {
        toc += `
   * [Usage](#usage)` };

    if (data.contributing !== '') {
        toc += `
   * [Contributing](#contributing)` };

    if (data.tests !== '') {
        toc += `    
   * [Tests](#tests)` };

   if (data.license !== '') {
    toc += `    
   * [License](#license)` };

   if (data.username !== '') {
       toc +=`
   * [Questions](#questions)`
   }


// Generate markdown for the top required portions of the README
    let readmeContent = `
# ${data.title}

## Description 

*A summary of what this project is, and why it has been created:*

${data.description}

<br>

${renderLicenseBadge(data.license)}

---

<br>

`;

// Add the Table of Contents
    readmeContent += toc;

`
<br>

`;


// Installation section
if (data.installation !== '') {

    readmeContent +=
        `
---

<br>

## Installation

*How to install this project:*

${data.installation}

`};

// Usage section
if (data.usage !== '') {

    readmeContent +=
        ` 
---

<br>

## Usage 

*How to use this project:*

${data.usage}

`};

// Contributing section
if (data.contributing !== '') {

    readmeContent +=
        `
---

<br>

## Contributing

*If you like what you see and you would like to contribute, here's how you can:*

${data.contributing}

`};

// Tests section
if (data.tests !== '') {

    readmeContent +=
        ` 
---

<br>

## Tests

*Tests that have been run, and how to run them:*

${data.tests}

`};

// License section
readmeContent +=
    `
---

<br>

## License

*The following license has been applied to this project:*

${renderLicenseSection(data.license)}

`;

// Questions section
readmeContent +=
    `
---

<br>

## Questions?

*For any questions regarding this project, please use either of the below contact details:*

GitHub: [@${data.username}](https://github.com/${data.username})

Email: ${data.email}

`;

// Copyright Section
if (data.tests !== '') {

    readmeContent +=
        `
---

<br>

## Copyright

© ${data.copydate} - ${data.copymsg}

`};
    return readmeContent;
}

module.exports = generateMarkdown;


