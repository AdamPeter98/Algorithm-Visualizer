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
document.querySelector('#start').addEventListener('click', startAvisualisation);




document.querySelector('#aStar').addEventListener('click', ()=>{
    console.log('A star');
    document.querySelector('#aStar').style.backgroundColor= "#F8F8F8"

    //set other colors white
    document.querySelector('#dijkstra').style.backgroundColor= "#ffffff"

    document.querySelector('#alg').textContent = "A*";


    //now if i press start i want to run the A* algorithm

    
    document.querySelector('#start').removeEventListener('click', startDjikstravisualisation);
    document.querySelector('#start').addEventListener('click', startAvisualisation);
});


document.querySelector('#dijkstra').addEventListener('click', ()=>{
    console.log('Dijkstra');
    document.querySelector('#dijkstra').style.backgroundColor= "#F8F8F8"

    document.querySelector('#aStar').style.backgroundColor= "#ffffff"

    document.querySelector('#alg').textContent = "Dijkstra";

    document.querySelector('#start').removeEventListener('click', startAvisualisation);

    document.querySelector('#start').addEventListener('click', startDjikstravisualisation);

    

  

});


const alg = document.querySelector('#alg').textContent;


//Draw grid and init grid with NodeClass and neighbor
if(alg === 'Algorithms'){
grid = init(COL,ROW,grid,'aStar');

}else if(alg === 'aStar'){
grid = init(COL,ROW,grid,'aStar');}
else if(alg ==='Dijkstra'){
    console.log('d')
grid = init(COL,ROW,grid,'Dijkstra')
}
//get Start and Final position
document.querySelector('.grid').addEventListener('click', getStart);


//Start vis





document.querySelector('#reset').addEventListener('mousedown', ()=>{
    window.location.reload();
})

document.querySelector('#more').addEventListener('click', getMoreWalls);

document.querySelector('#less').addEventListener('click', getLessWalls);

document.querySelector('#manually-add').
addEventListener('click', manuallyAddWalls);



/***
 * 
 * Add more walls try to run it nothing happens
 * 
 * 
 */



function  startAvisualisation(){


    console.log(document.querySelector('#alg').textContent)
    if(document.querySelector('#alg').textContent === 'Algorithms'){
        setAlg()
        return
    }


 while(!isEmpty(openSet)){
    // for every spot find the lowest index, aka witch route has the the smallest cost
    var lowestIndex = 0;
    for(let i = 1; i< openSet.length; i++){
        if(openSet[i].f < openSet[lowestIndex].f){
            lowestIndex = i;
        }

    }
    current = openSet[lowestIndex];

    if(current === end){

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
        openSet = [];
        closedSet = []
        path = [];
        start = [];
        end =[];
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
            neighbor.f = neighbor.g+neighbor.h;
            neighbor.previous = current;
          
    
        }
    }
    


    drawElement(closedSet,'#39b9df',700);

 }

 if(current !== end){
     console.log('nincs meg',current);
    
 }
 }



 function  startDjikstravisualisation(){
  

    



 while(!isEmpty(openSet)){
    // for every spot find the lowest index, aka witch route has the the smallest cost
    var lowestIndex = 0;
    for(let i = 1; i< openSet.length; i++){
        if(openSet[i].f < openSet[lowestIndex].f){
            lowestIndex = i;
        }

    }
    current = openSet[lowestIndex];

    if(current === end){

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
        console.log('a dijkstra futott le')
        path = [];
        start = [];
        end =[];
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
           
            neighbor.f = neighbor.g;
            neighbor.previous = current;
          
    
        }
    }
    


    drawElement(closedSet,'#39b9df',700);

 }

 if(current !== end){
     console.log('nincs meg',current);
    
 }
 }
