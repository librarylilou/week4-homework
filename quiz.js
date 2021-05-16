var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#count");
var startButton = document.querySelector("button");
var questionEl = document.querySelector("#question");
var optionEl = document.querySelectorAll("#options");

var doneEl = document.querySelector("#done");

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
    var optionDisplay = document.querySelector(".hide");
    optionDisplay.setAttribute("style", "display: block");

    // displays the question prompt
    var questionText = questionEl.textContent = questionOne.question;
    console.log(questionText, optionDisplay);

    // array for the list of options
    var optionsArray = questionOne.options;

    // for-loop to display all options listed in Array
    for (var i = 0; i < optionsArray.length; i++) {
      var allOptions = optionsArray[i];
      var someOption = document.querySelector("option");
      var optionBubbleEl = document.querySelector("#optionBubble");
      
      var optionBubble = optionBubbleEl.innerHTML;

  

      someOption.textContent = allOptions;
      someOption.value = allOptions;
      someOption.document = (optionBubble[0].toString());

      optionDisplay.append(someOption);
      console.log(someOption);

    }
  }
}

function quizDone() {


  console.log("done :)");
}


