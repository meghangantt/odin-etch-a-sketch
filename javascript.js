let gridBase = 16;

const createGrid = () => {
    const grid = document.querySelector('#grid');
    grid.style.cssText = `grid-template-columns: repeat(${gridBase}, auto)`;

    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = `height: ${500/gridBase}px; width: ${500/gridBase}px`;
    
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

