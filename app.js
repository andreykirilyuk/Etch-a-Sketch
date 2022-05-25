const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
let squares = document.querySelectorAll('grid .div');
let size = 0;
let newGrid = 256;

// window.onload=function createGrid(newGrid) {
//     for (let i=0;i<newGrid;i++){
//         const square = document.createElement('div');
//         grid.appendChild(square);
//         square.classList.add('square');
//     }
// }

function createGrid(newGrid) {
        for (let i=0;i<newGrid;i++){
            const square = document.createElement('div');
            grid.appendChild(square);
            square.classList.add('square');
        }
    }

function clearGrid (){
    grid.innerHTML = ''   
}

grid.addEventListener('mouseover', function handleHover(e) {
    e.target.classList.add('hovered');}
);

const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    clearGrid();
    size = prompt('How many squares would you like per side? (Max: 100)');
    newGrid = (size*size);
    createGrid(newGrid);
}
);

createGrid(newGrid);