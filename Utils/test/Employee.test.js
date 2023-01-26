const Employee = require ('./lib/Employee');

describe ('Engineer test', () => {
    describe('creates new employee', () => {
        const employee = new Employee ('David', '001', 'david@gmail.com');
        expect (employee.name).toEqual('David');
        expect (employee.id).toEqual('001');

        it('if successful will get the engineers role', () => {
expect(intern.getJob()).toEqual(expect.stringContaining('Employee'));
        });
    });
});
    