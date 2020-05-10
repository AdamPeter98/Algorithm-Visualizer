function printPath(){
    path = [];
        var temp  = current;
        path.push(temp)
        while(temp.previous){

            path.push(temp.previous);
            temp = temp.previous;
        }
        //draw path
        console.log(end);
        drawElement(path,'#ffff00',2000)
    
}

function lowestCostNeighbour(){
    var x =0;
    for(let i = 1; i< openSet.length; i++){
        if(openSet[i].f < openSet[x].f){
            x = i;
        }

    }
    return x;
}