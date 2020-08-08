test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a Will in William', () => {
    expect('Will').toMatch(/Will/)
})