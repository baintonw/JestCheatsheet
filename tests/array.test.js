const beatles = ['John', 'Paul', 'Ringo', 'George'];

test('Ringo is in the Beatles', () => {
    expect(beatles).toContain('Ringo');
});