var check = 0;
var cntrlIsPressed = false;
var mouseSelection = false;
var selectedText = '';
var run = '';

document.addEventListener("keydown", ctrlpressed);


function ctrlpressed(event) {
    if (event.which == "9") {

        if (mouseSelection) {
            window.open("https://www.google.com/#q=" + selectedText, "_blank");
        }
    }
}


document.addEventListener("mouseup", selectableTextAreaMouseUp);

document.addEventListener("mousedown", documentMouseDown);

function selectableTextAreaMouseUp(event) {

    selectedText = window.getSelection().toString().trim();
    if (selectedText.length) {

        mouseSelection = true;
    }
    check = 1;

}

function documentMouseDown(event) {
    if (check == 1) {
        window.getSelection().empty();
        mouseSelection = false;
    }
}


