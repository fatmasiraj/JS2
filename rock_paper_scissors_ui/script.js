let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `You: ${playerSelection} - Computer: ${computerSelection}. It is a Tie.`;
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    playerScore++;
    return `You: ${playerSelection} - Computer: ${computerSelection}. ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You: ${playerSelection} - Computer: ${computerSelection}. ${computerSelection} beats ${playerSelection} `;
  }
};

let btn = document.createElement("button");
btn.setAttribute("style", "width:200px");
btn.textContent = "Play Again";
btn.setAttribute("onclick", "location.href='./index.html'");

let img = document.createElement("img");
img.setAttribute("style", "width:500px");

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.value;
    let computerSelection = computerPlay();
    let round = playRound(playerSelection, computerSelection);

    if (playerScore >= 5) {
      computerScore = playerScore = 0;
      document.querySelector("#para").textContent = "";

      img.setAttribute("src", "./images/win.png");

      document.querySelector("#buttons").replaceChildren(img);
      document.querySelector(".result").replaceChildren(btn);
    } else if (computerScore >= 5) {
      computerScore = playerScore = 0;
      document.querySelector("#para").textContent = "";

      img.setAttribute("src", "./images/lose.png");

      document.querySelector("#buttons").replaceChildren(img);
      document.querySelector(".result").replaceChildren(btn);
    } else {
      document.querySelector("#para").textContent = round;
      document.querySelector(
        ".result"
      ).textContent = `You ${playerScore} - ${computerScore} Computer`;
    }
  });
});
