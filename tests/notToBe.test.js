test("To be is not not to be", () => {
    expect("To be").not.toBe("Not to be");
});

test("1 !== 0", () => {
    expect(1).not.toBe(0);
});