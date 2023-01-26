class Employee { 
    constructor (name, id, email, roles = 'Employee')
    {
        this.name = name;
this.id = id;
this.email = email;
this.roles = roles;
    }
    getPerson(){
        return this.name;
    }
    getid(){
        return this.id;
    }
    getMail(){
        return this.email;
    }
    getJob(){
        return 'Employee';
    }
}

module.exports = Employee;