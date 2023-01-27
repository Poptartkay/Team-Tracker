const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, id, email, office) {
        super ( name, id, email);
        this.office = office;
    }
    GetJob() {
        return `Product Manager`
    }
}

module.exports = Manager;