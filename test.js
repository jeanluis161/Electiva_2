const helloWorld = require('./index');

test('debería retornar "Hola Mundo"', () => {
    expect(helloWorld()).toBe("Hola Mundo");
});
