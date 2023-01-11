const fs = require("fs");
const inquirer = require("inquirer");
const buildHtml = require("./src/generateHTML");

//Importing
const { Employee } = require("./lib/employee");
const { Engineer } = require("./lib/engineer");
const { Intern } = require("./lib/intern");
const { Manager } = require("./lib/manager");
const employeeArray = [];

const newEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is your job title?",
        name: "title",
        choices: ["Employee", "Engineer", "Manager", "Intern", "None"],
      },
    ])
    .then((response) => {
      console.log(response);
      if (response.title === "Employee") {
        createEmployee();
      } else if (response.title === "Engineer") {
        createEngineer();
      } else if (response.title === "Intern") {
        createIntern();
      } else if (response.title === "Manager") {
        createManager();
      } else {
        fs.writeFileSync("sample.html", buildHtml(employeeArray), (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created HTML file!")
        );
      }
    });
};

//Run newEmployee
newEmployee();

//Create Employee
const createEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: (nameCheck) => {
          if (nameCheck) {
            return true;
          } else {
            console.log("Please enter your name.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your employee ID number?",
        name: "id",
        validate: (idCheck) => {
          if (idEmailCheck) {
            return true;
          } else {
            console.log("Please enter a valid ID number.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: (emailCheck) => {
          if (emailCheck) {
            return true;
          } else {
            console.log("Please enter an e-mail address.");
            return false;
          }
        },
      },
    ])
    .then((response) => {
      console.log(response);
      const employeeInstance = new Employee(
        response.name,
        response.id,
        response.email
      );
      employeeArray.push(employeeInstance);
      console.log(employeeArray);
      newEmployee();
    });
};

//Create Engineer
const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: (engNameCheck) => {
          if (mengNameCheck) {
            return true;
          } else {
            console.log("Please enter your name.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your employee ID number?",
        name: "id",
        validate: (engIdCheck) => {
          if (engIdCheck) {
            return true;
          } else {
            console.log("Please enter a valid ID number.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: (engEmailCheck) => {
          if (engEmailCheck) {
            return true;
          } else {
            console.log("Please enter an e-mail address.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the link to your personal GitHub?",
        name: "github",
        validate: (engGithubCheck) => {
          if (engGithubCheck) {
            return true;
          } else {
            console.log("Please enter your personal Github link.");
            return false;
          }
        },
      },
    ])
    .then((response) => {
      console.log(response);
      const engineerInstance = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employeeArray.push(engineerInstance);
      console.log(employeeArray);
      newEmployee();
    });
};
//Create Manager
const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter manager's name.",
        name: "name",
        validate: (managerNameCheck) => {
          if (managerNameCheck) {
            return true;
          } else {
            console.log("Please be sure to enter manager's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your employee ID number?",
        name: "id",
        validate: (managerNameCheck) => {
          if (managerNameCheck) {
            return true;
          } else {
            console.log("Please enter your employee ID number.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your e-mail address?",
        name: "email",
        validate: (managerEmailCheck) => {
          if (managerEmailCheck) {
            return true;
          } else {
            console.log("Please enter an e-mail address.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
        validate: (managerOfficeCheck) => {
          if (managerOfficeCheck) {
            return true;
          } else {
            console.log("Please enter a valid office number.");
            return false;
          }
        },
      },
    ])
    .then((response) => {
      console.log(response);
      const managerInstance = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      employeeArray.push(managerInstance);
      console.log(employeeArray);
      newEmployee();
    });
};
//Create Intern
const createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: (internEmailCheck) => {
          if (internEmailCheck) {
            return true;
          } else {
            console.log("Please enter your name.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your employee ID number?",
        name: "id",
        validate: (internEmailCheck) => {
          if (internEmailCheck) {
            return true;
          } else {
            console.log("Please enter your ID number.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: (internEmailCheck) => {
          if (internEmailCheck) {
            return true;
          } else {
            console.log("Please enter an e-mail address.");
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What school are you currently attending?",
        name: "school",
        validate: (internSchoolCheck) => {
          if (internSchoolCheck) {
            return true;
          } else {
            console.log("Please enter your school's name.");
            return false;
          }
        },
      },
    ])
    .then((response) => {
      console.log(response);
      const internInstance = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employeeArray.push(internInstance);
      console.log(employeeArray);
      newEmployee();
    });
};

//buildHTML
// const buildHTML = ({
//   name,
//   id,
//   email,
//   school,
//   github,
//   officeNumber,
//   title,
// }) => `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="/src/style.css" />
//     <link
//       rel="stylesheet"
//       href="//use.fontawesome.com/releases/v5.0.7/css/all.css"
//     />
//     <title>My Team's Profile</title>
//   </head>
//   <h1><i class="fa-solid fa-users"></i> My Team</h1>
//   <body>
//     <div id="container">
//       <div class="card">${title}${name}
//         <li class="details">${id}</li>
//         <li class="details"><a href="${email}">Send email.</a></li>
//         <li class="details">${officeNumber}</li>
//         <li class="details">${school}</li>
//         <li class="details"><a href="${github}"></a></li>
//     </div>
//     </div>
//     <script src="https://kit.fontawesome.com/c36497dbed.js" crossorigin="anonymous"></script>
//   </body>
// </html>`;

//Writing that data to a file.
// let buildFile = buildHTML(response);
// fs.writeFile("sample.html", buildFile, (err) =>
//   err ? console.log(err) : console.log("Successfully created HTML file!")
// );

function jobTitle(title) {
  // let title = "";
  if (title === "Intern") {
    title = '![Title: Intern](<img src="/src/user-graduate-solid.svg">)';
  } else if (title === "Engineer") {
    title = '![Title: Engineer](<img src="/src/user-gear-solid.svg">)';
  } else if (title === "Manager") {
    title = '![Title: Manager](<img src="/src/user-tie-solid.svg">)';
  } else {
    title = '![Title: Employee](<img src="/src/user-regular.svg">)';
  }
  return title;
}
