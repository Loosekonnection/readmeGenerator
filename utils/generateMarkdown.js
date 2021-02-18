// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
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

    if (data.license !== '') {
        toc += `    
   * [License](#license)` };

    if (data.contributing !== '') {
        toc += `
   * [Contributing](#contributing)` };

    if (data.tests !== '') {
        toc += `    
   * [Tests](#tests)` };


// Generate markdown for the top required portions of the README
    let readmeContent = `
# ${data.title}

## Description 

*A summary of what this project is, and why it has been created:*

${data.description}

---

<br>
---
`;

// Add the Table of Contents
    readmeContent += toc;

`
<br>
---
`;


// Installation section
if (data.installation !== '') {

    readmeContent +=
        `
---

<br>
---

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
---

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
---

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
---

## Tests

*Tests that have been run, and how to run them:*

${data.tests}

`};

// License section
readmeContent +=
    `
---

<br>
---

## License

*The following license has been applied to this project:*

${data.license}

`;

// Questions section
readmeContent +=
    `
---

<br>
---

## Questions?

*For any questions regarding this project, please use either of the below contact details:*

GitHub: [@${data.username}](https://github.com/${data.username})

Email: ${data.email}

`;

    return readmeContent;
}

module.exports = generateMarkdown;


