document.querySelector('#start').addEventListener('click', startAvisualisation);




document.querySelector('#aStar').addEventListener('click', ()=>{
    console.log('A star');
    document.querySelector('#aStar').style.backgroundColor= "#F8F8F8"

    //set other colors white
    document.querySelector('#dijkstra').style.backgroundColor= "#ffffff"
 

    document.querySelector('#alg').textContent = "A*";


    //now if i press start i want to run the A* algorithm

    
    document.querySelector('#start').removeEventListener('click', startDjikstravisualisation);

    
    document.querySelector('#start').removeEventListener('click', startGreadyvisualisation);

    document.querySelector('#start').addEventListener('click', startAvisualisation);
});


document.querySelector('#dijkstra').addEventListener('click', ()=>{
    console.log('Dijkstra');
    document.querySelector('#dijkstra').style.backgroundColor= "#F8F8F8"

    document.querySelector('#aStar').style.backgroundColor= "#ffffff"
  
    document.querySelector('#alg').textContent = "Dijkstra";

    document.querySelector('#start').removeEventListener('click', startAvisualisation);

    document.querySelector('#start').removeEventListener('click', startGreadyvisualisation);

    document.querySelector('#start').addEventListener('click', startDjikstravisualisation);

    

  

});





document.querySelector('#reset').addEventListener('mousedown', ()=>{
    window.location.reload();
})

document.querySelector('#more').addEventListener('click', getMoreWalls);

document.querySelector('#less').addEventListener('click', getLessWalls);

document.querySelector('#manually-add').
addEventListener('click', manuallyAddWalls);


