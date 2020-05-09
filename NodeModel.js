class Node{

    constructor(x,y,id){

       
        this.x = x;
        this.y = y;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.gridElement = document.createElement('input');
        this.gridElement.className='box';
        this.gridElement.disabled='true';
        //set the cost
        this.gridElement.id=id;
        document.querySelector('.grid').appendChild(this.gridElement); 
        this.neighbors = [];
        this.previous = undefined;
        this.wall = false;
        
        
          
    }

    changeColor(color){
        this.gridElement.style.backgroundColor = color;    
    }

    getCost(){
        this.gridElement.value = this.g + this.h
    }

    deleteCost(){
        this.gridElement.value = ''
    }

    addNeighbors(grid){

        //four neighbors

        /**
            x,y+1
            _ 
     x-1,y |_| x+1,j
           
           x,y-1
         */

         if(this.x < COL -1){
            
        this.neighbors.push(grid[this.x+1][this.y]);
        }
        if(this.x > 0){
        this.neighbors.push(grid[this.x-1][this.y]);
        }
        if(this.y > 0){
        this.neighbors.push(grid[this.x][this.y-1]);
        }
        if(this.y < ROW-1){
        this.neighbors.push(grid[this.x][this.y+1]);
        }

        //diagonal

         /**
      x-1,y-1   x+1,y-1
            _ 
           |_| 
           
     x-1,y+1     x+1,j+1
        //  */

         if( this.x > 0 && this.y > 0){
            this.neighbors.push(grid[this.x-1][this.y-1]);
         }
         if(this.x < COL-1 && this.y> 0){
            this.neighbors.push(grid[this.x+1][this.y-1]);
         }
         if(this.x > 0  && this.y < ROW-1){
            this.neighbors.push(grid[this.x-1][this.y+1]);
         }

        if(this.x < COL-1 && this.y < ROW-1){
            this.neighbors.push(grid[this.x+1][this.y+1]);
                    }
       
    }

    
}