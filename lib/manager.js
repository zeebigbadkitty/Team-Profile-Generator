
// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have the following:
// •	officeNumber

class Manager {
    constructor(name, id, email, officeNumber){
        this.name=name;
        this.id=id;
        this.email=email;
        this.officeNumber=officeNumber;
    }

    
    getName(){
        inquirer
        .prompt([
          {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            
      ])
      .then((response) => {
        console.log(response);
      })
    }
        
    getId(){
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is your employee ID number?",
                name: "id",
              },
            
      ])
      .then((response) => {
        console.log(response);
      })
    }
    getEmail(){
      inquirer
      .prompt([
          {
              type: "input",
              message: "What is your email address?",
              name: "email",
            },
          
    ])
    .then((response) => {
      console.log(response);
    })
  }

getNumber(){
  inquirer
.prompt([
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
  },
])
.then((response) => {
  console.log(response);

})
}

getRole(){
return"Manager"  //overridden to return 'Manager'
    }

    
}  

