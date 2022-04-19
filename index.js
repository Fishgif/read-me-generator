const inquirer = require('inquirer');
const readme = require('./src/readme');
const fs = require('fs');
const { dirname } = require('path');

// This app to ask user to generate a read me file

// Use inquirer to ask questions
inquirer.prompt([
{
type: 'input',
name: 'title',
message: 'What is the name of the project? (Required)',
validate: title => {
    if (title) {
        return true;
    } else {
        console.log('A project name is required. Please enter the name of the project.');
        return false;
    }
}
},
{
type: 'input',
name: 'description',
message: 'Please provide a short description of your project. (Required)',
validate: description => {
    if (description) {
        return true;
    } else {
        console.log('A project description is required. Please provide a short description of your project.');
        return false;
    }
}
},
{
type: 'input',
name: 'repoLink',
message: 'Enter the url to the project Github repository. (Required)',
validate: repoLink => {
    if (repoLink) {
        return true;
    } else {
        console.log('Please enter the url to the project Github repository.');
        return false;
    }
}
},
{
type: 'input',
name: 'deployedLink',
message: 'Enter the url to the deployed project on Github. (Required)',
validate: deployedLink => {
    if (deployedLink) {
        return true;
    } else {
        console.log('Please enter the url to the deployed project on Github');
        return false;
    }
}
},
{
type: 'input',
name: 'developer',
message: `Enter name of the project's developer. (Required)`,
validate: developer => {
    if (developer) {
        return true
    } else {
        console.log(`Please enter name of the project's developer.`);
        return false
    }
}
},
{
type: 'input',
name: 'githubId',
message: `What is the developer's Github Id? (Required)`,
validate: githubId => {
    if (githubId) {
        return true
    } else {
        console.log(`A Github Id is required. Please enter the developer's Github Id`);
        return false
    }
}
},
{
type: 'input',
name: 'email',
message: `Please provide an email address for support questions? (Required)`,
validate: email => {
    if (email) {
        return true
    } else {
        console.log(`An email address is required for support. Please provide an email address for support questions`);
        return false
    }
}
},
{
type: 'checkbox',
name: 'languages',
message: 'What development languages and libraries were used to create this project? (Check all that apply)',
choices: ['JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'Node', 'Inquirer'],
validate: languages => {
    if (languages) {
        return true;
    } else {
        console.log('Please select the development languages and libraries used to create this project!');
        return false;
    }
}
},
{
type: 'input',
name: 'installation',
message: `Please enter the install instructions for the project. (Required)`,
validate: installation => {
    if (installation) {
        return true;
    } else {
        console.log('Please enter installation instructions for the project');
        return false;
    }
}
},
{
type: 'input',
name: 'usage',
message: `Please enter any usage information related to the project. (Required)`,
validate: usage => {
    if (usage) {
        return true;
    } else {
        console.log('Please enter any usage information related to the project.');
        return false;
    }
}
},
{
type: 'input',
name: 'test',
message: `Please any testing resources available for the project. (Required)`,
validate: usage => {
    if (usage) {
        return true;
    } else {
        console.log('Please enter any usage information related to the project.');
        return false;
    }
}
},
{
        type:'list',
        message: 'Choose license?',
        name:'license',
        choices:[
    
            "MIT License",
            "Apache License 2.0",
            "GPL License (aka GNU General Public License v3.0)",
            "BSD License(2-clause)",
            "BSD License(3-clause)",
            "BSD License(4-clause)",
        ],
        
    },
]).then(function(answers){

    console.log(answers);

    const readmeContent = readme.generateReadme(answers);
   
    // Save read me content to readme.md file 
    fs.writeFileSync('readme.md', readmeContent, 'utf8');
});
