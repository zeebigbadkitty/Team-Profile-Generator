const {Engineer} = require('../lib/engineer');

//creating Engineer

test('creates an Engineer object', () => {
    const engineer =  new Engineer('Candice', 35, 'candice@gmail.com', 'candice1234');
    expect(engineer.github) .toEqual(expect.any(String));
});

// testing role from getRole()
test('gets role of employee', () => {
    const engineer =  new Engineer('Candice', 35, 'candice@gmail.com', 'candice1234');

    expect(engineer.getRole()).toEqual("Engineer");
}); 

// testing github value from getGithub()
test('gets engineer github value', () => {
    const engineer =  new Engineer('Candice', 35, 'candice@gmail.com', 'candice1234');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});