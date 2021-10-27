function scanMap(x,y){
    let map=[];

    /* Orientation on the map
               N (y)
               |
         W --- + --- E (x)
               |
               S
    */
    let axisX='0'+'0'.repeat(x);

    for (let i=0;i<=y;i++){
        map[i]=[...axisX];
    }
    return map;
}

function view(viewMap){
    /*
    *  function to implement a better way to view the map
    */
    console.log(viewMap);
    /*
    for (let i=viewMap.length;i>0;i--){
        console.log(viewMap[i-1]);
    }
    return '';
    */
}

module.exports={
    scanMap,
    view
}