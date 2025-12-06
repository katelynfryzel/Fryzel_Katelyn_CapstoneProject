let hunger = 100;
let happiness = 100;
let cleanliness = 100;
let sleepiness = 100;

let currentPet = null;
let isSleeping = false;

const moodPortrait = document.getElementById("mood-portrait");
const moodLabel = document.getElementById("mood-label");

const petImages = {
    cat: {
        happy: "images/catHappy.png",
        content: "images/catContent.png",
        irate: "images/catIrate.png",
        disturbed: "images/catDisturbed.png",
        asleep: "images/catAsleep.png"
    },
    dog: {
        happy: "images/dogHappy.png",
        content: "images/dogContent.png",
        irate: "images/dogIrate.png",
        disturbed: "images/dogDisturbed.png",
        asleep: "images/dogAsleep.png"
    },
        bunny: {
        happy: "images/bunnyHappy.png",
        content: "images/bunnyContent.png",
        irate: "images/bunnyIrate.png",
        disturbed: "images/bunnyDisturbed.png",
        asleep: "images/bunnyAsleep.png"
    },
        snake: {
        happy: "images/snakeHappy.png",
        content: "images/snakeContent.png",
        irate: "images/snakeIrate.png",
        disturbed: "images/snakeDisturbed.png",
        asleep: "images/snakeAsleep.png"
    },
    
};

const petImage = document.getElementById("pet-image");

function updateDisplay() {

    document.getElementById("hunger-value").textContent = hunger;
    document.getElementById("happiness-value").textContent = happiness;
    document.getElementById("cleanliness-value").textContent = cleanliness;
    document.getElementById("sleepiness-value").textContent = sleepiness;

    document.getElementById("need-hunger").style.display = hunger < 40 ? "block" : "none";
    document.getElementById("need-happiness").style.display = happiness < 40 ? "block" : "none";
    document.getElementById("cleanliness-need").style.display = cleanliness < 40 ? "block" : "none";
    document.getElementById("sleepiness-need").style.display = sleepiness < 40 ? "block" : "none";

    if (!currentPet) return;

    let mood = "content"; 

    if (isSleeping) {
        mood = "asleep";
    } else if (hunger < 20 || happiness < 20 || cleanliness < 20) {
        mood = "irate";
    } else if (hunger < 40 || happiness < 40 || cleanliness < 40) {
        mood = "disturbed";
    } else if (happiness > 80) {
        mood = "happy";
    }

    petImage.src = petImages[currentPet][mood];

    moodPortrait.src = petImages[currentPet][mood];
    moodLabel.textContent = mood.toUpperCase();
}

document.getElementById("feed-btn").addEventListener("click", () => {
    hunger = Math.min(100, hunger + 25);
    updateDisplay();
});

document.getElementById("play-btn").addEventListener("click", () => {
    happiness = Math.min(100, happiness + 25);
    updateDisplay();
});

document.getElementById("clean-btn").addEventListener("click", () => {
    cleanliness = Math.min(100, cleanliness + 30);
    updateDisplay();
});

document.getElementById("sleep-btn").addEventListener("click", () => {
    isSleeping = !isSleeping;
    document.getElementById("game-section").classList.toggle("sleeping");
    updateDisplay();
});


document.querySelectorAll(".pet-selector").forEach(button => {
    button.addEventListener("click", () => {
        currentPet = button.dataset.pet;
        updateDisplay();
    });
});


setInterval(() => {
    if (!currentPet) return;

    if (!isSleeping) {
        hunger = Math.max(0, hunger - 2);
        happiness = Math.max(0, happiness - 1);
        cleanliness = Math.max(0, cleanliness - 1);
        sleepiness = Math.max(0, sleepiness - 1);
    } else {
        sleepiness = Math.min(100, sleepiness + 4);
    }

    updateDisplay();
}, 2000);

updateDisplay();
