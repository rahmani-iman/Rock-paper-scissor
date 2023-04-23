const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const choices = ["rock", "paper", "scissors"];
const div = document.querySelector(".div");
const random = choices[Math.floor(Math.random() * 3)];
const userChoices = document.querySelector(".choices");
for (let i = 0; i < 3; i++) {
    const element = userChoices.children[i];
    element.addEventListener("click", (e) => {
        const userChoice = e.target.classList[0];
        function winResult() {
            const result = document.createElement("div");
            result.classList.add("result");
            result.innerHTML = `<div class="result-pic">
            <img src="./assets/images/${userChoice}.png" alt="${userChoice}">
            <img src="./assets/images/${random}.png" alt="${random}">
        </div>
        <p class="result-content">You Win !</p>`
        div.appendChild(result);
        }
        function loseResult() {
            const result = document.createElement("div");
            result.classList.add("result");
            result.innerHTML = `<div class="result-pic">
            <img src="./assets/images/${userChoice}.png" alt="${userChoice}">
            <img src="./assets/images/${random}.png" alt="${random}">
        </div>
        <p class="result-content">You Lose !</p>`
        div.appendChild(result);
        }
        function tieResult() {
            const result = document.createElement("div");
            result.classList.add("result");
            result.innerHTML = `<div class="result-pic">
            <img src="./assets/images/${userChoice}.png" alt="${userChoice}">
            <img src="./assets/images/${random}.png" alt="${random}">
        </div>
        <p class="result-content">It is Tie !</p>`
        div.appendChild(result);
        }
        if (random === userChoice) {
            tieResult();
        } else if (userChoice === "rock") {
            if (random === "scissors"){
                winResult();
            } else {
                loseResult()
            }
        } else if (userChoice === "paper") {
            if (random === "rock"){
                winResult();
            } else {
                loseResult()
            }
        } else if (userChoice === "scissors") {
            if (random === "paper"){
                winResult();
            } else {
                loseResult()
            }
        }
    })
}
console.log(random);

