function throwError() {
    throw new Error('This was not supposed to happen')
};

test('error was thrown as expected', () => {
    expect(throwError).toThrow();
    expect(throwError).toThrow(Error);

});