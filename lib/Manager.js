//Pulling the employee.js file over.
const employee = require("./Employee");

//Grabbing object from managerPrompt
class Manager extends employee{
    constructor (name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
};

module.exports = Manager;