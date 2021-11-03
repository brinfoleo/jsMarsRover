const getFinalPosition = require("../getFinalPosition.js");
const createMap=require("../scanMap.js").scanMap;

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

//Creating a map
test('Creating a 1 x 1 map', () => {
    map=[['0','0'],['0','0']];
    expect(createMap(1,1)).toEqual(map);
});
test('Creating a 2 x 2 map', () => {
    map=[['0','0','0'],['0','0','0'],['0','0','0']];
    expect(createMap(2,2)).toEqual(map);
});

// Move to RIGHT
test('Moving the rover on a 5x5 plateau from north to east', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'R')).toBe('1 2 E');
});
test('Moving the rover on a 5x5 plateau from east to south', () => {
    expect(getFinalPosition('5 5', '1 2 E', 'R')).toBe('1 2 S');
});
test('Moving the rover on a 5x5 plateau from south to west', () => {
    expect(getFinalPosition('5 5', '1 2 S', 'R')).toBe('1 2 W');

});
test('Moving the rover on a 5x5 plateau from west to north', () => {
    expect(getFinalPosition('5 5', '1 2 W', 'R')).toBe('1 2 N');
});

test('Moving the rover on a 5x5 plator in 360 degrees', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'RRRR')).toBe('1 2 N');
});

// Move to LEFT
test('Moving the rover on a 5x5 plateau from north to west', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'L')).toBe('1 2 W');
});
test('Moving the rover on a 5x5 plateau from west to south', () => {
    expect(getFinalPosition('5 5', '1 2 W', 'L')).toBe('1 2 S');
});
test('Moving the rover on a 5x5 plateau from south to east', () => {
    expect(getFinalPosition('5 5', '1 2 S', 'L')).toBe('1 2 E');

});
test('Moving the rover on a 5x5 plateau from east to north', () => {
    expect(getFinalPosition('5 5', '1 2 E', 'L')).toBe('1 2 N');
});

test('Moving the rover on a 5x5 plateau in 360 degrees', () => {
    expect(getFinalPosition('5 5', '1 2 N', 'LLLL')).toBe('1 2 N');
});

// Crossing the plateau diagonally
test('Moving the rover on a 10 x 10 plateau from position 00 to position 1010', () => {
    expect(getFinalPosition('10 10', '0 0 N', 'MRMLMRMLMRMLMRMLMRMLMRMLMRMLMRMLMRMLMRML')).toBe('10 10 N');
});
//Trying to throw the rover off the plateau, it must remain in last position.
test('Trying to throw the rover off the 4x3 plateau', () => {
    expect(getFinalPosition('4 3', '1 1 N', 'LMMMMM')).toBe('0 1 W');
  
});
