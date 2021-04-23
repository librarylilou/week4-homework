// user selects a choice
// if correct count & message 'correct!'
// if incorrect note & message 'wrong!'
// question 1
var point = 0;

function init() {
  getCorrect();
  getWrong();
}

function correctOption() {
  wordBlank.textContent = "Correct!";
  point++
  startButton.disabled = false;

  setCorrect()
}

// The loseGame function is called when timer reaches 0
function wrongOption() {
  wordBlank.textContent = "Wrong!";
  loseCounter++
  startButton.disabled = false;
  setWrong()
}

// The setTimer function starts and stops the timer and triggers correctOption() and wrongOption()
function startTimer() {
  // Sets timer
  var timer = 30;
  setInterval(function () {
    timer--;
    //timerElement.textContent = timerCount;
    if (timer >= 0) {
      span = document.getElementById("count");
      span.innerHTML = timer;

      // Tests if all questions have been answered
      if (/*isWin* && if answers all qs before time */ timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        correctOption();
      }
    }
    // Tests if time has run out
    if (timer === 0) {
      // Clears interval
      clearInterval(timer);
      // function for user score page();
    }
  }, 1000);
}
function start() {
  document.getElementById("count");
  startTimer();
};