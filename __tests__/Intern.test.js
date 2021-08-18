const Intern = require("../lib/Intern");

describe('Intern', () =>{
    it('has a School', () =>{
        const TestON = "University of Adelaide";
        const e = new Intern("Anthony", "01", "anthony@test.com", TestON);
    expect(e.school).toBe(TestON);
})
    it('has a school via getSchool()', () =>{
        const TestON = "University of Adelaide";
        const e = new Intern("Anthony", "01", "anthony@test.com", TestON);
    expect(e.getSchool()).toBe(TestON);
})
    it('has a role via the getRole()', () =>{
        const TestON = 'Intern';
        const e = new Intern("Anthony", "01", "anthony@test.com", '100');
    expect(e.getRole()).toBe(TestON);
})
});