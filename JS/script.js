// Etch-a-Sketch

const gridContainer = document.querySelector(".grid-container");

function createGrid(gridSize)
{
    for(let i = 0; i < gridSize; i++)
    {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
}

createGrid(16);