var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var intro = document.getElementById("intro");
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var questionContainer = document.getElementById("question-container");
var initialsEl = document.getElementById("initials").value;
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");

var timerCount = 60;
var score = 0;
var qIndex = 0;

//Quiz questions
var questions = [
  {
    // id: 0,
    q: "Which driver has won 7 world championships?",
    c: [
      "Lewis Hamilton",
      "Max Verstappen",
      "Fernando Alonso",
      "Daniel Riccardio",
    ],
    a: "Lewis Hamilton",
  },
  {
    // id: 1,
    q: "What is the first name of legendary F1 driver Michael Schumacher's son who races for Haas in 2022?",
    c: ["Mick", "Mack", "Mitch", "Mark"],
    a: "Mick",
  },
  {
    // id: 2,
    q: "In 2022, what manufacturer provides Red Bull's engine?",
    c: ["Ferrari", "Renault", "Mercedes", "Honda"],
    a: "Honda",
  },
  {
    // id: 3,
    q: "Which team did Carlos Sainz drive for before Ferrari?",
    c: ["Racing Point", "Alpine", "McLaren", "Alfa Romeo"],
    a: "McLaren",
  },
  {
    // id: 4,
    q: "Which of these F1 drivers is of Dutch descent?",
    c: ["Max Verstappen", "Lando Norris", "Valtteri Bottas", "Esteban Ocon"],
    a: "Max Verstappen",
  },
];

c1.style.display = "none";
c2.style.display = "none";
c3.style.display = "none";
c4.style.display = "none";
document.getElementById("initials").style.display = "none";

// var initials = localStorage.getItem("initials");

//Start Quiz
function startQuiz() {
  c1.style.display = "";
  c2.style.display = "";
  c3.style.display = "";
  c4.style.display = "";
  startTimer();
  cycle(0);
}

startButton.addEventListener("click", startQuiz);
// questionContainer.addEventListener("click", idk)

//Timer function
function startTimer() {
  // var timerCountNum = parseInt(timerCount);
  timerEl.textContent = timerCount;
  console.log(timerEl.textContent);
  console.log(timerCount);
  var timer = setInterval(function () {
    // timerEl.textContent = timerCount;
    timerEl.textContent--;
    if (timerEl.textContent == "0") {
      console.log("done");
      clearInterval(timer);
      showResults();
    }
  }, 1000);
}

//Function to display questions one at a time
function cycle(qIndex) {
  var questionSection = document.getElementById("question");
  questionSection.textContent = questions[qIndex].q;

  c1.textContent = questions[qIndex].c[0];
  c2.textContent = questions[qIndex].c[1];
  c3.textContent = questions[qIndex].c[2];
  c4.textContent = questions[qIndex].c[3];
}

questionContainer.addEventListener("click", function (event) {
  var [clicked, correctAns] = [event.target, questions[qIndex].a];
  // console.log(clicked.textContent);
  // console.log(correctAns);

  if (clicked.textContent === correctAns) {
    score++;
    console.log(score);
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Incorrect.";
    score--;
    timerEl.textContent = timerEl.textContent - 5;
  }

  nextQ();
});

function nextQ() {
  var endGame = questions.length - 1;
  if (endGame === qIndex) {
    showResults();
  } else {
    qIndex++;
    cycle(qIndex);
  }
}

function showResults() {
  // event.preventDefault();
  intro.textContent = "Score:" + score;
  questionContainer.textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("initials").style.display = "";
  localStorage.setItem("initials", initialsEl);
}

console.log(initialsEl)