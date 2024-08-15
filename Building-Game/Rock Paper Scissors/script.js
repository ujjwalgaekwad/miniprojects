let chooses = document.querySelectorAll(".icon");
let userScore = 0;
let computerScore = 0;

chooses.forEach((choose) => {
    choose.addEventListener("click", () => {
        const choiceId = choose.getAttribute("id");
        console.log("you chooise is clicked",choiceId);
    });
}); 

