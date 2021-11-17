// using Intern constructor
const Intern = require('../lib/Intern');

// creating intern object
test('creates an Intern object', () => {
  const intern = new Intern('Ying', 1000, 'lliying1213@gmail.com', 'RIT');

  expect(intern.school).toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
  const intern = new Intern('Ying', 1000, 'lliying1213@gmail.com', 'RIT');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
  const intern = new Intern('Ying', 1000, 'lliying1213@gmail.com.com', 'RIT');

  expect(intern.getRole()).toEqual('Intern');
});
