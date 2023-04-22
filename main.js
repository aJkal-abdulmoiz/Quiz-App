
const questions=[
    {
        question:"What Does CSS Stand for?",
        answers: [
            {text:"Cascading Style Sheets",correct:true},
            {text:"Creative Style Sheets",correct:false},
            {text:"Conditional Style Sheets",correct:false},
            {text:"Computer Style Sheets",correct:false},
        ]
    },
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answers: [
            {text:"script",correct:true},
            {text:"scripting",correct:false},
            {text:"js",correct:false},
            {text:"javascript",correct:false},
        ]

    },
    {
        question:"The PHP syntax is most similar to:",
        answers: [
            {text:"Javascript",correct:false},
            {text:"C",correct:true},
            {text:"VBScript",correct:false},
            {text:"Perl",correct:true},
        ]

    },
    {
        question:"What is the correct syntax to import a Component from React?",
        answers: [
            {text:"import [ Component ] from 'react'",correct:false},
            {text:"import { Component } from 'react' ",correct:true},
            {text:"import Component from 'react'",correct:false},
            {text:"import React.Component from 'react'",correct:false},
        ]
    }

];

const questionElement = document.getElementById("question");

const answerButton = document.getElementById("answer-button");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        
    });


}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect =selectedBtn.dataset.correct== "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=> {
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
     });
     nextButton.style.display="block";

}

function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handlenextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handlenextbutton();
    }
    else{
        startQuiz();
    }
});

startQuiz();













