var timerEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var intro = document.getElementById("intro");
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var questionContainer = document.getElementById("question-container");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");

var timerCount = 60;
var score = 0;
var selectedC = "";

//Quiz questions
var questions = [
  {
    id: 0,
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
    id: 1,
    q: "What is the first name of legendary F1 driver Michael Schumacher's son who races for Haas in 2022?",
    c: ["Mick", "Mack", "Mitch", "Mark"],
    a: "Mick",
  },
  {
    id: 2,
    q: "In 2022, what manufacturer provides Red Bull's engine?",
    c: ["Ferrari", "Renault", "Mercedes", "Honda"],
    a: "Honda",
  },
  {
    id: 3,
    q: "Which team did Carlos Sainz drive for before Ferrari?",
    c: ["Racing Point", "Alpine", "McLaren", "Alfa Romeo"],
    a: "McLaren",
  },
  {
    id: 4,
    q: "Which of these F1 drivers is of Dutch descent?",
    c: ["Max Verstappen", "Lando Norris", "Valtteri Bottas", "Esteban Ocon"],
    a: "Max Verstappen",
  },
];

// submitButton.style.display = "none";
// nextButton.style.display = "none";
c1.style.display = "none";
c2.style.display = "none";
c3.style.display = "none";
c4.style.display = "none";

//Start Quiz
function startQuiz() {
  // submitButton.style.display = "";
  // nextButton.style.display = "";
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

  c1.textContent = questions[id].c[0];
  c2.textContent = questions[id].c[1];
  c3.textContent = questions[id].c[2];
  c4.textContent = questions[id].c[3];

  //use "this" keyword to create a function that covers all buttons

  questionContainer.addEventListener("click", function (event) {
    // selectedC = c1.value;
    // selectedC = this.value;

    var [clicked, correctAns] = [event.target, questions[id].a];
    console.log(clicked.textContent);
    console.log(correctAns);

    if (clicked.textContent === correctAns) {
      score++;
      console.log(score);
      document.getElementById("result").textContent = "Correct!";
    } else {
      document.getElementById("result").textContent = "Incorrect.";
      timerCount - 5;
      score--;
    }

    if (id < 4) {
      id++;
      cycle(id);
    } else {
      intro.textContent = "Score:" + score;
      document.getElementById("question-container").textContent = "";
      // intro.textContent = "Results";
      // document.getElementById("question-container").textContent = "";
      // submitButton.style.display = "none";
      // nextButton.style.display = "none";
    }
  });

  // c2.addEventListener("click", function () {
  //   selectedC = c2.value;

  // });
  // c3.addEventListener("click", function () {
  //   selectedC = c3.value;

  // });
  // c4.addEventListener("click", function () {
  //   selectedC = c4.value;

  // });

  //Evalutating answer selection
  // submitButton.addEventListener("click", function () {
  //   console.log(selectedC)
  //   if (selectedC == "true") {
  //     score++;
  //     console.log(score);
  //     document.getElementById("result").textContent = "Correct!";
  //   } else {
  //     score--;
  //     timerCount - 5;
  //     document.getElementById("result").textContent = "Incorrect.";
  //   }
  // });

  // //Goes to next question until the last question
  // nextButton.addEventListener("click", function () {
  //   if (id < 4) {
  //     id++;
  //     cycle(id);
  //   } else {
  //     intro.textContent = "Results";
  //     document.getElementById("question-container").textContent = "";
  //     submitButton.style.display = "none";
  //     nextButton.style.display = "none";
  //   }
  // });

  // Clears Correct or Incorrect for each new question
  // document.getElementById("result").textContent = "";
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
