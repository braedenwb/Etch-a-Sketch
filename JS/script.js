// Etch-a-Sketch

const body = document.querySelector("body");
const gridContainer = document.querySelector(".grid-container");
const gridSlider = document.querySelector(".settings-slider");
const gridSliderIndicator = document.querySelector(".settings-slider-indicator");
const gridLinesToggle = document.querySelector(".gridline-checkbox");
const clearGridButton = document.querySelector(".clear-button");
const colorSelector = document.querySelector(".settings-color-selector");

let gridSize = 256;
let mouseDown = false;
let currentColor = colorSelector.value;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function getGridSlider()
{
    gridSlider.addEventListener("input", () => {
        if (parseInt(gridSlider.value) === 1)
        {
            clearGrid();
            gridSize = 64;
            gridSliderIndicator.textContent = "8x8";
            main();
        }
        else if (parseInt(gridSlider.value) === 2)
        {
            clearGrid();
            gridSize = 144;
            gridSliderIndicator.textContent = "12x12";
            main();
        }
        else if (parseInt(gridSlider.value) === 3)
        {
            clearGrid();
            gridSize = 256;
            gridSliderIndicator.textContent = "16x16";
            main();
        }
        else
        {
            clearGrid();
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

        gridItem.addEventListener("mouseover", draw);
        gridItem.addEventListener("mousedown", draw);
    }
}

function draw(event)
{
    if (event.type === "mousedown" && !mouseDown)
    {
        this.style.background = colorSelector.value;
    }
    else if (mouseDown)
    {
        this.style.background = colorSelector.value;
    }
    else
    {
        return;
    }
}

function clearGrid()
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
    clearGridButton.addEventListener("click", () => {
        clearGrid();
        createGrid();
    })
}

if(parseInt(gridSlider.value) === 3)
{
    gridSliderIndicator.textContent = "16x16";
}

main();