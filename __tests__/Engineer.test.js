const Engineer = require("../lib/Engineer");

describe('Engineer', () =>{
    it('has a GitHub Username', () =>{
        const TestON = 'GitHubUser';
        const e = new Engineer("Anthony", "01", "anthony@test.com", TestON);
    expect(e.github).toBe(TestON);
})
    it('has a GitHub Username via getGithub()', () =>{
        const TestON = 'GitHubUser';
        const e = new Engineer("Anthony", "01", "anthony@test.com", TestON);
    expect(e.getGithub()).toBe(TestON);
})
    it('has a role via the getRole()', () =>{
        const TestON = 'Engineer';
        const e = new Engineer("Anthony", "01", "anthony@test.com", '100');
    expect(e.getRole()).toBe(TestON);
})
});