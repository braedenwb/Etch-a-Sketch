// Etch-a-Sketch

const gridContainer = document.querySelector(".grid-container");
const gridSlider = document.querySelector(".settings-slider");
const gridSliderIndicator = document.querySelector(".settings-slider-indicator");

function createGrid(gridSize)
{
    for(let i = 0; i < gridSize; i++)
    {
        const gridItem = document.createElement("div");

        gridItem.style.width = `calc(100% / ${Math.sqrt(gridSize)})`;
        gridItem.style.height = `calc(100% / ${Math.sqrt(gridSize)})`;

        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseenter", () => {
            gridItem.classList.add("grid-item-hover");
        });
        gridItem.addEventListener("mouseleave", () => {
            gridItem.classList.remove("grid-item-hover");
        });

        gridItem.addEventListener("mouseover", () => {
            gridItem.style.background = "black";
        });
    }
}

function main()
{
    // 8x8 12x12 16x16 32x32
    createGrid(144);
}

main();