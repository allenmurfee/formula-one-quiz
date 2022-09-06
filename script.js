var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var intro = document.getElementById("intro");
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");

var timerCount = 60;
var score = 0;

//Quiz questions
var questions = [
  {
    id: 0,
    q: "Which driver has won 7 world championships?",
    c: [
      { text: "Lewis Hamilton", isCorrect: true },
      { text: "Max Verstappen", isCorrect: false },
      { text: "Fernando Alonso", isCorrect: false },
      { text: "Daniel Riccardio", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "What is the first name of legendary F1 driver Michael Schumacher's son who races for Haas in 2022?",
    c: [
      { text: "Mack", isCorrect: false },
      { text: "Mick", isCorrect: true },
      { text: "Mitch", isCorrect: false },
      { text: "Mark", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "In 2022, what manufacturer provides Red Bull's engine?",
    c: [
      { text: "Ferrari", isCorrect: false },
      { text: "Renault", isCorrect: false },
      { text: "Mercedes", isCorrect: false },
      { text: "Honda", isCorrect: true },
    ],
  },
  {
    id: 3,
    q: "Which team did Carlos Sainz drive for before Ferrari?",
    c: [
      { text: "Racing Point", isCorrect: false },
      { text: "Alpine", isCorrect: false },
      { text: "McLaren", isCorrect: true },
      { text: "Alfa Romeo", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "Which of these F1 drivers is of Dutch descent?",
    c: [
      { text: "Max Verstappen", isCorrect: true },
      { text: "Lando Norris", isCorrect: false },
      { text: "Valtteri Bottas", isCorrect: false },
      { text: "Esteban Ocon", isCorrect: false },
    ],
  },
];

submitButton.style.display = "none";
nextButton.style.display = "none";
c1.style.display = "none";
c2.style.display = "none";
c3.style.display = "none";
c4.style.display = "none";

//Start Quiz
function startQuiz() {
  submitButton.style.display = "";
  nextButton.style.display = "";
  c1.style.display = "";
  c2.style.display = "";
  c3.style.display = "";
  c4.style.display = "";
  startTimer();
  cycle(0);
}

startButton.addEventListener("click", startQuiz);

//Function to display questions one at a time
function cycle(id) {
  // Need to get result

  var questionSection = document.getElementById("question");
  questionSection.textContent = questions[id].q;

  c1.textContent = questions[id].c[0].text;
  c2.textContent = questions[id].c[1].text;
  c3.textContent = questions[id].c[2].text;
  c4.textContent = questions[id].c[3].text;

  c1.value = questions[id].c[0].isCorrect;
  c2.value = questions[id].c[1].isCorrect;
  c3.value = questions[id].c[2].isCorrect;
  c4.value = questions[id].c[3].isCorrect;

  var selectedC = " ";

  c1.addEventListener("click", function () {
    selectedC = c1.value;
  });
  c2.addEventListener("click", function () {
    selectedC = c2.value;
  });
  c3.addEventListener("click", function () {
    selectedC = c3.value;
  });
  c4.addEventListener("click", function () {
    selectedC = c4.value;
  });
  console.log(selectedC);

  //Evalutating answer selection
  submitButton.addEventListener("click", function () {
    if ((selectedC = true)) {
      score++;
      console.log(score);
      document.getElementById("result").textContent = "Correct!";
    } else {
      score--;
      timerCount - 5;
      document.getElementById("result").textContent = "Incorrect.";
    }
  });

  document.getElementById("result").textContent = "";

  nextButton.addEventListener("click", function () {
    if (id < 4) {
      id++;
      cycle(id);
      console.log(id);
    } else {
      intro.textContent = "Results";
      document.getElementById("question-container").textContent = "";
      submitButton.style.display = "none";
      nextButton.style.display = "none";
    }
  });
}

//Timer function
function startTimer() {
  var timer = setInterval(function () {
    timerEl.textContent = timerCount;
    timerCount--;
  }, 1000);
  if (timerCount === 0) {
    return alert("Time is up!");
  }
}
