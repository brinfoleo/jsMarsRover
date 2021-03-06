let myMap = [];
const rover = ({
    x: 0,
    y: 0,
    direction: 'N'
});

function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
    }
}


function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
    }

}
function toMove(rover) {

    switch (rover.direction) {
        case "N":
            if (!checkPoint(rover.x, ++rover.y)) rover.y--;
            break;
        case "E":
            if (!checkPoint(++rover.x, rover.y)) rover.x--;
            break;
        case "S":
            if (!checkPoint(rover.x, --rover.y)) rover.y++;
            break;
        case "W":
            if (!checkPoint(--rover.x, rover.y)) rover.x++;
            break;
    }

}

function commandListRun(commandList, map) {
    myMap = map;
    for (i = 0; i < commandList.length; i++) {
        //Old position
        myMap[rover.x][rover.y] = '0';
        switch (commandList.charAt(i).toLowerCase()) {
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;
            case 'm':
                toMove(rover);
                break;
        }
        //New position
        myMap[rover.x][rover.y] = rover.direction;
    }
}
function checkPoint(x, y) {
    /*
    Function that tests the limits of the map and if there is no impediment for the vehicle to move!
    */
    if (typeof (myMap[x]) == "undefined") {
        console.log('Cannot move rover to this position! x=' + x);
        return false;
    }
    if (typeof (myMap[x][y]) == "undefined") {
        console.log('Cannot move rover to this position! x=' + x + ' and y=' + y);
        return false;
    }
    if (!myMap[x][y] === '0') {
        console.log('Path x=' + x + ' and y=' + y + ' blocked!');
        return false;
    }
    return true;
}
module.exports = {
    rover,
    commandListRun
}
