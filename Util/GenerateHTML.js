const fs = require("fs");
const path = require ("path");
const tempDirect = path.resolve(__dirname, "../src");

//function for adding the manager's details into the manager.html
const renderManager = manager => {

    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getposition());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

//function for adding the engineer's details into the engineer.html
const renderEngineer = engineer => {

    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getposition());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

//Function for adding the intern's details into the intern.html
const renderIntern = intern => {

    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getposition());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

// Function for merging the employee html templates to the main.html
const render = employees => {
    const html = [];
  
    html.push(employees
      .filter(employee => employee.getposition() === "Manager")
      .map(manager => renderManager(manager))
    );

    html.push(employees
      .filter(employee => employee.getposition() === "Engineer")
      .map(engineer => renderEngineer(engineer))
    );

    html.push(employees
      .filter(employee => employee.getposition() === "Intern")
      .map(intern => renderIntern(intern))
    );
  
    return renderMain(html.join(""));
  
};

const renderMain = html => {

    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
};
  
  const replacePlaceholders = (template, placeholder, value) => {

    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;