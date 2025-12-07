import { container } from "../App.js";

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => resetGrid());

const firstButton = document.querySelector("#first");
firstButton.addEventListener("click", () => resetGrid());

if(container == null){
    console.log("container is null");
}

let gridSize = prompt("What width/height square would you like? (Max 100)", 16);
if(gridSize > 100){
    gridSize = 100;
}
createDivs(gridSize);

function createDivs(num){
    console.log(num);
    let cssWidth = num * 10;
    container.setAttribute("style", "width:"+ cssWidth +"px;");
    for(let i = 0; i < num; i++){
            let content = document.createElement("div");
            content.classList.add("grid"); 
            content.addEventListener('mouseenter', (event) => hoverFill(content));
            container.appendChild(content);            
        for(let j = 0; j < num; j++){
            let content = document.createElement("div");
            content.classList.add("grid");
            content.addEventListener('mouseenter', (event) => hoverFill(content));
            container.appendChild(content);
        }
        }
    }

function hoverFill(div){
    //console.log("coloring");
    div.classList.remove("grid");
    div.classList.add("grid-colored");
}

function resetGrid(){
    container.innerHTML = "";
    let gridSize = prompt("What width/height square would you like? (Max 100)", 16);
    if(gridSize > 100){
        gridSize = 100;
    }
    createDivs(gridSize);
}