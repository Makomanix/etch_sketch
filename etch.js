const grid = document.querySelector('.grid');

const buttons = document.querySelectorAll('button');

let column;

let rainbow = false;

let opacity = false;

let selectedColor = false;

let colorPicker = document.querySelector('.color');
colorPicker.addEventListener('click', selectColor)

let boxColor = colorPicker.value;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch(e.target.name) {
      case "opacity":
        console.log(e.target.name)
        toggleOpacity();
      case "reset":
        console.log(e.target.name)
        reset();
        break;
      case "grid size":
        console.log(e.target.name);
        selectGridSize(e);
        break;
      case "toggle":
        console.log(e.target.name);
        toggleRainbow(e);
        console.log(rainbow)
        break;
      case "select":
        console.log(e.target.name);
        selectColor(e);
        break;
    }
  })
});

function toggleOpacity() {
  boxArray = [];
  return opacity ? opacity = false : opacity = true;
};

function reset() {
  eraseGrid();

  let allBoxes = document.querySelectorAll('.box')
  .forEach(box => {
    box.style.backgroundColor = '#ffffff';
  })
  createGrid();
};

function eraseGrid() {
  let erase = document.querySelectorAll('.column')
  let eraseArray = Array.from(erase);
  console.log(erase);

  if (eraseArray.length > 0) {
    eraseArray.forEach((erased) => {grid.removeChild(erased)}) 
  }
}

function selectGridSize(){

  eraseGrid();

  let size = prompt("Select Grid Size between 10 and 100", "");

  if (size < 10 || size > 50 || size === "") {
    alert("Grid size entered was not between 10 and 100. Try again!")
    size = prompt("Select Grid Size between 10 and 100", "")
  }
  console.log(size)
  createGrid(size)
};

function selectColor(e){
  console.log(colorPicker.value);
  rainbow = false;
  console.log(rainbow)
};

function toggleRainbow(){
  colorPicker.value = '#000000'
  return rainbow ? rainbow = false : rainbow = true;
};

let boxArray = [];


// Create the grid
function createGrid(size = 16){

    for (let i = 0; i < size; i++) {
      console.log('make columns')
        column = document.createElement('div');
        column.classList.toggle('column');
        grid.appendChild(column);
        for (let j = 0; j < size; j++) {
          let box = document.createElement('div');
          let boxObject = {count: 0};
          boxArray.push(boxObject)
          box.classList.toggle('box');
          box.innerText = boxArray.length;
          box.style.width = 40/size + "rem";
          box.style.height = 40/size + "rem";
          box.style.backgroundColor = '#ffffff';
          box.addEventListener('mouseover', fillBlock);
          column.appendChild(box);
        }
    }
    console.log(boxArray);
};


function fillBlock(e) {
  console.log(boxColor)

  boxColor = colorPicker.value;
  console.log(boxColor)

  if (rainbow === true) {
    boxColor = '#' + Math.random().toString(16).substring(2, 8)
  };

  if ( opacity === true) {
    let count = boxArray[e.target.innerText].count += 1
    e.target.style.backgroundColor = boxColor;
    if ( boxArray[e.target.innerText].count >= 10 ) {
      e.target.style.opacity = 1.0;
    } else {
      e.target.style.opacity = count * .1;
    };
  };
  
  e.target.style.backgroundColor = boxColor;
};


createGrid();