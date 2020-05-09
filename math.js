const heuristic = (pos0,pos1) =>{
    var d1 = Math.abs (pos1.x - pos0.x);
    var d2 = Math.abs (pos1.y - pos0.y);
    return d1 + d2;
}


const removeFromArray = (arr,elt)=>{
    for(let i = arr.length-1; i>=0; i--){
        if(arr[i] == elt){
            arr.splice(i,1);
        }
    }
}


const isEmpty = (obj)=>{
    return Object.keys(obj).length === 0;
}

const rand = ()=>{
    return (Math.floor(Math.random() * Math.floor(20))+1)
}