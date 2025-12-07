import { container } from "../App.js";

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => startGrid());

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
    console.log(`Creating Etch-a-Sketch Board with ${rows} rows and ${columns} columns`);
    container.innerHTML = " ";
    let row = [];
    let column = [];
    for(let i = 0; i < rows;i++){
        row[i] = document.createElement('div');
        row[i].classList.add('cell');
        for(let j = 0; j < columns; j++){
            column[j] = document.createElement('div');
            column[j].classList.add['cell']
            row[i].appendChild(column[j]);
        }
        container.appendChild(row[i]);
    }
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
    const smallButton = document.createElement('button');
    smallButton.innerText = 'Small Board';
    smallButton.addEventListener("click", () => createBoard(16, 16));
    
    fieldset.appendChild(formDescription);
    fieldset.appendChild(hLabel);
    fieldset.appendChild(gridHorizontalInput);
    fieldset.appendChild(vLabel);
    fieldset.appendChild(gridVerticalInput);
    fieldset.appendChild(smallButton);
    form.appendChild(fieldset);

    const promptText = document.createElement('p');
    promptText.innerText = prompt;
    container.appendChild(form);

}