let chooses = document.querySelectorAll(".icon");
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
    }else {
       let mywon = true;
       if(myChoice === "paper") {
           computerChoi === "scissors" ? true: false;
       } else if (myChoice === "rock"){
           computerChoi ==="paper" ? true: false;
       } 
    }
      
}

const computerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomComputerChoiceIdx = Math.floor(Math.random() * 3);
    return options[randomComputerChoiceIdx];
}

const drawGame = () => {
    console.log("Game is draw."); 
}
    