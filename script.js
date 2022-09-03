var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer");
var correctAnswer = document.querySelector("#correct");
var questions = document.querySelector(".question");
var questionOne = document.querySelector("question-one");
var questionTwo = document.querySelector("question-two");
var questionThree = document.querySelector("question-three");
var questionFour = document.querySelector("question-four");
var questionFive = document.querySelector("question-five");

// var totalQuestions = ".questions".size();
var score = 0;

document.getElementById("question-one").style.display = "none";
document.getElementById("question-two").style.display = "none";
document.getElementById("question-three").style.display = "none";
document.getElementById("question-four").style.display = "none";
document.getElementById("question-five").style.display = "none";

// Function for quiz
function startQuiz() {
  startTimer();
  timerCount = 60;

  if (correctAnswer) {
    // go to question 2
    score++;
    // Need to add "correct answer"
  } else {
    score--;
    timerCount = timerCount - 5;
  }

  if (timerCount === 0) {
    return;
  }
}

// Function for timer
function startTimer() {
  timer = setInterval(function () {
    timerEl.textContent = timerCount;
    timerCount--;
    // need to add if a question is wrong, subtract 5
  }, 1000);
}

startButton.addEventListener("click", startQuiz);
