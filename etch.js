const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll('button')

let colorPicker = document.querySelector('.color');
colorPicker.addEventListener('click', (e) => {
  
  highlight(colorPicker.parentElement)

  toggleRainbow(colorPicker.parentElement);
  
})

let toggle = document.querySelector('.toggle')

let rainbow = false;

let rainbowFlash;

let opacity = false;

let selectedColor = false;

let size;

let boxColor = colorPicker.value;

let boxArray = []; 

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    
    switch(e.target.name) {
      
      case "opacity":
        // highlight(e);
        toggleOpacity();
        break;

      case "reset":
        reset();
        break;

      case "grid size":
        selectGridSize(e);
        break;

      case "toggle":
        highlight(e.target);
        toggleRainbow(e);
        break;

      case "select":
        rainbow = false;
        break;

    }
  })
});


function highlight(backgroundColor) {
  console.log('rainbow');
  if (backgroundColor.name === 'select') {
    
    backgroundColor.classList.add('active')

  } else {
    backgroundColor.classList.toggle('active')
  }
};

function toggleRainbow(e){
  if (e === colorPicker.parentElement) {

    clearInterval(rainbowFlash);
    rainbowFlash = null;
    toggle.style.backgroundColor = 'red';
    
  };
  
  if (rainbow === false && e !== colorPicker.parentElement) {
    colorPicker.value = '#000000'
    
    rainbow = true;

    colorPicker.parentElement.classList.contains('active') ?
      colorPicker.parentElement.classList.remove('active') : null;
    
    rainbowFlash = setInterval(randomBackground, 500)

  } else if (rainbow === true){
    rainbow = false;

      clearInterval(rainbowFlash);
      rainbowFlash = null;
      toggle.style.backgroundColor = 'red';
      

  }
};

function randomBackground() {
  toggle.style.backgroundColor = '#' + Math.random().toString(16).substring(2, 8)
};

function toggleOpacity() {
  let backgroundColor = document.querySelector('.opacity')
  highlight(backgroundColor);

  opacity ? opacity = false : opacity = true;
};

function reset() {
  boxArray = [];
  eraseGrid();
  colorPicker.value = "#000000"
  colorPicker.parentElement.classList.remove('active');
  
  opacity ? toggleOpacity() : null;
  
  rainbow ? toggleRainbow() : null;
  

  let allBoxes = document.querySelectorAll('.box')
  .forEach(box => {
    box.style.backgroundColor = '#ffffff';
  })
  createGrid(size);
};

function eraseGrid() {
  let erase = document.querySelectorAll('.column')
  let eraseArray = Array.from(erase);

  if (eraseArray.length > 0) {
    eraseArray.forEach((erased) => {grid.removeChild(erased)}) 
  }
}

function selectGridSize(){

  boxArray = [];
  eraseGrid();

  size = prompt("Select Grid Size between 10 and 50", "");

  if (size < 10 || size > 50 || size === "") {

    alert("Grid size entered was not between 10 and 50. Try again!")
    size = prompt("Select Grid Size between 10 and 50", "")

  }

  createGrid(size)
};


// Create the grid
function createGrid(size = 16){

    for (let i = 0; i < size; i++) {

        let column = document.createElement('div');
        column.classList.toggle('column');
        grid.appendChild(column);

        for (let j = 0; j < size; j++) {

          let box = document.createElement('div');
          let boxObject = {count: 0};
          boxArray.push(boxObject);

          box.value = boxArray.length;

          box.classList.toggle('box');
          box.style.height = 40/size + "rem";
          box.style.width = 40/size + "rem";
          box.style.backgroundColor = '#ffffff';
          

          box.addEventListener('mouseover', fillBlock);

          column.appendChild(box);
        }
    }
};


function fillBlock(e) {
  
  boxColor = colorPicker.value;
  e.target.style.opacity = '1';

  if (rainbow === true) {
    boxColor = '#' + Math.random().toString(16).substring(2, 8)
  };

  if ( opacity === true) {
    console.log(e.target.value)
    let count = boxArray[(e.target.value) - 1].count += 1;
    e.target.style.backgroundColor = boxColor;
    
    if ( boxArray[(e.target.value) - 1].count >= 10 ) {
      e.target.style.opacity = 0.1;

    } else {
      e.target.style.opacity = count * .1;
    }
  };
  
  e.target.style.backgroundColor = boxColor;

};

createGrid();