window.onload = () => {
    let gridContainer = document.querySelector("#grid-container");
    let gridSquare = document.createElement("div");
    gridSquare.className = "grid-square";

    for (let i = 1; i <= (16 ** 2); i++) {
        let gridSquareClone = gridSquare.cloneNode();
        gridContainer.appendChild(gridSquareClone);
    }
}