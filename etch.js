const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', function(event) {
    switch(event) {
      case "reset":
        reset()
        break;
      case "grid size":
        setGrid()
        break;
      case "toggle":
        toggleRainbow()
        break;
      case "color":
        selectColor()
        break;
    }
  })
});

function handleClick(e) {
  console.log(e);
  // switch(e.target.value) {
  //   case "reset":
      
  // }
};

function reset() {};

function setGrid(){};

function selectColor(){};

function toggleRainbow(){};


// Create the grid
function sketchPad(size = 16){
    for (let i = 0; i < size; i++) {
        let column = document.createElement('div');
        column.classList.toggle('column');
        grid.appendChild(column);
        for (let j = 0; j < size; j++) {
            let box = document.createElement('div');
            box.classList.toggle('box');
            box.innerText = 'hi'
            column.appendChild(box);
        }
    }
};

function fillBlock() {

}



sketchPad();