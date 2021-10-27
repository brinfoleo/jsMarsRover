const scanMap = require('./scanMap');
const move = require('./move');


function getFinalPosition(area, landingSite, movement) {

    //start scan map
    mapSize = area.split(' ');
    let map = scanMap.scanMap(mapSize[0], mapSize[1]);


    //rover Position
    let roverPosition = landingSite.split(' ');
    move.rover.x = roverPosition[0];
    move.rover.y = roverPosition[1];
    move.rover.direction = roverPosition[2];

    //Move car
    move.commandListRun(movement, map);
    scanMap.view(map);

    return move.rover.x + ' ' + move.rover.y + ' ' + move.rover.direction;

}
module.exports = getFinalPosition;