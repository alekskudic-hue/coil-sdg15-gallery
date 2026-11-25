
const questions = [
{
question: "What should you do with an old phone?",
answers: [
"Throw it in the normal rubbish",
"Repair or recycle it responsibly",
"Leave it outside"
],
correct: 1,
explanation: "Correct! Repairing and recycling helps reduce electronic waste."
},
{
question: "Why is electronic waste dangerous?",
answers: [
"It can contain harmful materials",
"It makes devices faster",
"It improves the environment"
],
correct: 0,
explanation: "Correct! Electronic waste can contain substances harmful to the environment."
},
{
question: "What does SDG 12 promote?",
answers: [
"Buying more products",
"Responsible consumption and production",
"Throwing away old devices"
],
correct: 1,
explanation: "Correct! SDG 12 promotes sustainable consumption and production."
}
];

let current = 0;
let score = 0;
let answered = false;

function showQuestion() {
const q = questions[current];

document.getElementById("question").textContent = q.question;
document.getElementById("options").innerHTML = "";
document.getElementById("feedback").textContent = "";

answered = false;

q.answers.forEach((answer, index) => {
const button = document.createElement("button");
button.textContent = answer;

button.onclick = () => {
if (answered) return;

answered = true;

if (index === q.correct) {
score++;
document.getElementById("feedback").textContent =
"✓ " + q.explanation;
} else {
document.getElementById("feedback").textContent =
"Not quite! " + q.explanation;
}

button.style.background = "#cde8c7";
};

document.getElementById("options").appendChild(button);
});
}

function nextQuestion() {
if (!answered) {
document.getElementById("feedback").textContent =
"Please select an answer first.";
return;
}

current++;

if (current < questions.length) {
showQuestion();
} else {
document.getElementById("question").textContent =
"Quiz completed!";

document.getElementById("options").innerHTML = "";

document.getElementById("feedback").textContent =
"Your score: " + score + " / " + questions.length +
". Thank you for participating in Aleks Kudic's SDG quiz!";

const restart = document.createElement("button");
restart.textContent = "Try again ↻";
restart.className = "btn btn-dark";

restart.onclick = () => {
current = 0;
score = 0;
showQuestion();
};

document.getElementById("options").appendChild(restart);
}
}

showQuestion();

