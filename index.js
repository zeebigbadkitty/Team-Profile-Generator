const fs = require("fs");
const inquirer = require("inquirer");

//Do I need a function to start the app?

const startApp = () => {}
startApp();


  //Writing that data to a file.
  let buildFile = buildHTML(response);
  fs.writeFile("sample.html", buildFile, (err) =>
    err ? console.log(err) : console.log("Successfully created HTML file!")
  );


//buildHTML
const buildHTML = ({
  name,
  id,
  email,
  school,
  github,
  officeNumber,
  title,
}) => `<!DOCTYPE html>
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
    <div id="container">
      <div class="card">${title}${name}
        <li class="details">${id}</li>
        <li class="details"><a href="${email}">Send email.</a></li>
        <li class="details">${officeNumber}</li>
        <li class="details">${school}</li>
        <li class="details"><a href="${github}"></a></li>
    </div>
    </div>
    <script src="https://kit.fontawesome.com/c36497dbed.js" crossorigin="anonymous"></script>
  </body>
</html>`;

function jobTitle(title) {
  let title = "";
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

