var readlineSync = require('readline-sync')

var userName = readlineSync.question("Your name plz...\n");
console.log("hey welcome " + userName + " to The Cricketer Contest!");
score = 0;
console.log("\n          *******************************************          \n")
console.log("How to play?")
console.log("You will be asked few questions and given a set of options against them.\nYou need to just type in the option number and if it is correct your score will be upgraded by one. ")
console.log("\n          *******************************************          \n")

function checkAnswer(question,answer,option1,option2,option3){
  console.log(question )
  console.log("1. " + option1)
  console.log("2. " + option2)
  console.log("3. " + option3)
  var userAnswer = readlineSync.question()


  if(userAnswer===answer){
    console.log("Correct answer")
    score = score +1;
    console.log("Your score = " + score);
  }else{
  console.log("Wrong answer");
  console.log("Correct answer is option "+ answer);
  console.log("Your score = " + score);
  }
  console.log("\n          ----------*************************----------          \n")
}

// checkAnswer("Whats my favorite dish","Mushroom Manchurian");
// checkAnswer("Whats my favorite place to hang out","Mysore");

questions = [
  questionOne = {
  question:"Which cricketer had scored highest individual score in first-class cricket?",
  answer:"2",
  option1:"Don Bradman",
  option2:"Brian Lara",
  option3:"Lane Hutton",
},
questionTwo = {
  question:"Which cricketer had scored fastest century in ODI cricket?",
  answer:"3",
  option1:" Vivian Richards",
  option2:"Corey Anderson",
  option3:"AB de Villiers",
},
questionThree = {
  question:"Which cricketer had scored highest individual score in ODI cricket?",
  answer:"1",
  option1:"Rohit Sharma",
  option2:"Chris Gayle",
  option3:"Martin Guptill",
},
questionFour = {
  question:"Who among the following is the highest wicket taker in all formats of cricket?",
  answer:"2",
  option1:"GD McGrath",
  option2:"M Muralitharan",
  option3:"A Kumble",
},
questionFive = {
  question:"Who was the highest wicket taker for India during the historic 1993 Prudential World Cup held in England?",
  answer:"3",
  option1:"Ravi Shashtri",
  option2:"Kapil Dev",
  option3:"Roger Binny",
},
questionSix = {
  question:"Against which country did India score their highest total at the World Cup?",
  answer:"1",
  option1:"Bermuda",
  option2:"Kenya",
  option3:"Sri Lanka",
},
];

highScores = [
  player1 = {
    name:"Ajay",
    score:4
  },
  player2 = {
    name:"Koli",
    score:3
  },
  player3 = {
    name:"Satvik Saya",
    score:3
  },
  player4 = {
    name:"Aniket",
    score:2
  },
]

for(var i=0 ; i<questions.length;i++){
  currentQuestion = questions[i];
  checkAnswer(currentQuestion.question,currentQuestion.answer,currentQuestion.option1,currentQuestion.option2,currentQuestion.option3)
}

player0 = {
  name:"xyz",
  score:0
}
// var highScore = 0
var highScorename,highScorevalue=0;

for(var i=0;i<highScores.length;i++){
  currentScorer=highScores[i];
  if(currentScorer.score>highScorevalue){
    highScorename=currentScorer.name;
    highScorevalue=currentScorer.score;
  }
}

console.log("Your current score out of six is: "+score);

console.log("\nCurrent high scorer is " + highScorename + " scoring " + highScorevalue + " out of 6\n"  );

console.log("Let me know if you score more than the current high Score......\n")
console.log("Namaskara  🙏   Thank You for playing  ")
console.log("\n          *******************************************          \n")