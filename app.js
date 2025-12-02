// Generate Random Number
let randomNum = Math.floor(Math.random() * 100) + 1;

// Variables to target html elements
let guessInput = document.querySelector("#guess-input");
let checkBtn = document.querySelector("#check-button");
let result = document.querySelector("#result");
let restartBtn = document.querySelector("#restart-button");

checkBtn.onclick = () => {
  let guess = Number(guessInput.value);
  if (guess < 1 || guess > 100) {
    result.textContent = "Enter a number between 1 to 100";
    result.style.color = "red";
  } else if (guess === randomNum) {
    result.textContent = "Congratulations! 🎉 you win";
    result.style.color = "green";
    checkBtn.disabled = true;
    restartBtn.style.display = "block";
  } else {
    result.textContent =
      guess < randomNum ? "Your guess is too low" : "Your guess is too high";
    result.style.color = "orange";
  }
  guessInput.value = "";
  guessInput.focus();
};

restartBtn.onclick = () => {
  randomNum = Math.floor(Math.random() * 100) + 1;
  result.textContent = "";
  checkBtn.disabled = false;
  restartBtn.style.display = "none";
  guessInput.focus();
};

