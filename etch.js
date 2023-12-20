const grid = document.querySelector('.grid');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch(e.target.value) {
      case "reset":
        console.log(e.target.value)
        reset()
        break;
      case "grid size":
        console.log(e.target.value);
        selectGridSize()
        break;
      case "toggle":
        console.log(e.target.value);
        toggleRainbow()
        break;
      case "color":
        console.log(e.target.value);
        selectColor()
        break;
    }
  })
});

function reset() {
  let allBoxes = document.querySelectorAll('.box');

  allBoxes.forEach(box => {
    box.style.backgroundColor = 'white'
  })
};

function selectGridSize(){};

function selectColor(){};

function toggleRainbow(){};


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
            box.addEventListener('click', (e) => {
              box.style.backgroundColor = 'black';
            });
            column.appendChild(box);
        }
    }
};

// function fillBlock(e) {
// console.log(e.target);

// }



createGrid();