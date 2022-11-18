
// In addition to Employee's properties and methods, Intern will also have the following:
// •	school
// •	getSchool()


class Intern {
    constructor(name, id, email, school){
        this.name=name;
        this.id=id;
        this.email=email;
        this.school=school;
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
getSchool()
inquirer
  .prompt([
    {
      type: "input",
      message: "Where are you enrolled in school?",
      name: "school",
    },
    
  ])
  .then((response) => {
    console.log(response);
  })

getRole()   //overridden to return 'Intern'
