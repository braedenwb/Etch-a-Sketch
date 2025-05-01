// Etch-a-Sketch

const gridContainer = document.querySelector(".grid-container");
const gridSlider = document.querySelector(".settings-slider");
const gridSliderIndicator = document.querySelector(".settings-slider-indicator");
const gridLinesToggle = document.querySelector(".gridline-checkbox");

let gridSize = 256;

function getGridSlider()
{
    gridSlider.addEventListener("input", () => {
        if (parseInt(gridSlider.value) === 1)
        {
            removeGrid();
            gridSize = 64;
            gridSliderIndicator.textContent = "8x8";
            main();
        }
        else if (parseInt(gridSlider.value) === 2)
        {
            removeGrid();
            gridSize = 144;
            gridSliderIndicator.textContent = "12x12";
            main();
        }
        else if (parseInt(gridSlider.value) === 3)
        {
            removeGrid();
            gridSize = 256;
            gridSliderIndicator.textContent = "16x16";
            main();
        }
        else
        {
            removeGrid();
            gridSize = 1024;
            gridSliderIndicator.textContent = "32x32";
            main();
        }
    })
}

function createGrid()
{
    for(let i = 0; i < gridSize; i++)
    {
        const gridItem = document.createElement("div");

        gridItem.style.background = "white";
        gridItem.style.width = `calc(100% / ${Math.sqrt(gridSize)})`;
        gridItem.style.height = `calc(100% / ${Math.sqrt(gridSize)})`;
        
        if (gridLinesToggle.checked === true)
        {
            gridItem.style.border = "1px solid black";
        }

        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridLinesToggle.addEventListener("change", () => {
            if (gridLinesToggle.checked === true)
            {
                gridItem.style.border = "1px solid black";
            }
            else
            {
                gridItem.style.border = "none";
            }
        });

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
    for (let i = 0; i < gridSize; i++)
    {
        const gridItem = document.querySelector(".grid-item");
        gridItem.remove();
    }
}

function main()
{
    createGrid();
    gridLinesToggle.addEventListener("change", () => {
        if (gridLinesToggle.checked)
        {
            gridItems.style.border = "1px solid black";
        }
    });
    getGridSlider();
}

if(parseInt(gridSlider.value) === 3)
{
    gridSliderIndicator.textContent = "16x16";
}

main();