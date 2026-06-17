let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const playerScoreElement = document.querySelector('#player_score');
const computerScoreElement = document.querySelector('#computer_score');
const msg = document.querySelector('#msg');
const userScoreElement = document.querySelector('#player_score');
const compScoreElement = document.querySelector('#computer_score');

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const ShowWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        console.log("You win!");
        msg.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        playerScore++;
        userScoreElement.textContent = playerScore;
        msg.style.backgroundColor = "green";
    } else {
        console.log("Computer wins!");
        msg.textContent = `Computer wins! ${computerChoice} beats ${userChoice}.`;
        computerScore++;
        compScoreElement.textContent = computerScore;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
        console.log("Player choice: " ,userChoice);
        // Generate computer choice
        const computerChoice = getComputerChoice();
        console.log("Computer choice: " ,computerChoice);

        if (userChoice === computerChoice) {
            console.log("It's a tie!");
            msg.textContent = "It's a tie!";
            msg.style.backgroundColor = "blue";
        }
        else {
            let userWin = true;
            if (userChoice === 'rock') {
                userWin = computerChoice === 'paper' ? false : true;
            }
            else if (userChoice === 'paper') {
                userWin = computerChoice === 'scissors' ? false : true;
            }
            else {
                userWin = computerChoice === 'rock' ? false : true;
            }
            // pass both choices so ShowWinner can display a proper rule
            ShowWinner(userWin, userChoice, computerChoice);
        }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});