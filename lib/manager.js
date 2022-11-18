
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
getName()
getId()
getEmail()
getRole()   //overridden to return 'Manager'

}