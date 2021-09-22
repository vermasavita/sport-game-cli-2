
var readlineSync = require('readline-sync'); 

var score = 0;
var question = "What's your name? "
var userName = readlineSync.question(question);
var welcomeMessage = "Welcome " + userName + " to DO YOU KNOW ABOUT SPORTS?" 

console.log(welcomeMessage);
console.log("Let's start!!")
console.log("\n---------------------------")

function game(question,answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer){
    console.log("Right!!!");
    score+=1;

  } else{
    console.log("Wrong :(");
  }

  console.log("Current score: " + score);
  console.log("\n----------------------------------")

}

var questions = [{
  question: "Which game does Cristiano Ronaldo play? ",
  answer: "football"
}, {
  question: "How many players are on a cricket team? ",
  answer: "11"
}, {
  question: "In which game did India won Olympic gold medal in 2021 ",
  answer: "javelin throw"
}, {
  question: "What should you do to win in run? ",
  answer: "run"
}, {
  question: "Who won gold medal for india in olympics 2021? ",
  answer: "neeraj chopra"
}]

for (var i = 0; i < questions.length;i++){
  var currentQuestion = questions[i];
  game(currentQuestion.question,currentQuestion.answer);
}

console.log("Your total score is : " + score)





