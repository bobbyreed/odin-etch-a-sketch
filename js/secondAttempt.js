import { container } from "../App.js";



const secondButton = document.querySelector("#second");
secondButton.addEventListener("click", () => startGrid());

if(container == null){
    console.log("container is null");
}

function startGrid(){
    container.innerHTML = " ";
    createForm("Grid Creation", "Please complete the form below to create a specific grid. Click the buttons below the form to pick some presets rather than filling this mess out.")
}

function createBoard(columns, rows){
    //debug
    console.log(`Creating Etch-a-Sketch Board with ${rows} rows and ${columns} columns`);

    //reset
    container.innerHTML = " ";
    let cssWidth = "100";
    container.setAttribute("style", "width:"+ cssWidth +"%;");
    
    //create handles
    let row = [];
    let column = [];

    let controlsContainer = document.createElement('div');
    controlsContainer.classList.add('controls-container');
    let vControl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    vControl.innerHTML = '<circle r="25" cx="50" cy="50" fill="white" /><text id="centeredLetter" x="30%" y="30%" dominant-baseline="middle" text-anchor="middle" font-size="18" fill="black">V</text>'
    vControl.classList.add('height-control');
    let vControlText = document.createElement('p');
    vControlText.innerText = "Control with A and D Keys (A = Counter-Clockwise, D = Clockwise)";
    vControl.appendChild(vControlText);
    let hControl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    hControl.innerHTML = '<circle r="25" cx="50" cy="50" fill="white" /><text id="centeredLetter" x="30%" y="30%" dominant-baseline="middle" text-anchor="middle" font-size="18" fill="black">H</text>'
    hControl.classList.add('width-control');
    let hControlText = document.createElement('p');
    hControlText.innerText = "Control with Left and Right Arrow Keys (Left = Counter-Clockwise, Right = Clockwise)";
    hControl.appendChild(hControlText);
    controlsContainer.appendChild(vControl);
    controlsContainer.appendChild(hControl);
    controlsContainer.appendChild(vControlText);  
    controlsContainer.appendChild(hControlText);  
    
    for(let i = 0; i < rows;i++){
        row[i] = document.createElement('div');
        row[i].classList.add(`column-${i+1}`);
        for(let j = 0; j < columns; j++){
            column[j] = document.createElement('div');
            column[j].classList.add(`cell-${j+1}`);
            row[i].appendChild(column[j]);
        }
        container.appendChild(row[i]);
    }
    container.appendChild(controlsContainer);
    console.log(`Board built with ${row.length} rows and ${column.length} columns.`);
}

function createForm(name, prompt){
    const form = document.createElement('form');
    form.classList.add('grid-form');
    const fieldset = document.createElement('fieldset');
    fieldset.innerText = name;
    const formDescription = document.createElement('p');
    formDescription.innerText = prompt;
    const hLabel = document.createElement('label');
    hLabel.innerText = "Columns: ";
    const gridHorizontalInput = document.createElement('input');
    gridHorizontalInput.type = 'number';
    gridHorizontalInput.classList.add('horizontal');
    const vLabel = document.createElement('label');
    vLabel.innerText = "Rows: ";
    const gridVerticalInput = document.createElement('input');
    gridVerticalInput.type = 'number';
    gridVerticalInput.classList.add('vertical');

    //presets
    const presetsText = document.createElement('p');
    presetsText.innerText = "Or pick a preset:";
    const smallButton = document.createElement('button');
    smallButton.innerText = 'Small Board';
    smallButton.addEventListener("click", () => createBoard(16, 16));
    const mediumButton = document.createElement('button');
    mediumButton.innerText = 'Medium Board';
    mediumButton.addEventListener("click", () => createBoard(32, 32));
    const largeButton = document.createElement('button');
    largeButton.innerText = 'Large Board';
    largeButton.addEventListener("click", () => createBoard(64, 64));
    
    fieldset.appendChild(formDescription);
    fieldset.appendChild(hLabel);
    fieldset.appendChild(gridHorizontalInput);
    fieldset.appendChild(vLabel);
    fieldset.appendChild(gridVerticalInput);
    fieldset.appendChild(presetsText);
    fieldset.appendChild(smallButton);
    fieldset.appendChild(mediumButton);
    fieldset.appendChild(largeButton);
    form.appendChild(fieldset);

    const promptText = document.createElement('p');
    promptText.innerText = prompt;
    container.appendChild(form);

}