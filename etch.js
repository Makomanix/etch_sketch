const grid = document.querySelector('.grid');

const buttons = document.querySelectorAll('button');


let rainbow = false;

let selectedColor = false;

let colorPicker = document.querySelector('.color');
colorPicker.addEventListener('click', selectColor)

let boxColor = colorPicker.value;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch(e.target.name) {
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

function reset() {
  let allBoxes = document.querySelectorAll('.box')
  .forEach(box => {
    box.style.backgroundColor = '#ffffff';
  })
};

function selectGridSize(){};

function selectColor(e){
  console.log(colorPicker.value);
  rainbow = false;
  console.log(rainbow)
};

function toggleRainbow(){
  colorPicker.value = '#000000'
  return rainbow ? rainbow = false : rainbow = true;
};


// Create the grid
function createGrid(size = 16){
    for (let i = 0; i < size; i++) {
        let column = document.createElement('div');
        column.classList.toggle('column');
        grid.appendChild(column);
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.classList.toggle('box');
            box.innerText = 'hi';
            box.style.width = 40/size + "rem";
            box.style.height = 40/size + "rem";
            box.style.backgroundColor = '#ffffff';
            box.addEventListener('mouseover', fillBlock);
            column.appendChild(box);
        }
    }
};

function fillBlock(e) {
  console.log(boxColor)

  boxColor = colorPicker.value;

  if (rainbow === true) {
    boxColor = '#' + Math.random().toString(16).substring(2, 8)
  };

  e.target.style.backgroundColor = boxColor;
  console.log(e.target.style.backgroundColor);
};


createGrid();