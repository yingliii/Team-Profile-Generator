// using Employee constructor
const Employee = require('../lib/Employee');

// creates employee object
test('creates an employee object', () => {
  const employee = new Employee('Ying', 100, 'lliying1213@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId()
test('gets the employee name', () => {
  const employee = new Employee('Ying', 100, 'lliying1213@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId()
test('gets the employee ID', () => {
  const employee = new Employee('Ying', 100, 'lliying1213@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('gets the employee email', () => {
  const employee = new Employee('Ying', 100, 'lliying1213@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets the role of employee', () => {
  const employee = new Employee('Ying', 100, 'lliying1213@gmail.com');

  expect(employee.getRole()).toEqual('Employee');
});
