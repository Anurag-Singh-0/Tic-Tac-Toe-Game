let bgMusic = new Audio("assets/music.mp3");
let turnSound = new Audio("assets/ting.mp3");
let gameOver = new Audio("assets/Gameover.mp3");
let body = document.querySelector("body");
let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X"?"0": "X";
}

body.addEventListener("mousemove", () => {
    bgMusic.play();
    bgMusic.volume = 0.03;
})

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " is Won"
            gameover = true;
            document.querySelector(".img-box").getElementsByTagName("img")[0].style.height = "250px";
        }
    })
}


// Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnSound.play();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});


reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = " ";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".img-box").getElementsByTagName("img")[0].style.height = "0px";
});