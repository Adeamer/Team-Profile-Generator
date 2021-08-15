//Pulling required packages and file system into const's
const inquirer = require('inquirer');
const fs = require('fs');
const fileDirect = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirect, "index.html");

//Pulling modules for Employee, Manager, Engineer, Intern
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const GenerateHTML = require("./lib/GenerateHTML");

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
        message: "What is the team manager's email?"
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


//Question
const addEmployee = [
    {
        name: "poistion",
        message: "What type of team member would tyou like to add?",
        type: "list",
        choices: ["Engineer", "Intern"],
        valide: position => {
            if (position === "Engineer"){
            return true;
            engineerQuestions;
            }     
        }   
    }
]

const engineerQuestions = async (array) => [
    {
        name: ""
    }
]


