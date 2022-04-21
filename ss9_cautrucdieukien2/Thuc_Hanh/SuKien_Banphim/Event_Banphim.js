function upArrowpressed() {
    let element = document.getElementById("Nobita");
    element.style.top = parseInt(element.style.top) - 50 + 'px';
}
function downArrowpressed() {
    let element = document.getElementById("Nobita");
    element.style.top = parseInt(element.style.top) +  50 + 'px';
}
function leftArrowpressed() {
    let element = document.getElementById("Nobita");
    element.style.left = parseInt(element.style.left) - 50 + 'px';
}
function rightArrowpressd() {
    let element = document.getElementById("Nobita");
    element.style.left = parseInt(element.style.left) + 50 + 'px';
}
function moveSelection(evt) {
    switch (evt.keyCode){
        case 37 :
            leftArrowpressed()
            break;
        case 39 :
            rightArrowpressd()
            break;
        case 38 :
            upArrowpressed()
            break;
        case 40 :
            downArrowpressed()
            break;
    }
}
function doReady() {
    window.addEventListener('keydown',moveSelection);
}
