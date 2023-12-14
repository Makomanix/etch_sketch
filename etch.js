const grid = document.querySelector('.grid')
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