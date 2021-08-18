//Pulling required packages and file system into const's
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const fileDirect = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirect, "index.html");

//Pulling modules for Employee, Manager, Engineer, Intern
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./Util/GenerateHTML");
// const { init } = require('cjs-module-lexer');

//Creating the array for the employee's
let employeeArray = [];

// Questions in the terminal to prompt the user when the application starts
const managerQuestions = [
    {
        name: "managerName",
        message: "What is the team manager's name?",
        type: "input",
    },{
        name: "managerId",
        message: "What is the team managers's ID?",
        type: "input",
    },{
        name: "managerEmail",
        message: "What is the team manager's email?",
        type: "input",
    },{
        //Question for adding Manager's office number
        name: "officeNumber",
        message: "Whats is the manager's office numer? (Required)",
        type: "input",
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            }else {
                console.log("Please enter the office number.");
                return false;
            }
        }
    }
]

//Questions for the Engineer input
const engineerQuestions = [
    {
        name: "engineerName",
        message: "What is the name of the engineer?",
        type: "input",
    },
    {
        name: "engineerId",
        message: "What is the engineer's ID number?",
        type: "input",
    },
    {
        name: "engineerEmail",
        message: "What is the email address for this engineer?",
        type: "input",
    },
    {
        name: "engineerGithub",
        message: "What is this engineer's GitHub user name?",
        type: "input",
    }
]

//Questions for the Intern input
const internQuestions = [
    {
        name: "internName",
        message: "What is the name of the Intern?",
        type: "input",
    },
    {
        name: "internId",
        message: "What is the intern's ID number?",
        type: "input",
    },
    {
        name: "internEmail",
        message: "What is the email address for this intern?",
        type: "input",
    },
    {
        name: "internSchool",
        message: "What school ddoes this intern currently attend?, if the intern is not currently at school enter N/A",
        type: "input",
    }
]

//Question for adding a new team member
const addEmployee = [
    {
        name: "addTeamMember",
        message: "Select the type of team member you would like to add, if your have completed this then select Done to generate your team",
        type: "list",
        choices: ["Engineer", "Intern", "Done"]
    }
]

//Function for going to either engineer or intern's question after entering managers details
function nextEmployee() {
    inquirer.prompt(addEmployee).then((response) => {

        console.log(response);
        switch (response.addTeamMember) {
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'Done':
                console.log("Generating your Team!")
                makeTeam();
        }
    })
};

//Function to start the application 
function initialize() {
    managerPrompt();
};

//Function for adding the answers from the managerQuestions into the manager's HTML card.
function managerPrompt() {
    inquirer.prompt(managerQuestions).then((response) => {

        let name = response.managerName;
        let id = response.managerId;
        let email = response.managerEmail;
        let office = response.officeNumber;

        const manager = new Manager(name, id, email, office);

        employeeArray.push(manager);
        

        nextEmployee();
    })
};

//Function for adding the answers from the engineerQuestions into the engineer's HTML card.
function engineerPrompt() {
    inquirer.prompt(engineerQuestions).then((response) => {

        let name = response.engineerName;
        let id = response.engineerId;
        let email = response.engineerEmail;
        let github = response.engineerGithub;

        const engineer = new Engineer (name, id, email, github);

        employeeArray.push(engineer);

        nextEmployee();
    })
};

//Function for adding the answers from the internQuestions into the interns HTML card.
function internPrompt() {
    inquirer.prompt(internQuestions).then((response) => {
        
        let name = response.internName;
        let id = response.internId;
        let email = response.internEmail;
        let school = response.internSchool;

        const intern = new Intern (name, id, email, school);

        employeeArray.push(intern);

        nextEmployee();
    })
};

//Function to make the file
function makeTeam() {
    fs.writeFile(filePath, render(employeeArray), function(err) {
        if (err) {
            return console.log(err);
        }
    })
};

//Calling the init function
initialize();