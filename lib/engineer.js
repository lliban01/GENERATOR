var Employee = require("./Employee");

class engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github;
    }
    getgithub(){
        return this.github;
    }
    getRole(){
        return "Intern"
    }
    
}


module.exports =engineer;