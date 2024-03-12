window.ondragstart = ()=> { return false; } 

const divMain = document.querySelector("div");
divMain.addEventListener("contextmenu", (event) => {
    event.preventDefault();
})

for (let i = 0; i < 16; i++) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("div-container");
    divMain.appendChild(divContainer);
    for (let j = 0; j < 16; j++) {
        const divPixel = document.createElement("div");
        divPixel.classList.add("div-pixel");
        divPixel.classList.add("inactive");
        divPixel.addEventListener("mouseenter", onMouseEnter);
        divPixel.addEventListener("mousedown", onMouseEnter);
        divContainer.appendChild(divPixel);
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