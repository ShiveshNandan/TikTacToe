console.log("hello!!");
let turn = "X";
let gameover = 0;
let boxes = document.getElementsByClassName("boxes");
let body = document.querySelectorAll("body");
let reset = document.getElementById("reset");
console.log("baap " + gameover);
let red =  0;
let blue =  0;
// document.body.style.backgroundColor = "blue";


// +++++++++++++++++++++++ functon to change turn+++++++++++++++++++++++
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    if ((boxes[0].innerText === boxes[1].innerText) && (boxes[1].innerText === boxes[2].innerText) && (boxes[0].innerText !== "")) {
        document.getElementById("info").innerText = boxes[1].innerText + " won";
        boxes[0].style.backgroundColor = "red";
        boxes[1].style.backgroundColor = "red";
        boxes[2].style.backgroundColor = "red";
        if (boxes[0].innerText === "X") {
            red = red + 1;
        }else {
            blue = blue + 1;
        }
        gameover = 1;
    }
    else if ((boxes[3].innerText === boxes[4].innerText) && (boxes[4].innerText === boxes[5].innerText) && (boxes[3].innerText !== "")) {
        document.getElementById("info").innerText = boxes[3].innerText + " won";
        boxes[3].style.backgroundColor = "red";
        boxes[4].style.backgroundColor = "red";
        boxes[5].style.backgroundColor = "red";
        gameover = 1;
        if (boxes[3].innerText === "X") {
            red = red + 1;
        }else {
            blue = blue + 1;
        }
    }
    else if ((boxes[6].innerText === boxes[7].innerText) && (boxes[7].innerText === boxes[8].innerText) && (boxes[6].innerText !== "")) {
        document.getElementById("info").innerText = boxes[6].innerText + " won";
        boxes[6].style.backgroundColor = "red";
        boxes[7].style.backgroundColor = "red";
        boxes[8].style.backgroundColor = "red";
        gameover = 1;
        if (boxes[6].innerText === "X") {
            red = red + 1;
        }else {
            blue = blue + 1;
        }
    }
    else if ((boxes[0].innerText === boxes[3].innerText) && (boxes[3].innerText === boxes[6].innerText) && (boxes[0].innerText !== "")) {
        document.getElementById("info").innerText = boxes[0].innerText + " won";
        boxes[0].style.backgroundColor = "red";
        boxes[3].style.backgroundColor = "red";
        boxes[6].style.backgroundColor = "red";
        gameover = 1;
        if (boxes[0].innerText === "X") {
            red = red + 1;
        }else {
            blue = blue + 1;
        }
    }
    else if ((boxes[1].innerText === boxes[4].innerText) && (boxes[4].innerText === boxes[7].innerText) && (boxes[1].innerText !== "")) {
        document.getElementById("info").innerText = boxes[1].innerText + " won";
        boxes[1].style.backgroundColor = "red";
        boxes[4].style.backgroundColor = "red";
        boxes[7].style.backgroundColor = "red";
        gameover = 1;
        if (boxes[1].innerText === "X") {
            red = red + 1;
        }else {
            blue = blue + 1;
        }
    }
    else if ((boxes[2].innerText === boxes[5].innerText) && (boxes[5].innerText === boxes[8].innerText) && (boxes[2].innerText !== "")) {
        document.getElementById("info").innerText = boxes[2].innerText + " won";
        boxes[5].style.backgroundColor = "red";
        boxes[8].style.backgroundColor = "red";
        boxes[2].style.backgroundColor = "red";
        gameover = 1;
        if (boxes[2].innerText === "X") {
            red = red + 1;
        }else {
            blue = blue + 1;
        }
    }
    else if ((boxes[0].innerText === boxes[4].innerText) && (boxes[4].innerText === boxes[8].innerText) && (boxes[0].innerText !== "")) {
        document.getElementById("info").innerText = boxes[0].innerText + " won";
        boxes[0].style.backgroundColor = "red";
        boxes[4].style.backgroundColor = "red";
        boxes[8].style.backgroundColor = "red";
        gameover = 1;
        if (boxes[0].innerText === "X") {
            red = red + 1;
        }else {
            blue = blue + 1;
        }
    }
    else if ((boxes[2].innerText === boxes[4].innerText) && (boxes[4].innerText === boxes[6].innerText) && (boxes[2].innerText !== "")) {
        document.getElementById("info").innerText = boxes[2].innerText + " won";
        boxes[4].style.backgroundColor = "red";
        boxes[6].style.backgroundColor = "red";
        boxes[2].style.backgroundColor = "red";
        gameover = 1;
        if (boxes[2].innerText === "X") {
            red = red + 1;
        }else {
            blue = blue + 1;
        }
    }
    // console.log("upr " + gameover);
}


Array.from(boxes).forEach(element => {
    element.addEventListener('click', () => {
        // let boxtext = element.getElementsByClassName('boxtext');
        if (gameover === 0) {
            if (element.innerText === "") {
                element.innerText = turn;
                turn = changeTurn();
                document.getElementById("info").innerText = "Turn for " + turn;
                if (turn === "X") {
                    // document.body.style.backgroundColor = "blue";
                } else if (turn === "0") {
                    // document.body.style.backgroundColor = "pink";
                }
                checkWin();
                // console.log("main " + gameover);
            }
        }
    });
})

// reset button ka kaam +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

reset.addEventListener("click", () => {
    Array.from(boxes).forEach(element => {
        element.innerText = "";
        element.style.backgroundColor = "transparent";
        document.getElementById("info").innerText = "Turn for " + turn;
        gameover = 0;
    });
    document.getElementById("pscore1").innerText = red;
    document.getElementById("pscore2").innerText = blue;
    // console.log("blue = " +blue);
    // console.log("red = " +red);
})