const againButton = document.querySelector(".again");
const num = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkbtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let random = Math.trunc(Math.random() * 20) + 1;
console.log(random);
let scores = 20;
let high = 0;

const displayMessage = (msg) => {
  message.textContent = msg;
};

checkbtn.addEventListener("click", () => {
  const guessVal = Number(guess.value);

  if (!guessVal) {
    displayMessage("⛔ No number entered!");
  } else if (guessVal === random) {
    displayMessage("🎉 Correct Number!");
    num.textContent = random;
    document.body.style.backgroundColor = "#60b347";
    num.style.width = "100px";
    //     guess.disabled = true;
    //   checkbtn.disabled = true;

    if (scores > high) {
      high = scores;
      highscore.textContent = high;
    }
  } else {
    if (scores > 1) {
      displayMessage(guessVal > random ? "📈 Too High!" : "📉 Too Low!");
      scores--;
      score.textContent = scores;
    } else {
      displayMessage("💥 You lost the game!");
      score.textContent = 0;
    }
  }
});

againButton.addEventListener("click", () => {
  scores = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  score.textContent = scores;
  displayMessage("Start Guessing ...");
  num.textContent = "?";
  guess.value = "";
  document.body.style.backgroundColor = "#222";
  num.style.width = "70px";
  console.log("New random number is:", random); 
});
