function sayEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

function delgKeyPress(event) {
    if (event.charCode == 111) {
        $("#easy").trigger("click");
    }
}

$("#easy").on("click", sayEasy);

$(document).keypress(delgKeyPress);