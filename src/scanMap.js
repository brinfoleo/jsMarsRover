function scanMap(x,y){
    let map=[];
    let axisX='0'+'0'.repeat(x);

    for (let i=0;i<=y;i++){
        map[i]=[...axisX];
    }
    return map;
}

function view(viewMap){
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