// import lib file
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// webpack config ultility module
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// create inquirer prompt questions
function teamProfile(){
  function createManager(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'Enter manager\'s name:',
        // validate: 
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter manager\'s id',
        // validate:
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter manager\'s email:',
        // validate: 
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Enter manager\'s office number',
        // validate:
      }
    ])
    .then(responses => {
      // create new manager
      const manager = new Manager(
        responses.managerName,
        responses.managerId,
        responses.managerEmail,
        responses.managerOfficeNumber
      );
      createTeamMembers();
    });
  }

  function createTeamMembers(){
    inquirer.prompt([
      {
        type: 'list',
        name: 'chooseMember',
        message: 'Which position do you want to create?',
        choices: [
          "Engineer",
          "Intern",
          "Create new",
          "I don\'t want to add more members"
        ]
      }
    ])
    // return promise to create each opsition based on the choice
    .then(choice => {
      switch (choice.chooseMember) {
        // add engineer
        case "Engineer":
          addEngineer();
          break;
        // add intern
        case "Intern":
          addIntern();
          break;
        // TODO: MAYBE add a create new?
        // case "Create new":
        //   addCreateNew();
        //   break;
        // create team
        default:
          createTeam();
      }
    });
  }
  // create function to add different position choices
  function addEngineer(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'Enter engineer\'s name:',
        // validate: 
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'Enter engineer\'s id',
        // validate: 
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter engineer\'s email',
        // validate: 
      },
      {
        type: 'input',
        name: 'enginneerGithub',
        message: 'Enter engineer\'s GitHub username',
        // validate: 
      }
      .then(responses => {
        const engineer = new Engineer(
          responses.engineerName,
          responses.engineerId,
          responses.engineerEmail,
          responses.engineerGithub
          );
        createTeamMembers();
      })
    ])
  }
  function addIntern(){
    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'Enter intern\'s name:',
        // validate: 
      },
      {
        type: 'input',
        name: 'internId',
        message: 'Enter intern\'s id',
        // validate: 
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Enter intern\'s email',
        // validate: 
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'Enter intern\'s school',
        // validate: 
      },
    ])
    .then(responses => {
      const intern = new Intern(
        responses.internName,
        responses.internId,
        responses.internEmail,
        responses.internSchool
        );
      createTeamMembers();
    });
  }

  function createTeam() {
    // create output file
  }

}

teamProfile();