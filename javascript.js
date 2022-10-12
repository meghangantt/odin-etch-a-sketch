let gridBase = 16;
const grid = document.querySelector('#grid');
const square = document.createElement('div');

const createGrid = () => {
    grid.style.cssText = `grid-template-columns: repeat(${gridBase}, auto)`;

    square.classList.add('square');
    square.style.cssText = `height: ${350/gridBase}px; width: ${500/gridBase}px`;
    
    grid.appendChild(square);
    
    for (let i = 1; i < gridBase**2; i++) {
        grid.appendChild(square.cloneNode(true));
    }
    
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        });
      });
}

createGrid();

const clearGrid = () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square) => {
        square.classList.remove('hovered');
        square.remove();
    })
}

const baseSlider = document.getElementById('baseSlider');

baseSlider.addEventListener('input', () => {
    clearGrid();
    gridBase = (74-baseSlider.value);
    createGrid();
  });

const clearBtn = document.querySelector('.notch.right');

clearBtn.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square) => {
        square.classList.remove('hovered');
    });
  })