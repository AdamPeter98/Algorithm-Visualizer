//create grid
const COL = 30,
      ROW = 30;

// on less out less :)))
let grid, 
    openSet = [],
    closedSet = [],
    start,
    end,
    current,
    path = [],
    walls = 19,
    outputMessage;




//Get algorithm type


//Draw grid and init grid with NodeClass and neighbor

grid = init(COL,ROW,grid);


//get Start and Final position
document.querySelector('.grid').addEventListener('click', getStart);



/***
 * 
 * Add more walls try to run it nothing happens
 * 
 * 
 */



function  startAvisualisation(){


    if(document.querySelector('#alg').textContent === 'Algorithms'){
        setAlg()
        return
    }


 while(!isEmpty(openSet)){
    // for every spot find the lowest index, aka witch route has the the smallest cost
    var lowestIndex = 0;
    
    lowestIndex = lowestCostNeighbour();

    current = openSet[lowestIndex];

    if(current === end){

        printPath();
        reset();
        break;
    }
       
    closedSet.push(current); 
    
    removeFromArray(openSet,current);
    

    let neighbors = current.neighbors;

    for(let i = 0 ; i<neighbors.length; i++){
        let = neighbor = neighbors[i];
        
       
        if(!closedSet.includes(neighbor) && !neighbor.wall){
            var tempG = current.g+1;

            if(openSet.includes(neighbor)){
                if(tempG < neighbor.g){
                    neighbor.g = tempG;
                }
            }else{
                neighbor.g = tempG;
                openSet.push(neighbor);
            }

        
            neighbor.h = heuristic(neighbor,end);
            neighbor.f = neighbor.h+neighbor.g;
            neighbor.previous = current;
          
    
        }
    }
    


    drawElement(closedSet,'#39b9df',700);

 }


 }

 function  startGreadyvisualisation(){


    if(document.querySelector('#alg').textContent === 'Algorithms'){
        setAlg()
        return
    }


 while(!isEmpty(openSet)){
   
    var lowestIndex = 0;
    
    lowestIndex = lowestCostNeighbour();

    current = openSet[lowestIndex];

    if(current === end){

        printPath();
        reset();
        break;
    }
       
    closedSet.push(current); 
    
    removeFromArray(openSet,current);
    

    let neighbors = current.neighbors;

    for(let i = 0 ; i<neighbors.length; i++){
        let = neighbor = neighbors[i];
        
       
        if(!closedSet.includes(neighbor) && !neighbor.wall){
            var tempG = current.g+1;

            if(openSet.includes(neighbor)){
                if(tempG < neighbor.g){
                    neighbor.g = tempG;
                }
            }else{
                neighbor.g = tempG;
                openSet.push(neighbor);
            }

            //A*
            neighbor.h = heuristic(neighbor,end);
            neighbor.f = neighbor.h;
            neighbor.previous = current;
          
    
        }
    }
    


    drawElement(closedSet,'#39b9df',700);

 }


 }


 function  startDjikstravisualisation(){
  
    if(document.querySelector('#alg').textContent === 'Algorithms'){
        setAlg()
        return
    }
    



 while(!isEmpty(openSet)){
    // for every spot find the lowest index, aka witch route has the the smallest cost
    var lowestIndex = 0;
    
    lowestIndex = lowestCostNeighbour();

    console.log(lowestIndex)

    current = openSet[lowestIndex];

    if(current === end){

        printPath();
        reset();
        break;
    }
       
    closedSet.push(current); 
    
    removeFromArray(openSet,current);
    

    let neighbors = current.neighbors;

    for(let i = 0 ; i<neighbors.length; i++){
        let = neighbor = neighbors[i];
        
       
        if(!closedSet.includes(neighbor) && !neighbor.wall){
            var tempG = current.g+1;

            if(openSet.includes(neighbor)){
                if(tempG < neighbor.g){
                    neighbor.g = tempG;
                }
            }else{
                neighbor.g = tempG;
                openSet.push(neighbor);
            }

           
            neighbor.f = neighbor.g;
            neighbor.previous = current;
          
    
        }
    }
    


    drawElement(closedSet,'#39b9df',700);

 }

 
 }
