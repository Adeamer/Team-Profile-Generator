//Pulling employee file over
const employee = require("./Employee");

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getPosition() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
};

module.exports = Intern;