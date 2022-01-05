// create variable to ID from Html in JS in order to manipulate it from JS
var quizQuestions = document.getElementById("question");
//same as the timer, make it as countdown
var timer = document.querySelector(".timer");
//variable start is for the trigger the process of the code
var start = document.querySelector(".start button");
var sec = document.getElementById("time");
var quiz = document.querySelector(".quiz");
var left = document.getElementById("left");
var alert =document.getElementById("alert");
var answers = document.getElementById("answers");
//making the empty variable to make sure initiate all the variables to empty value
var nextQuestions;
var currentindex = 0;
// make score variable equal 0 in order to add up for the final score
var score = 0;
// Array of options for user to answers
var questions = [{}];
    

//onclick event causes the quiz start
start.onclick = () =>{
// add the css class for the quiz element to be shown
    quiz.classList.add("activeQuiz");
// convert questions easily comparisons
      quizQuestions= questions[currentindex];
      // execute the function to call on it
        showQuestion(quizQuestions)
// execute the time function to start countdown
    time()
}


//declare time and set it into interval function  
var times = setInterval(time, 1000)
// countdown function for the quiz
function time(){
  // set the time to be 75 sec
  var count = 75;
    left.innerText= count + " sec left";
         count--;
         if (count == -1){
          //  set the time content to empty string when it hit 0
          left.textContent='';
          //  use clearInterval to stop the time
            clearInterval(times);
        }

}

// display the function for the question, and giving index to initiate 
function showQuestion(index){
    quizQuestions.innerText = index.title;
    // use the foreach function make sure the question choice is display
    index.choices.forEach(element => {
      // make sure the choice is clickable, so create a 'button' for each of them
     var button =document.createElement("button")
    //  attach them with css style
    button.className="answers"
    button.innerText=element
    //append it to the choices
    answers.appendChild(button)
    //also need addEventListener to display next question
    button.addEventListener("click", displaynextQuestion)
  });
}
