var gridNums = 16;
var gridTemp ="auto ";


const body = document.querySelector('body');
const changeSizeButton = document.createElement('input');
changeSizeButton.setAttribute('type','button');
changeSizeButton.setAttribute('value','Change Size');
body.appendChild(changeSizeButton);
const clearButton = document.createElement('input');
clearButton.setAttribute('type','button');
clearButton.setAttribute('value','Clear');
clearButton.style.display ="inline-block";
body.style.textAlign = "center";
body.appendChild(clearButton);
const container = document.createElement('div');
container.setAttribute('id','container');
body.appendChild(container);
var grids ;


function squareGrids(gridNums) {

   let squareGridNums = gridNums*gridNums ;
    for (let i = 0; i < squareGridNums; i++) {
        let text = "This is "+(i+1);      
        grids = document.createElement('div');
        grids.className = "square-grids";
        grids.style.backgroundColor ="white";
        grids.style.border = "solid 1px ";
        container.appendChild(grids);    
  
    }
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}


squareGrids(gridNums);

container.style.display = "grid";
container.style.margin = "auto";
container.style.height = "800px";
container.style.width ="800px";
      container.style.gridTemplateColumns = gridTemp.repeat(gridNums);
container.style.gridTemplateRows =  gridTemp.repeat(gridNums);




clearButton.addEventListener('click',function(){
    gridDivs.forEach((square) =>{
        square.style.backgroundColor  ="white";
        square.style.filter = "brightness(100%)";
    }
     );
}
);


window.onload = () => {var gridDivs = document.querySelectorAll('.square-grids');

gridDivs.forEach((square) => {
    var color = random_rgb();
    var colorBlack = 100;
    square.addEventListener('mouseover',function(){
        colorBlack = colorBlack-10
        if(square.style.backgroundColor  == "white"){
         square.style.backgroundColor =  color;
        }
    else{
        if(colorBlack!=0){ square.style.filter = "brightness("+colorBlack+"%)"; }
        else{square.style.filter = "brightness(0%)";}  
     }
    });
});}



changeSizeButton.onclick = () => {
    let  size = prompt("Enter size (Maximum size is 64): ");
    container.textContent = ""
    gridNums = parseInt(size);
    squareGrids(gridNums);
    gridDivs = document.querySelectorAll('.square-grids');

    container.style.gridTemplateColumns = gridTemp.repeat(gridNums);
container.style.gridTemplateRows =  gridTemp.repeat(gridNums);


gridDivs.forEach((square) => {
    var color = random_rgb();
    var colorBlack = 100;
    square.addEventListener('mouseover',function(){
        colorBlack = colorBlack-10
        if(square.style.backgroundColor  == "white"){
         square.style.backgroundColor =  color;
        }
    else{
        if(colorBlack!=0){ square.style.filter = "brightness("+colorBlack+"%)"; }
        else{square.style.filter = "brightness(0%)";}  
     }
    });
});
};