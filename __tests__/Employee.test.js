const Employee = require("../lib/Employee");

describe('Employee', () => {
    
    it('has an name', () => {
        const employee = new Employee('Anthony');

    expect(employee.name).toEqual('Anthony');
});
    it('has an name', () => {
        const employee = new Employee('Anthony');

    expect(employee.getName()).toEqual('Anthony');
});
    it('has an id', () => {
        const employee = new Employee('Anthony', '01');

    expect(employee.id).toEqual('01');
});
    it('has an id', () => {
        const employee = new Employee('Anthony', '01');

    expect(employee.getId()).toEqual('01');
});
    it('has an email', () => {
        const employee = new Employee('Anthony', '01', 'anthony@test.com');

    expect(employee.email).toEqual('anthony@test.com');
});
    it('has an email', () => {
        const employee = new Employee('Anthony', '01', 'anthony@test.com');

    expect(employee.getEmail()).toEqual('anthony@test.com');
});
    it('has an role', () => {
        const employee = new Employee('Anthony', '01', 'anthony@test.com');

    expect(employee.getRole()).toEqual('Employee');
});
});

