//Variables
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var intro = document.getElementById("intro");
var initialsButton = document.getElementById("initialsButton");
var highscoresButton = document.getElementById("highscoresButton");
var questionContainer = document.getElementById("question-container");
var scoresSection = document.getElementById("scores");
var initialsEl = document.getElementById("initials");
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
    q: "What is the first name of legendary F1 driver Michael Schumacher's son who races for Haas in 2022?",
    c: ["Mick", "Mack", "Mitch", "Mark"],
    a: "Mick",
  },
  {
    q: "In 2022, what manufacturer provides Red Bull's engine?",
    c: ["Ferrari", "Renault", "Mercedes", "Honda"],
    a: "Honda",
  },
  {
    q: "Which team did Carlos Sainz drive for before Ferrari?",
    c: ["Racing Point", "Alpine", "McLaren", "Alfa Romeo"],
    a: "McLaren",
  },
  {
    q: "Which of these F1 drivers is of Dutch descent?",
    c: ["Max Verstappen", "Lando Norris", "Valtteri Bottas", "Esteban Ocon"],
    a: "Max Verstappen",
  },
];

//Hiding content on initial page load
c1.style.display = "none";
c2.style.display = "none";
c3.style.display = "none";
c4.style.display = "none";
document.getElementById("initials").style.display = "none";
document.getElementById("enter").style.display = "none";
initialsButton.style.display = "none";
document.getElementById("clear").style.display = "none";

//Start Quiz function
function startQuiz() {
  c1.style.display = "";
  c2.style.display = "";
  c3.style.display = "";
  c4.style.display = "";
  startTimer();
  cycle(0);
}

//Starts quiz on click
startButton.addEventListener("click", startQuiz);

//Timer function
function startTimer() {
  timerEl.textContent = timerCount;
  console.log(timerEl.textContent);
  console.log(timerCount);
  var timer = setInterval(function () {
    timerEl.textContent--;
    if (timerEl.textContent == "0") {
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

//Function that compares question choice selection to answer
questionContainer.addEventListener("click", function (event) {
  var [clicked, correctAns] = [event.target, questions[qIndex].a];

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

//Function that displays next question until all questions have been answered
function nextQ() {
  var endGame = questions.length - 1;
  if (endGame === qIndex) {
    showResults();
  } else {
    qIndex++;
    cycle(qIndex);
  }
}

//Doesn't reload page after initials form submission
initialsButton.addEventListener("click", function (event) {
  event.preventDefault();
});

//Funciton that shows score at the end of the quiz
function showResults() {
  intro.textContent = "Score:" + score;
  questionContainer.textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("enter").style.display = "";
  initialsButton.style.display = "";
  document.getElementById("initials").style.display = "";
}

//Functions holds more than one localStorage value
function saveScore() {
  var initials = initialsEl.value;
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  var entry = {
    score: score,
    initials: initials,
  };

  highscores.push(entry);
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

//Saves initials submission on "enter" click
function pressEnter(event) {
  if (event.key === "Enter") {
    saveScore();
  }
}

//Saves initials on button click
initialsButton.addEventListener("click", function () {
  saveScore();
});

//Shows initals and high score
highscoresButton.addEventListener("click", function () {
  document.getElementById("clear").style.display = "";
  scoresSection.textContent = localStorage.getItem("highscores");
  document.getElementById("clear").addEventListener("click", function () {
    localStorage.clear();
    scoresSection.textContent = "";
    document.getElementById("clear").style.display = "none";
  });
});
