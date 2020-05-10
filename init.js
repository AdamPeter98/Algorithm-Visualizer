const drawElement = (element,color,time) =>{

    for(let i = 0; i<element.length; i++){
            setTimeout(() =>{
            element[i].changeColor(color);
            },time)
        }
}

const init = (col,row,grid, alg) =>{
 grid = Array(col);


for(let i = 0; i<col; i++){
    grid[i] = new Array(row);
}
for(let x = 0; x<col; x++){
    for(let y = 0; y<row; y++){
        grid[x][y] = new Node(x,y,`${x}-${y}`);
      
    }
}

for(let x = 0; x<col; x++){
    for(let y = 0; y<row; y++){
        grid[x][y].addNeighbors(grid);
    }
}

    return grid;
}

function stEndNotNull(){
    console.log('get start')
    if((start == undefined || end == undefined) || (start === Array(0) || end === Array(0)) || (start.length ===0 || end.length ===0)) {
        outputMessage = `Tap twice on the grid to fist select the starting point than the end point`;
        document.querySelector('#alertBox').textContent = outputMessage;
        document.querySelector('#alertBox').style.display = "block"
        return
    }else{
        document.querySelector('#alertBox').style.display = "none"
    }

}

async function setAlg(){

    outputMessage = `Pick an from the Algorithms  algorithm`;
    document.querySelector('#alertBox').textContent = outputMessage;
    document.querySelector('#alertBox').style.display = "block"

    setTimeout(()=>{
        document.querySelector('#alertBox').style.display = "none" 
    },5000)
   
}


function getStart(e){
    removeSf();
    closedSet =[];
    openSet = [];
    var arr = [];
    arr = e.target.id.split('-');
    start = grid[arr[0]][arr[1]];
    console.log('start');
    start.wall = false;
    start.changeColor('#0000FF');
    openSet.push(start);
    document.querySelector('.grid').removeEventListener('click', getStart);
    document.querySelector('.grid').addEventListener('click', getFinal);
    }
    
    
    function getFinal(e){
    var arr = [];
    arr =e.target.id.split('-');
    end = grid[arr[0]][arr[1]];
    end.wall = false;
    console.log(end)
    end.changeColor('#ffff00');
    
    document.querySelector('.grid').removeEventListener('click',removeManualWalls); 
    document.querySelector('.grid').removeEventListener('click', getFinal);
    
    
    }
    