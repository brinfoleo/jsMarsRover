const getFinalPosition = require("../getFinalPosition.js");

test ("Check if the rover received the coordinate",()=>{
    //Arrange
    const tstRover={
        x: 10,
        y: 10,
        direction: 'N'
    }
    //Act and Assert
    expect(getFinalPosition.rover=tstRover).toBe(tstRover)
});

test('Moving the rover simply: Test 1', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'LMLMLMLMM')).toBe('1 3 N');
});

test('Moving the rover simply: Test 2', () => {
    expect(getFinalPosition('5 5', '3 3 E', 'MMRMMRMRRM')).toBe('5 1 E');
});

test('Trying to throw the rover off the plateau', () => {
    expect(getFinalPosition('5 5', '1 1 N', 'LMMMMM')).toBe('0 1 W');
});
