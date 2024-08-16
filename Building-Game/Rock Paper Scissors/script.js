let chooses = document.querySelectorAll(".icon");
let message = document.querySelector("#msg");

let myScore = 0;
let computerScore = 0;


chooses.forEach((choose) => {
    choose.addEventListener("click", () => {
        const myChoice = choose.getAttribute("id");
        gamePlay(myChoice);
    });
}); 

const gamePlay = (myChoice) => {
    console.log("my choice",myChoice);
    const computerChoi = computerChoice();
    console.log("Computer Choice", computerChoi);
    if(myChoice === computerChoi) {
        drawGame();
    } else {
       let myWin = true;
       if(myChoice === "paper") {
           myWin = computerChoi === "scissors" ? true: false;
       } else if (myChoice === "rock"){
           myWin = computerChoi ==="paper" ? false: true;
       } else {
          myWin = computerChoi === "rock" ? true: false;
       }
       showWinner(myWin);
    }   
}

const showWinner = (myWin) => {
    if(myWin){
        console.log("I am Win!")
        message.innerText ="I am winner!";
        message.style.backgroundColor = "green";
    }else {
        console.log("I am lose.");
        message.innerText ="I am loser";
        message.style.backgroundColor = "red";
    }
}

const computerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomComputerChoiceIdx = Math.floor(Math.random() * 3);
    return options[randomComputerChoiceIdx];
}

const drawGame = () => {
    console.log("Game is draw."); 
    message.innerText = "Game Draw, let's play!";
    message.style.backgroundColor = "brown";
}
    
