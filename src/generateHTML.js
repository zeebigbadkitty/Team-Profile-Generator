const { Engineer } = require("../lib/engineer");

// use the src folder to house a generateHTML.js and the dist folder to hold the created one after running the CLI.
const buildHtml = (teamArray) => {
  const cardArray = [];

  //Engineer Card
  const engineerCard = (employee) => {
    return `<div class="card">${employee.getRole()} ${employee.getName()}
<li class="details">Employee Id#: ${employee.getId()}</li>
<li class="details"><a href="${employee.getEmail()}">Send email</a></li>
<li class="details"><a href="${employee.getGithub()}">My Github</a></li>`;
  };

  //Manager Card
  const managerCard = (employee) => {
    return `<div class="card">${employee.getRole()} ${employee.getName()}
<li class="details">Employee Id#: ${employee.getId()}</li>
<li class="details"><a href="${employee.getEmail()}">Send email</a></li>
<li class="details">Office Phone#: ${employee.getNumber()}</li>`;
  };

  //Intern Card
  const internCard = (employee) => {
    return `<div class="card">${employee.getRole()} ${employee.getName()}
<li class="details">Employee Id#: ${employee.getId()}</li>
<li class="details"><a href="${employee.getEmail()}">Send email</a></li>
<li class="details">School Name: ${employee.getSchool()}</li>`;
  };

//Employee Card
const employeeCard = (employee) => {
    return `<div class="card">${employee.getRole()} ${employee.getName()}
<li class="details">Employee Id#: ${employee.getId()}</li>
<li class="details"><a href="${employee.getEmail()}">Send email</a></li>`;
  };

  teamArray.forEach((employee) => {
    if (employee.getRole() === "Engineer") {
      cardArray.push(engineerCard(employee));
    } else if (employee.getRole() === "Manager") {
      cardArray.push(managerCard(employee));
    } else if (employee.getRole() === "Intern") {
      cardArray.push(internCard(employee));
    } else {
      cardArray.push(employeeCard(employee));
    }
  });

  return cardArray.join("");
};

module.exports = (teamArray) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/src/style.css" />
    <link
      rel="stylesheet"
      href="//use.fontawesome.com/releases/v5.0.7/css/all.css"
    />
    <title>My Team's Profile</title>
  </head>
  <h1><i class="fa-solid fa-users"></i> My Team</h1>
  <body>
    <div id="container"> ${buildHtml(teamArray)}</div>
    

    <script src="https://kit.fontawesome.com/c36497dbed.js" crossorigin="anonymous"></script>
  </body>
</html>
`;
};
