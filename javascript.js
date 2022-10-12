const grid = document.querySelector('#grid');
const square = document.createElement('div');
square.classList.add('square');

grid.appendChild(square);

for (let i = 1; i < 256; i++) {
    grid.appendChild(square.cloneNode(true));
}

const allSquares = document.querySelectorAll('.square');

allSquares.forEach((one) => {
    one.addEventListener('mouseover', () => {
      one.classList.add('hovered');
    });
  });