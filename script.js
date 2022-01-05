// create variable to ID from Html in JS in order to manipulate it from JS
var quizQuestions = document.getElementById("question");
//same as the timer, make it as countdown
var timer = document.querySelector(".timer");
//variable start is for the trigger the process of the code
var start = document.querySelector(".start");
var startbtn = document.querySelector(".start button");
var sec = document.getElementById("time");
var quiz = document.querySelector(".quiz");
var left = document.getElementById("left");
var alerts =document.getElementById("alert");
var answers = document.getElementById("answers");
//making the empty variable to make sure initiate all the variables to empty value
var nextQuestions;
var currentindex = 0;
  // set the time to be 75 sec
var count = 75;
// make score variable equal 0 in order to add up for the final score
var score = 0;
// Array of options for user to answers
var questions = [{
  title: "Which of the following is true about variable naming conventions in JavaScript?",
  choices:["JavaScript variable names must begin with a letter or the underscore character." ,"JavaScript variable names are case sensitive.","Both of the above.","None of the above."], 
  answers: "Both of the above."},
  
  { 
  title: "Which of the following is a valid type of function javascript supports",
  choices:["named function" ,"anonymous function","Both of the above.","None of the above."], 
  answers: "Both of the above."

  }
];
var questionsAnswer = questions.answers;

//onclick event causes the quiz start
startbtn.onclick = () =>{
// add the css class for the quiz element to be shown
    quiz.classList.add("activeQuiz");
    start.classList.add("active");
// convert questions easily comparisons
      quizQuestions= questions[currentindex];
      // execute the function to call on it
        showQuestion(questions)
// execute the time function to start countdown
    time()
}


//declare time and set it into interval function  
var times = setInterval(time, 1000)
// countdown function for the quiz
function time(){
    left.innerText= count + " sec left";
         count--;
         if (count == -1){
          //  set the time content to empty string when it hit 0
          window.alert("times!")
          //  use clearInterval to stop the time
            clearInterval(times);
            // return the first page, or reload window
            location.reload();
        }

}

// display the function for the question, and giving index to initiate 
function showQuestion(questionArray){
    document.getElementById("question").innerText = questionArray[currentindex].title;
    // use the foreach function make sure the question choice is display
    questionArray[currentindex].choices.forEach(element => {
      // make sure the choice is clickable, so create a 'button' for each of them
      var button =document.createElement("button")
      //  attach them with css style
      button.className="answers"
      button.innerText=element
      //append it to the choices
      answers.appendChild(button)
      //also need addEventListener to display next question
      button.addEventListener("click", (e) => {
        //answer checker
        correction(e.target.value === questionArray[currentindex].answers)
      currentindex++
      answers.innerHTML=""
      showQuestion(questions)
    })
  });
}


  // declare correct function to notice the user's answer wrong or not
function correction(response){
  alerts.style.display = "block";
  // create 'p' for text content to display
  var p = document.createElement("p");
  alerts.appendChild(p);
    if(response){
      p.textContent = "Correct";
    }else {
        p.textContent ="Wrong"
        // substract time if the user answer it wrong
        count = count - 15
    }
    // setting timeout function 
    setTimeout(function(){
        alerts.innerText=""
        }, 1000);

    }


