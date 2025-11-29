let hunger = 100;     
let happiness = 100;
let cleanliness = 100;
let sleepiness = 100;

const hungerValue = document.getElementById("hunger-value");
const happinessValue = document.getElementById("happiness-value");
const sleepinessValue = document.getElementById("sleepiness-value");
const cleanlinessValue = document.getElementById("cleanliness-value"); // FIXED ID

const hungerNeed = document.getElementById("need-hunger");
const happinessNeed = document.getElementById("need-happiness");
const sleepinessNeed = document.getElementById("sleepiness-need");
const cleanlinessNeed = document.getElementById("cleanliness-need"); // FIXED ID

document.getElementById("feed-btn").addEventListener("click", () => {
    hunger = Math.min(100, hunger + 20);
    updateDisplay();
});

document.getElementById("play-btn").addEventListener("click", () => {
    happiness = Math.min(100, happiness + 20);
    updateDisplay();
});

setInterval(() => {
    hunger = Math.max(0, hunger - 1);
    happiness = Math.max(0, happiness - 1);
    cleanliness = Math.max(0, cleanliness - 1);
    sleepiness = Math.max(0, sleepiness - 1);

    updateDisplay();
}, 2000);

function updateDisplay() {
    hungerValue.textContent = hunger;
    happinessValue.textContent = happiness;
    cleanlinessValue.textContent = cleanliness;
    sleepinessValue.textContent = sleepiness;

    hungerNeed.style.display = hunger < 40 ? "block" : "none";
    happinessNeed.style.display = happiness < 40 ? "block" : "none";
    cleanlinessNeed.style.display = cleanliness < 40 ? "block" : "none";
    sleepinessNeed.style.display = sleepiness < 40 ? "block" : "none";

    const pet = document.getElementById("pet");

    if (hunger < 20 || happiness < 20) {
        pet.style.backgroundColor = "blue";
    } else if (hunger < 40 || happiness < 40) {
        pet.style.backgroundColor = "purple";
    } else {
        pet.style.backgroundColor = "orange";
    }
}

updateDisplay();
