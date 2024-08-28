window.onload = () => {
    const gridContainer = document.querySelector("#grid-container");
    const newGridButton = document.querySelector("#new-grid-btn");

    createGrid(16, gridContainer);

    gridContainer.addEventListener("mouseover", (e) => {
        let target = e.target;
        if (!target.classList.contains("sketched")) {
            target.classList.add("sketched");
        }
    });

    newGridButton.addEventListener("click", (e) => {
        let newSize;
        do {
            newSize = prompt("Enter a value 1-100 for the number of squares per side for the new grid:");
            newSize = parseInt(newSize);
        } while (isNaN(newSize) || newSize < 1 || newSize > 100);
        createGrid(newSize, gridContainer);
    });
}

function createGrid(gridSize, gridContainer) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    let gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";
    gridSquare.style.flex = `1 1 ${100 / gridSize}%`;

    for (let i = 1; i <= (gridSize ** 2); i++) {
        let gridSquareClone = gridSquare.cloneNode();
        gridContainer.appendChild(gridSquareClone);
    }
}