// In addition to Employee's properties and methods, Engineer will also have the following:
// •	github—GitHub username
// •	getGithub()



class Engineer {
    constructor(name, id, email, github){
        this.name=name;
        this.id=id;
        this.email=email;
        this.github=github;
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

getGithub(){
    inquirer
  .prompt([
    {
      type: "input",
      message: "What is the link to your personal GitHub?",
      name: "github",
    },
  ])
  .then((response) => {
    console.log(response);

})
}


getRole()   //overridden to return 'Engineer'
