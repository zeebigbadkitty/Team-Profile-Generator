// In addition to Employee's properties and methods, Intern will also have the following:
// •	school
// •	getSchool()

const { Employee } = require("./employee.js");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  } //overridden to return 'Intern'
}
module.exports = { Intern };
