window.onload = function() {

 function playgame() {
    var min = 50;
    var max = 75;
    var msg;
    randomNum = Math.floor(Math.random() * 100)
    if (randomNum >= min && randomNum <= max) {
msg =  `Your Number: ${randomNum}, You Won`;
    }
    else {
        msg = `Your number: ${randomNum}, Keep Trying!`;
    }
    return msg;
 }
 document.getElementById("result").innnerHTML = msg;
 playgame();
}
