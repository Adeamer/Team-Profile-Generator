const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe('Manager', () =>{
    it('has an office number', () =>{
        const TestON = 100;
        const e = new Manager("Anthony", "01", "anthony@test.com", TestON);
    expect(e.officeNumber).toBe(TestON);
})
    it('has an office number via getOfficeNumber()', () =>{
        const TestON = 100;
        const e = new Manager("Anthony", "01", "anthony@test.com", TestON);
    expect(e.getOfficeNumber()).toBe(TestON);
})
    it('has a role via the getRole()', () =>{
        const TestON = 'Manager';
        const e = new Manager("Anthony", "01", "anthony@test.com", '100');
    expect(e.getRole()).toBe(TestON);
})
});