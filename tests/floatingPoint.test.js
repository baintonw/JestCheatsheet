test('two floating point numbers are equal', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(.3); does not working because a rounding error
    expect(value).toBeCloseTo(.3);//this works
});