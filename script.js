let userScore = document.getElementById("user-score");
let computerScore = document.getElementById("computer-score");
let userCounter = 0;
let computerCounter = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let msg_container = document.querySelector(".msg-container");
const genComputerChoice = () => {
    // rock,paper,scissors
    const options = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg_container.style.backgroundColor = "black";
}


const showWinner = (userWin) => {
    if (userWin) {
        userCounter++;
        userScore.innerText = userCounter;
        msg.innerText = "You Win!"
        msg_container.style.backgroundColor = "green"
    }
    else {
        computerCounter++;
        computerScore.innerText = computerCounter;
        msg.innerText = "Computer Win!";
        msg_container.style.backgroundColor = "red";
    }
}

const platGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    if (userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin);

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        platGame(userChoice);

    })
})
