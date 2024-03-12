window.ondragstart = ()=> { return false; } 

const changeDimensionsButton = document.querySelector("button");
changeDimensionsButton.addEventListener("click", () => {
    let newDimensions = prompt("Enter the new dimensions:");
    drawGrid(+newDimensions);
});

function drawGrid(dimensions) {
    const oldDiv = document.querySelector(".div-main");
    if (oldDiv) {
        document.body.removeChild(oldDiv);
    }
    divMain = document.createElement("div");
    divMain.classList.add("div-main");
    divMain.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    })    
    document.body.appendChild(divMain);
    for (let i = 0; i < dimensions; i++) {
        const divContainer = document.createElement("div");
        divContainer.classList.add("div-container");
        divContainer.style.setProperty("height", `${100/dimensions}%`);
        divMain.appendChild(divContainer);
        for (let j = 0; j < dimensions; j++) {
            const divPixel = document.createElement("div");
            divPixel.classList.add("div-pixel");
            divPixel.classList.add("inactive");
            divPixel.style.setProperty("width", `${100/dimensions}%`);
            divPixel.addEventListener("mouseenter", onMouseEnter);
            divPixel.addEventListener("mousedown", onMouseEnter);
            divContainer.appendChild(divPixel);
        }
    }
    
}

function onMouseEnter(event) {
    if (event.buttons === 1) {
        event.target.classList.remove("inactive");
        event.target.classList.add("active");
    } else if (event.buttons === 2) {
        event.target.classList.remove("active")
        event.target.classList.add("inactive");
    }
}

drawGrid(32);

