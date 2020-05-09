//Get start point

const setAutoWall = (col,row,gird,number) => {
    
    for(let i = 0 ; i<col; i++){
        for(let y = 0; y<row; y++){

            if(rand() > number){
    
                gird[i][y].wall = true;
                grid[i][y].gridElement.style.backgroundColor ='#000000';
              
            }
        }
    }
}


const manuallyAddWalls = () =>{
    document.querySelector('.grid').removeEventListener('click', getStart);
    if(start !== undefined) 
{
        window.location.reload();

  
    
         document.querySelector('#manually-add').style.backgroundColor = "#F8F8F8"
         document.querySelector('.grid').addEventListener('mouseout',setManualWalls); 
}
document.querySelector('#manually-add').style.backgroundColor = "#F8F8F8"
document.querySelector('.grid').addEventListener('mouseout',setManualWalls); 
}
         


const getMoreWalls = () =>{

    if(start === undefined || end === undefined){

    }

    resetGrid(COL,ROW,grid,path);
    walls--;
    setAutoWall(COL,ROW,grid,walls);
    document.getElementById("less").style.pointerEvents = "all";
    document.querySelector('.grid').addEventListener('click', getStart);
}
const getLessWalls = ()=>{
    resetGrid(COL,ROW,grid,path);
    walls+=2;
    setAutoWall(COL,ROW,grid,walls);
    document.querySelector('.grid').addEventListener('click', getStart);
}


const setManualWalls = (e) =>{
  
    document.querySelector('.grid').removeEventListener('click', manuallyAddWalls);

    var arr =e.target.id.split('-');
    let wal = grid[arr[0]][arr[1]];
    wal.wall = true;
    wal.changeColor("#000000"); 
    
    document.querySelector('.grid').addEventListener('click',removeManualWalls);    
     
}

const removeManualWalls = (e) =>{  
    
    if(start == undefined && end == undefined){
    document.querySelector('.grid').removeEventListener('mouseout',setManualWalls);
    console.log(start, end);
    document.querySelector('.grid').addEventListener('click',getStart);
    }
   

    console.log((typeof start === 'object'|| typeof end === 'object'))
     
     
}

const removeSf = (col,row,grid) =>{
    for(let i = 0 ; i<col; i++){
        for(let y = 0; y<row; y++){
            if(grid[i][y].style.backgroundColor === '#0000FF' || grid[i][y].style.backgroundColor === '#ffff00' ){
                grid[i][y].style.backgroundColor ='#ffffff';
            }
        }
}
}
const resetGrid = (col,row,gird,path) => {
    
    for(let i = 0 ; i<col; i++){
        for(let y = 0; y<row; y++){

            if(grid[i][y].getCost !== 0){
                gird[i][y].deleteCost();
            }


           if(grid[i][y].wall === true)
                gird[i][y].wall = false;
                grid[i][y].gridElement.style.backgroundColor ='#ffffff';
               
            }
        }

        path =[];
    }




