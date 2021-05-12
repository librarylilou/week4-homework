// user selects a choice
// if correct count & message 'correct!'
// if incorrect note & message 'wrong!'
// question 1
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#count");
var startButton = document.querySelector("button");
//var question = document.querySelector("#question");


var seconds = 3;


function startTimer() {
  // Sets timer
  var timer = setInterval(function () {
    seconds--;
    timerEl.textContent = seconds;

    if (seconds === 0) {
      // stops timer after 15 seconds reach zero
      clearInterval(timer);
      // calls function to end quiz
      quizDone();
    }

  }, 1000);
  questions();
}

function questions() {
  if (startButton) {
    mainEl.textContent = "";
    var questionDisplay = questionOne.textContent = questionOne.question;
    document.body.append(questionDisplay);
    
    console.log(questionDisplay);
  }

}



function quizDone() {
  console.log("done :)");
}


