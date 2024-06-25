// THESE ARE PART 2 VARIABLES THAT I MOVED OUT THE WAY FOR NOW
let questions;
let correctAnswers;
let candidateAnswers;

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2 --I MOVED THESE TO THE TOP FOR NOW

function askForName() {
  // DOES THE WORD 'FUNCTION' SERVE TO DECLARE/DEFINE THE NAMED FUNCTION AND WHAT IT DOES?
  // TODO 1.1b: Ask for candidate's name //const input = require('readline-sync');
  const input = require('readline-sync');
  candidateName = input.question("What is your name? ");
  // COULD THIS HAVE BEEN "let candidateName = input.question..."?
  console.log("Hello, " + candidateName)
}

  // INPUT SEEMS LIKE EXCEPTION TO CONSOLE.LOG, YES?
//askForName()
   // DOES THIS ENACT THE PREVIOUSLY DEFINED FUNCTION OF THE SAME NAME?

   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion() {
  const input = require('readline-sync');
  candidateAnswer = input.question("Who was the first woman in space? ");  //THIS QUESTION SHOULD JUST BE THE VARIABLE NAME, CORRECT?  IF THE VARIABLE HAD NOT BEEN PREVIOUSLY DECLARED, WOULD WRITING OUT THE STRING SUFFICE, AT LEAST IN THIS CASE?

  let correctAnswer = "Sally Ride";  //ALREADY DEFINED, RIGHT?  IS THIS ENTIRELY SUPERFLUOUS?

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  if (candidateAnswer === correctAnswer) {
    console.log("Correct!  Good job!")
  }
else{console.log("Nope.")
}
}

 // askQuestion()


  console.log
 




function gradeQuiz(candidateAnswers) {

  



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

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