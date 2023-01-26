const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");



let Team = [];



const OUTPUT_DIR = pathe.resolve(__dirname, "output");
const outputPATH = path.join(OUTPUT_DIR, "index.html");



const teamMembers = {
    Manager: [{
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "what is the manager's id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "what is the manager's office number?",
        name: "officeNumber"
    }
],


Engineer: [{
    type: "input",
    message: "What is the engineer's name",
    name: "engineerName"
},
    {
        type: "input",
        message: "What is the engineer's id",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's Github",
        name: "engineerGithub"
    }
],


Intern: [{
    type: "input",
    message: "What is the interns's name",
    name: "internName"
},
    {
        type: "input",
        message: "What is the interns's id",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the interns's email",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the interns's school",
        name: "internSchool"
    }]
}




function start(){
 
    inquirer.prompt(addNew).then((answer) => {

        if (answer.addMember == "Yes") {
            addRole();
        } else {
            fs.writeFileSync(outputPath, render(Team), "utf-8");
            process.exit(0);
        }


    })

}

const addNew = {
    type: "List",
    message: "Do you want to add another employee?",
    name: "addMember",
    choices: ["Yes", "No"],
}


function addRole() {
    inquirer.prompt([{
        type:"list",
        message: "New role:",
        name: "employeeChoice",
        choices: [ "Manager", "Engineer", "Intern",]
    }]).then((answer) => {
        if (answer.employeeChoice === "Manager" && managerCounter < 1) {
            managerCounter++
          
            inquirer.prompt(teamMembers.Manager).then((results) => {


                const manager = new Manager(results.managerName, results.managerId, results.managerEmail, results.OfficeNumber);
                Team.push(manager);
                start();

            })
         } else if (answer.employeeChoice === "Engineer") {

        inquirer.prompt(teamMembers.Engineer).then((results) => {

            const engineer = new Engineer(results.engineerName, results.engineerId, results.engineerEmail, results.engineerGithub);
            Team.push(engineer);

            start();
        })
    } else if  (answer.employeeChoice === "Intern") {

        inquirer.prompt(teamMembers.Intern).then((results) => {

            const intern = new Intern(results.internName, results.interId, results.internEmail, results.school);
            Team.push(intern);
            start();
        })
    } else {
        start();
    }
 })
    
}