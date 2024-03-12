const divMain = document.querySelector("div");
for (let i = 0; i < 16; i++) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("div-container");
    divMain.appendChild(divContainer);
    for (let j = 0; j < 16; j++) {
        const divPixel = document.createElement("div");
        divPixel.classList.add("div-pixel");
        divContainer.appendChild(divPixel);
    }
}