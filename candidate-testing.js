// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //const input = require('readline-sync');
  const input = require('readline-sync');
  candidateName = input.question("What is your name? ");
  console.log("Hello, " + candidateName)
}

//askForName()
/*
for (let i=0; i<5; i++) {
  const input = require('readline-sync');
  answer = input.question(questions[i]);
  candidateAnswers.push(answer);
  }
  
//console.log(candidateAnswers);

for (let i=0; i<5; i++) {
  console.log(`The answer to question ${i+1} is ${correctAnswers.slice(i,i+1)}.  \nYour answer was ${candidateAnswers.slice(i,i+1)}.`);
  }
*/

   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion() {
  for (let i=0; i<5; i++) {
  const input = require('readline-sync');
  answer = input.question(questions[i]);
  candidateAnswers.push(answer);
  }
  
for (let i=0; i<5; i++) {
  console.log(`The answer to question ${i+1} is ${correctAnswers.slice(i,i+1)}.  \nYour answer was ${candidateAnswers.slice(i,i+1)}.`);
  }
// console.log(candidateAnswers)
// console.log(correctAnswers)
} 

/*
{
  const input = require('readline-sync');
  candidateAnswer = input.question("Who was the first woman in space? ");  

  let correctAnswer = "Sally Ride";

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  if (candidateAnswer === correctAnswer) {
    console.log("Correct!  Good job!")
  }
else{console.log("Nope.")
}
}

 */
//askQuestion()

console.log(" \n ");

function gradeQuiz(candidateAnswers) {
 
let answeredCorrectly = [];

candidateAnswers = candidateAnswers.join(",").toUpperCase().split(",");
//console.log(candidateAnswers);

correctAnswers = correctAnswers.join(",").toUpperCase().split(",");
//console.log(correctAnswers);
 
for (let i = 0; i >= 0 && i <= 4; i++) {
  if (candidateAnswers[i] === correctAnswers[i]) {
     answeredCorrectly.push("Question"+[i+1])
  }
}
  let grade = answeredCorrectly.length / 5 * 100;

console.log(grade);

  if (grade < 80) {
    console.log(`Your final score is ${grade}.  You failed.  You have brought great shame upon yourself, your family, and your ancestors and descendents for all time`)
 } else {
    console.log(`Your final score is ${grade}. Expectations met.`)
 }
 return grade
}



 
//  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
//  return grade;


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};