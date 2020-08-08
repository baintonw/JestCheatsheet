test('two plus two is greater than 3', () => {
    const four = 2 + 2;
    expect(four).toBeGreaterThan(3);
    expect(four).toBeGreaterThanOrEqual(3);
    expect(four).toBeLessThan(5);
    expect(four).toBeLessThanOrEqual(5);

    //toBe and toEqual are equivalent for numbers
    expect(four).toBe(4);
    expect(four).toEqual(4);
});