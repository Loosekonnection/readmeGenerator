// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const prompts = () =>
    inquirer.prompt([
    {
        name: 'title',
        type: 'input',
        message: '*Required - Enter the title of your project:',
        validate: (answer) => {
            if (answer) {
                return true;
            } else {
                return 'You must enter a project title.';
            }
        }
    },
    {
        name: 'description',
        type: 'input',
        message: '*Required - Write a description of your project:',
        validate: (answer) => {
            if (answer) {
                return true;
            } else {
                return 'You must enter a project description.';
            }
        }
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Describe the install procedure of your project for the installation instructions.',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Describe how to use your project for the Usage section.',
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Provide detail on how other developers can contribute to your project.',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Provide details on any tests written for your application and examples of how to run the tests.',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Select the license that is associated with your project:',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclispe Public License 2.0',
            'GNU Affero General Puplic License v3.0',
            'GNU General Public License v2.0',            
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ],
    },
    {
        name: 'username',
        type: 'input',
        message: '*Required - Enter your GitHub username, without the @ symbol?',
        validate: (answer) => {
            if (answer) {
                return true;
            } else {
                return 'Please enter a valid GitHub username.';
            }
        }
    },
    {
        name: 'email',
        type: 'input',
        message: '*Required - What is your preferred contact email address?',
        validate: (answer) => {
            if (answer) {
                return true;
            } else {
                return 'You need to enter a valid email address.';
            }
        }
    },
    {
        name: 'copydate',
        type: 'number',
        message: 'For the Copyright, Enter the current year:',
    },
    {
        name: 'copymsg',
        type: 'input',
        message: 'Enter a copyright message:',
    },
]);

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            return console.log(err);
        }
        console.log('README.md succesfully created.');
    });
}

// Function to initialize app
function init() {

    prompts().then((answers) => {
        console.log(answers);

        writeToFile('README.md', answers);
    });   
}

init();
