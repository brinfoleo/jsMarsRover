const getFinalPosition = require("../getFinalPosition.js");

test("Check if the rover received the coordinate", () => {
    //Arrange
    const tstRover = {
        x: 10,
        y: 10,
        direction: 'N'
    }
    //Act and Assert
    expect(getFinalPosition.rover = tstRover).toBe(tstRover)
});
// Move to RIGHT
test('Moving the rover on a 5x5 plater from north to east', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'R')).toBe('1 2 E');
});
test('Moving the rover on a 5x5 plater from east to south', () => {
    expect(getFinalPosition('5 5', '1 2 E', 'R')).toBe('1 2 S');
});
test('Moving the rover on a 5x5 plater from south to west', () => {
    expect(getFinalPosition('5 5', '1 2 S', 'R')).toBe('1 2 W');

});
test('Moving the rover on a 5x5 plater from west to north', () => {
    expect(getFinalPosition('5 5', '1 2 W', 'R')).toBe('1 2 N');
});

test('Moving the rover on a 5x5 plator in 360 degrees', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'RRRR')).toBe('1 2 N');
});

// Move to LEFT
test('Moving the rover on a 5x5 plater from north to west', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'L')).toBe('1 2 W');
});
test('Moving the rover on a 5x5 plater from west to south', () => {
    expect(getFinalPosition('5 5', '1 2 W', 'L')).toBe('1 2 S');
});
test('Moving the rover on a 5x5 plater from south to east', () => {
    expect(getFinalPosition('5 5', '1 2 S', 'L')).toBe('1 2 E');

});
test('Moving the rover on a 5x5 plater from east to north', () => {
    expect(getFinalPosition('5 5', '1 2 E', 'L')).toBe('1 2 N');
});

test('Moving the rover on a 5x5 plator in 360 degrees', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'LLLL')).toBe('1 2 N');
});





test('Moving the rover simply: Test 2', () => {
    expect(getFinalPosition('5 5', '3 3 E', 'MMRMMRMRRM')).toBe('5 1 E');
});

test('Trying to throw the rover off the plateau', () => {
    expect(getFinalPosition('5 5', '1 1 N', 'LMMMMM')).toBe('0 1 W');
});
