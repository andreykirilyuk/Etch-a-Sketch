const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
let squares = document.querySelectorAll('grid .div');

window.onload=function() {
    for (let i=0;i<256;i++){
        const square = document.createElement('div');
        grid.appendChild(square);
        square.classList.add('square');
    }
}

grid.addEventListener('mouseover', function handleHover(e) {
    e.target.classList.add('hovered');}
);