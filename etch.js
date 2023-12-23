const grid = document.querySelector('.grid');

const buttons = document.querySelectorAll('button');

let boxColor;

let rainbow = false;

let selectedColor = false;

let colorPicker = document.querySelector('.color');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch(e.target.name) {
      case "reset":
        console.log(e.target.name)
        reset();
        break;
      case "grid size":
        console.log(e.target.name);
        selectGridSize();
        break;
      case "toggle":
        console.log(e.target.name);
        toggleRainbow();
        console.log(rainbow)
        break;
      // case "color":
      //   console.log(e.target.name);
      //   selectColor();
      //   break;
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

function selectColor(){};

function toggleRainbow(){
  return rainbow ? rainbow = false : rainbow = true;
  // boxColor = '#' + Math.floor(Math.random().toString(16).substring(2, 8)); 
};

// function getBoxes() {
//   let allBoxes = document.querySelectorAll('.box')
//   return allBoxes;
// };


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
            box.style.backgroundColor = 'white';
            box.addEventListener('mouseover', fillBlock);
            column.appendChild(box);
        }
    }
};

function fillBlock(e) {
  console.log(boxColor)

  if (colorPicker.value === '#ffffff')

  if (boxColor === undefined || rainbow === false && selectedColor === false) {
    boxColor = '#000000';
  };

  if (rainbow === true) {
    boxColor = '#' + Math.random().toString(16).substring(2, 8)
  };

  e.target.style.backgroundColor = boxColor;
  console.log(e.target.style.backgroundColor);
};





createGrid();