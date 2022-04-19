
function generateReadme(answers){

// Main Logic to generate Read Me 
return `
# [${answers.title}](#title)

## [Description](#description)
${answers.description}
>> - Deployed Project URL: ${answers.deployedLink}
>> - Project Repository URL: ${answers.repoLink}

## Table of Contents
> * [Title](#title)
> * [Description](#description)
> * [Developer](#developer)
> * [Resources](#resources)
> * [Installation](#installation) 
> * [Usage](#usage)
> * [Tests](#tests)
> * [Questions](#questions)

## [Developer](#developer)
[${answers.developer}](https://github.com/${answers.githubId})

## [Resources](#resources)
The following resources were used in the development of this project.
${answers.languages}

## [Installation](#installation)
${answers.installation}

## [Usage](#usage)
${answers.usage}

## [Tests](#tests)
${answers.test}

## [Questions](#questions)
Please email [${answers.email}](mailto:${answers.email}) with any project questions.

} else
    return # [${answers.title}](#title)

## [Description](#description)
   ${answers.description}
>> - Deployed Project URL: ${answers.deployedLink}
>> - Project Repository URL: ${answers.repoLink}

## [Developer](#developer)
[${answers.developer}](https://github.com/${answers.githubId})

## [Resources](#resources)
The following resources were used in the development of this project.
${answers.languages}

## [Installation](#installation)
${answers.installation}

##[License](#license) 
${answers.license}

## [Usage](#usage)
${answers.usage}

## [Tests](#tests)
${answers.test}

## [Questions](#questions)
Please email [${answers.email}](mailto:${answers.email}) with any project questions.
`
};

module.exports = {
generateReadme
};
