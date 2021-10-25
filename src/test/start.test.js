const getFinalPosition = require("../start.js");

test('Test 1', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'LMLMLMLMM')).toBe('1 3 N');
});

test('Test 2', () => {
    expect(getFinalPosition('5 5', '3 3 E', 'MMRMMRMRRM')).toBe('5 1 E');
});

test('Test 3', () => {
    expect(getFinalPosition('5 5', '1 1 N', 'LMMMMM')).toBe('0 1 W');
});
