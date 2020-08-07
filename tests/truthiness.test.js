test("Null is null, confimed with .toBeNull()", () => {
    expect(null).toBeNull();
    expect(null).toBeDefined();
    expect(null).not.toBeUndefined();
    expect(null).not.toBeTruthy();
    expect(null).toBeFalsy();
});