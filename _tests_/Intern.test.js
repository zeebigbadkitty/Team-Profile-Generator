const Intern = require('../lib/intern');


//creating Intern

test('creates an Intern object', () => {
    const intern = createIntern('Candice', 35, 'candice@gmail.com', 'University of Texas at Austin');
    expect(intern.school) .toEqual(expect.any(String));
});

// testing role from getRole()
test('gets role of intern', () => {
    const intern = createIntern('Candice', 35, 'candice@gmail.com', 'University of Texas at Austin');

    expect(intern.getRole()).toEqual("Intern");
}); 

// testing school value from getSchool()
test('gets school value', () => {
    const intern = createIntern('Candice', 35, 'candice@gmail.com', 'University of Texas at Austin');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});