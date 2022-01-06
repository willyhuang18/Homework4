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
var score = [];
var quizScore =0;
// Random question for user to answers
var questions = [ {title: "When you have enough money to purchase crypto, what would you all in with?",
choices: ["Bitcoin","SHIBA","ETH", "None", "Save for future"],
answer : "ETH"    
},
{
title: "How long would you think to take for seeing an actual Apple Car?",
choices: ["1 year","2 to 5 years","8 years", "another 10 years"],
answer : "2 to 5 years"    
},
{
title: "How long you think you will be work as Full Stack after?",
choices: ["4 months","2 months","a year", "more than one years"],
answer : "a year"    
},
{
title: "what is your life style current?",
choices: ["Nomadic","Healthy","Rural","Solo "],
answer : "Nomadic"    
}];
//set variable to localStorage to save userData
var allScore = JSON.parse(localStorage.getItem("userData"));
var submitbtn = document.querySelector(".submit");
var result = document.querySelector(".result")
//give variable to quit and retake button
var quit = document.getElementById("quit");
var retake = document.getElementById("restart");

//setting display for result
document.querySelector(".result").setAttribute('style', 'display:none');
//onclick event causes the quiz start
startbtn.onclick = () =>{
// add the css class for the quiz element to be shown
    quiz.classList.add("activeQuiz");
    start.classList.add("activeStart");
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
            endGame();
        }

}

// display the function for the question, and giving index to initiate 
function showQuestion(questionArray){
    //if statement for when it hit the last question, run endgame()
    if(currentindex == questionArray.length){
      endGame();
      return;
    }
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
      button.addEventListener("click", () => {
        //answer checker
        correction(element === questionArray[currentindex].answer)
      currentindex++
      //empty the answer for the next question
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
      quizScore++;
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

//declare a function for User score
function userScore(a , b){
  //set local variable for user data
  var userData ={
    user: a,
    score: b
  };
  //add the score into final score
  score.push(userData);
  //save the data into localStorage and stringfify the score
  localStorage.setItem("userData", JSON.stringify(score));
}

//add eventlistenter for submit user data
submitbtn.addEventListener("click", ()=>{
  var input = document.getElementById("input").value
  userScore(input,quizScore)
})

//add endgame function for all the question is answered
function endGame(){
  quiz.classList.remove("activeQuiz"); 
  //remove the style
  document.querySelector(".result").removeAttribute('style', 'display:none');
}
//event if user want to quit the game
quit.addEventListener("click", ()=>
{location.reload()});