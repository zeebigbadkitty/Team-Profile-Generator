// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have the following:
// •	officeNumber

const { Employee } = require("./employee.js");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
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

  getNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager"; //overridden to return 'Manager'
  }
}
module.exports = { Manager };
