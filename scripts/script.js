window.onload = () => {
    let gridContainer = document.querySelector("#grid-container");
    let gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";

    for (let i = 1; i <= (16 ** 2); i++) {
        let gridSquareClone = gridSquare.cloneNode();
        gridContainer.appendChild(gridSquareClone);
    }

    gridContainer.addEventListener("mouseover", (e) => {
        let target = e.target;
        if (!target.classList.contains("sketched")) {
            target.classList.add("sketched");
        }
    });

    let newGridButton = document.querySelector("#new-grid-btn");

    newGridButton.addEventListener("click", (e) => {
        let newSize;
        do {
            newSize = prompt("Enter a value 1-100 for the number of squares per side for the new grid:");
            newSize = parseInt(newSize);
        } while (isNaN(newSize) || newSize < 1 || newSize > 100);
    });
}