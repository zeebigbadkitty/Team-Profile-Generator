const Intern = require('../lib/Intern');


//creating Intern

test('creates an Intern object', () => {
    const intern = new Intern('Candice', 35, 'candice@gmail.com', 'University of Texas at Austin');
    expect(intern.school) .toEqual(expect.any(String));
});

// testing role from getRole()
test('gets role of intern', () => {
    const intern = new Intern('Candice', 35, 'candice@gmail.com', 'University of Texas at Austin');

    expect(intern.getRole()).toEqual("Intern");
}); 

// testing school value from getSchool()
test('gets school value', () => {
    const intern = new Intern('Candice', 35, 'candice@gmail.com', 'University of Texas at Austin');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});