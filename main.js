const wordElement = document.getElementById("word");
const userInput = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const container = document.getElementById("container");
const settingButton = document.getElementById("settings-btn");
const settingElement = document.getElementById("settings");
const settingForm = document.getElementById("settings-form");

const wordsList = ["hoplitic", "gan", "twopences", "termly", "graymail", "preapproved", "pale", "hawkers", "adulation", "pouringly", "gamely", "mosaically", "recollect", "bedeck", "attitudinise", "kalpaks", "glassworm", "dropcloth", "ploys", "rededicate", "erumpent", "gimpy", "cohesiveness", "heedful", "leniences", "electrical", "batistes", "piling", "hodoscope", "reemphasizes"]

userInput.focus();

let score = 0;
let time = 10;
let difficulty = "easy";

const interval = setInterval(updateTime, 1000);

function updateTime() {
  time--;
  timeElement.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(interval);
    endGame();
  }
}

randomWord = () => wordsList[Math.floor(Math.random() * wordsList.length)];

function addWordToDOM() {
  wordElement.innerHTML = randomWord();
}

addWordToDOM();

userInput.addEventListener("input", (e) => {
  if (e.target.value === wordElement.innerHTML) {
    addWordToDOM();
    e.target.value = "";
    score++;
    if (difficulty === "easy") time += 5;
    else if (difficulty === "medium") time += 3;
    else time += 1;
    scoreElement.innerHTML = score;
  }
});

function endGame() {
  container.innerHTML = `
  <h1>Congratulations, loser!</h1>
  <p>Your score is ${score}</p>
  <button onclick="location.reload()">Reload</button>
  `;
}

settingButton.addEventListener("click", () => {
  settingElement.classList.toggle("show");
});

settingForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
});
