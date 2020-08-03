const sayHello = require('../hello.js');

test('Says hello', () => {
    expect(sayHello()).toBe('Hello!');
});