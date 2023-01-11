const Manager = require('../lib/Manager');

//tests to confirm objects can be created. 

test('creates a Manager object', () => {
    const manager = new Manager('Candice', 35, 'candice@gmail.com', 1234);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// testing role from getRole()
test('gets role of manager', () => {
    const manager = new Manager('Candice', 35, 'candice@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 

