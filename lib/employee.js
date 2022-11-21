// //The first class is an Employee parent class with the following properties and methods:
// •	name
// •	id
// •	email
// •	getName()
// •	getId()
// •	getEmail()
// •	getRole()—returns 'Employee'


class Employee {
    constructor(name, id, email){
    this.name=name;
    this.id=id;
    this.email=email;
    }

    
    getName(){
      //   inquirer
      //   .prompt([
      //     {
      //         type: "input",
      //         message: "What is your name?",
      //         name: "name",
      //       },
            
      // ])
      // .then((response) => {
      //   console.log(response);
      // })

       return this.name
    }
        
    getId(){
      //   inquirer
      //   .prompt([
      //       {
      //           type: "input",
      //           message: "What is your employee ID number?",
      //           name: "id",
      //         },
            
      // ])
      // .then((response) => {
      //   console.log(response);
      // })
      return this.id
    }
    getEmail(){
      //   inquirer
      //   .prompt([
      //       {
      //           type: "input",
      //           message: "What is your email address?",
      //           name: "email",
      //         },
            
      // ])
      // .then((response) => {
      //   console.log(response);
      // })
      return this.email
    }
    getRole(){
      return"Employee";
    }   //returns 'Employee'
    }

module.exports={Employee}
