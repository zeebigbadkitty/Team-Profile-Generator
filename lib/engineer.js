// In addition to Employee's properties and methods, Engineer will also have the following:
// •	github—GitHub username
// •	getGithub()
const { Employee } = require("./employee.js");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // this.name = name;
    // this.id = id;
    // this.email = email;
    super(name, id, email);
    this.github = github;
  }

  // getName() {
  //   //   inquirer
  //   //   .prompt([
  //   //     {
  //   //         type: "input",
  //   //         message: "What is your name?",
  //   //         name: "name",
  //   //       },

  //   // ])
  //   // .then((response) => {
  //   //   console.log(response);
  //   // })
  //   return this.name;
  // }

  // getId() {
  //   //   inquirer
  //   //   .prompt([
  //   //       {
  //   //           type: "input",
  //   //           message: "What is your employee ID number?",
  //   //           name: "id",
  //   //         },

  //   // ])
  //   // .then((response) => {
  //   //   console.log(response);
  //   // })
  //   return this.id;
  // }

  // getEmail() {
  //   //   inquirer
  //   //   .prompt([
  //   //       {
  //   //           type: "input",
  //   //           message: "What is your email address?",
  //   //           name: "email",
  //   //         },

  //   // ])
  //   // .then((response) => {
  //   //   console.log(response);
  //   // })
  //   return this.email;
  // }

  getGithub() {
    //     inquirer
    //   .prompt([
    //     {
    //       type: "input",
    //       message: "What is the link to your personal GitHub?",
    //       name: "github",
    //     },
    //   ])
    //   .then((response) => {
    //     console.log(response);

    // })
    return this.github;
  }
  getRole() {
    return "Engineer";
  } //overridden to return 'Engineer'
}
module.exports = { Engineer };
