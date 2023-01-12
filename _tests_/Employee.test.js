const {Employee} = require('../lib/employee');

//tests to confirm inputs are completed with expected values. 

describe('employee name entered', () => {
    const employee = new Employee('Candice', 35, 'candice@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// testing id from getId()
test('gets employee ID', () => {
    const employee = new Employee('Candice', 35, 'candice@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// testing emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Candice', 35, 'candice@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// testing role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Candice', 35, 'candice@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 