const exactlyEquals = require('../exactlyEquals.js');

const luffy = exactlyEquals.luffy
const myDog = exactlyEquals.myDog

//toBe tests for exact equality
test('My dog is Luffy', () => {
    expect(luffy).toBe(myDog);
});