const sum = require('../sum.js');

//Tests exact equality of 1 + 2 and 3
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});