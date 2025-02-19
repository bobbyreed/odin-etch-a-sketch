const container = document.querySelector("#container");
//container.addEventListener("mouseenter", hoverTest());

if(container == null){
    console.log("container is null");
}

createDivs(16);

function createDivs(num){
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


