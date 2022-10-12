const grid = document.querySelector('#grid');
const square = document.createElement('div');
square.classList.add('square');

grid.appendChild(square);

for (let i = 1; i < 256; i++) {
    grid.appendChild(square.cloneNode(true));
}