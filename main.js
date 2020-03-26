var gridNums = 16;
var gridTemp = "auto ";

const body = document.querySelector("body");

//Buttons
//Change size button
const changeSizeButton = document.querySelector('#changeSizeButton');

//Clear button
const clearButton = document.querySelector('#clearButton'); 

//Container div
const container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);
container.style.display = "grid";
container.style.margin = "auto";
container.style.height = "700px";
container.style.width = "700px";
container.style.gridTemplateColumns = gridTemp.repeat(gridNums);
container.style.gridTemplateRows = gridTemp.repeat(gridNums);

//Create square divs
var grids;
function squareGrids(gridNums) {
    let squareGridNums = gridNums * gridNums;
    for (let i = 0; i < squareGridNums; i++) {
        let text = "This is " + (i + 1);
        grids = document.createElement("div");
        grids.className = "square-grids";
        grids.style.backgroundColor = "white";
        grids.style.border = "none";
        container.appendChild(grids);
    }
}

squareGrids(gridNums); //Square grids created

//Random rgb color generator
function random_rgb() {
    var o = Math.round,
        r = Math.random,
        s = 255;
    return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

//Function of coloring when mouse over 
var gridDivs = document.querySelectorAll(".square-grids");
gridDivs.forEach(square => {
    var color = random_rgb();
    var colorBlack = 100;
    square.addEventListener("mouseover", function () {
        colorBlack = colorBlack - 10;
        if (square.style.backgroundColor == "white") {
            square.style.backgroundColor = color;
        } else {
            if (colorBlack != 0) {
                square.style.filter = "brightness(" + colorBlack + "%)";
            } else {
                square.style.filter = "brightness(0%)";
            }
        }
    });
});

//Clear button event
clearButton.addEventListener("click", function () {
    gridDivs.forEach(square => {
        square.style.backgroundColor = "white";
        square.style.filter = "brightness(100%)";
    });
});

//Change size button event
changeSizeButton.onclick = () => {
    let size = prompt("Enter size (Maximum size is 64): ");
    if(size == null) {size =16;}
    container.textContent = "";
    gridNums = parseInt(size);
    squareGrids(gridNums);
    
    gridDivs = document.querySelectorAll(".square-grids");

    container.style.gridTemplateColumns = gridTemp.repeat(gridNums);
    container.style.gridTemplateRows = gridTemp.repeat(gridNums);
    gridDivs.forEach(square => {
        var color = random_rgb();
        var colorBlack = 100;
        square.addEventListener("mouseover", function () {
            colorBlack = colorBlack - 10;
            if (square.style.backgroundColor == "white") {
                square.style.backgroundColor = color;
            } else {
                if (colorBlack != 0) {
                    square.style.filter = "brightness(" + colorBlack + "%)";
                } else {
                    square.style.filter = "brightness(0%)";
                }
            }
        });
    });
};