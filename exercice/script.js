let colorVerify = null;
let mouseDown = false;

let bodyContent = document.getElementsByTagName("body")[0];

let colorBlocks = document.querySelectorAll("#sidebar > *");

let blocks = document.querySelectorAll("#main > *");

let clearButton = document.getElementsByTagName("button")[0];

clearButton.addEventListener("click", () => {
    for (blockElement of blocks){
        blockElement.style.backgroundColor = "white";
    }
});

bodyContent.addEventListener("mousedown", () => {
    mouseDown = true;
})

bodyContent.addEventListener("mouseup", () => {
    mouseDown = false;
})

for (colorElement of colorBlocks){
    colorElement.addEventListener("click", (e) => {
        colorVerify = e.target.style.backgroundColor;
    });
}

for (blockElement of blocks){
    blockElement.addEventListener("mousedown", (e) => {
        if (colorVerify != null) e.target.style.backgroundColor = colorVerify;
    });
    blockElement.addEventListener("mouseover", (e) => {
        if (mouseDown && colorVerify != null) e.target.style.backgroundColor = colorVerify;
    });
}