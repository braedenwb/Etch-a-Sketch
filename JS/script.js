// Etch-a-Sketch

const gridContainer = document.querySelector(".grid-container");
const gridSlider = document.querySelector(".settings-slider");
const gridSliderIndicator = document.querySelector(".settings-slider-indicator");

let gridSize = 256;

function getGridSlider()
{
    gridSlider.addEventListener("input", () => {
        if(parseInt(gridSlider.value) === 1)
        {
            removeGrid();
            gridSize = 64;
            gridSliderIndicator.textContent = "8x8";
        }
        else if (parseInt(gridSlider.value) === 2)
        {
            removeGrid();
            gridSize = 144;
            gridSliderIndicator.textContent = "12x12";
        }
        else if (parseInt(gridSlider.value) === 3)
        {
            removeGrid();
            gridSize = 256;
            gridSliderIndicator.textContent = "16x16";
        }
        else
        {
            removeGrid();
            gridSize = 1024;
            gridSliderIndicator.textContent = "32x32";
        }
    })
}

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

function removeGrid()
{

}

function main()
{
    // 8x8 12x12 16x16 32x32
    if(parseInt(gridSlider.value) === 3)
    {
        gridSliderIndicator.textContent = "16x16";
    }

    createGrid(gridSize);
    getGridSlider();
}

main();