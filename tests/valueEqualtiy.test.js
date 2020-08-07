const valueEquality = require('../valueEquality.js');

const bruce = valueEquality.bruce
const batman = valueEquality.batman

test('Are Bruce Wayne and Batman the same person?', () => {
    expect(bruce).toEqual(batman);
});