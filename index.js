const fs = require('fs'); 
const inquirer = require('inquirer');

inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is your employee ID number?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'list',
    message: 'What is your job title?', 
    name: 'title',
    choices: ['Employee', 'Intern', 'Engineer', 'Manager' ]
  },
  {
    type: 'input',
    message: '(IF INTERN) What is your school?',
    name: 'school',
  },
  {
    type: 'input',
    message: '(IF ENGINEER) What is the link to your personal GitHub?', 
    name: 'github',
  },
  {
    type: 'input',
    message: '(IF MANAGER) What is your office number?',
    name: 'officeNumber',
  },
    ])
    .then((response) =>{
    console.log(response) 
    //Call build function.

    let buildFile = buildHTML(response);

    //Writing that data to a readme.
    fs.writeFile('sample.html', buildFile, (err) => 
    err ? console.log(err) : console.log ('Successfully created HTML file!')
  );
})
const buildHTML = ({name, id, email, school, github, officeNumber}) =>`<!DOCTYPE html>
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
      <div class="card">
        <i class="fa-regular fa-user"></i>${name}
        <li class="details"></li>
        <li class="details"></li>
        <li class="details"></li>
        <li class="details"></li>
        <li class="details"></li>
        <li class="details"></li>
      </div>
      <div class="card">
        <i class="fa-regular fa-user"></i>Employee 2
        <li class="details"></li>
        <li class="details"></li>
        <li class="details"></li>
      </div>
      <div class="card">
        <i class="fa-solid fa-user-tie"></i>Manager
        <li class="details"></li>
        <li class="details"></li>
        <li class="details"></li>
      </div>
      <div class="card"><i class="fa-solid fa-user-graduate"></i>Intern
        <li class="details"></li>
        <li class="details"></li>
        <li class="details"></li>
      </div>
      <div class="card"><i class="fa-solid fa-user-gear"></i>Engineer 1
        <li class="details"></li>
        <li class="details"></li>
        <li class="details"></li>
      </div>
      <div class="card"><i class="fa-solid fa-user-gear"></i>Engineer 2
        <li class="details"></li>
        <li class="details"></li>
        <li class="details"></li>
      </div>
    </div>
    <script src="https://kit.fontawesome.com/c36497dbed.js" crossorigin="anonymous"></script>
  </body>
</html>`
