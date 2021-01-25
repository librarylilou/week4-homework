function startQuiz(){
    var questions = {
        qOne: "Fill in the blank. Objects are a collection of _________.",
        qTwo: "Which is the proper variable annotaion for an array?"
    }; 
}


var choicesOne = ["variables", "elements", "properties"];
var choicesTwo = ["var varName = {}", "var varName = []", "var varName = ()" ]; 

var answers = {
    aOne: "Properties",
    aTwo: "var varName = []"
};

<div class="btn-group-vertical btn-group-lg" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">variables</button>
  <button type="button" class="btn btn-outline-primary">elements</button>
  <button type="button" class="btn btn-outline-primary">properties</button>
</div>

/*
<div class="choicesTwo" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">var varName = {}</button>
  <button type="button" class="btn btn-outline-primary">var varName = []</button>
  <button type="button" class="btn btn-outline-primary">var varName = ()</button>
</div> 
*/