const fs = require('fs'); 
const inquirer = require('inquirer');

inquirer
.prompt([
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Give a brief description.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Are there any installation instructions?',
    name: 'instructions',
  },
  {
    type: 'input',
    message: 'Usage?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Make a license selection.', 
    name: 'license',
    choices: ['None', 'MIT', 'Apache License 2.0', 'BSD' ]
  },
  {
    type: 'input',
    message: 'Include an image or example of your project.',
    name: 'example',
  },
  {
    type: 'input',
    message: 'Please provide a link to your Github repository.', 
    name: 'credits',
  },
  {
    type: 'input',
    message: 'Which tests have been performed?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Include your contact e-mail address.', 
    name: 'questions',
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
const buildHTML = ({title, description, instructions, usage, license, example, credits, tests, questions}) =>`<!DOCTYPE html>
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
        <i class="fa-regular fa-user"></i>Employee 1
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
