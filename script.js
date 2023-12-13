document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("startButton");
const welcomeSection = document.getElementById("welcomeSection");
    const questionSection = document.getElementById("questionSection");

    startButton.addEventListener("click", function(){
    welcomeSection.style.display = "none";
    questionSection.style.display = "block";
    startQuiz();

});
});

const questionsArray = [
    {
      question: 'What is the capital of France?',
      options: [
        {  text: 'Paris', correct: true },
        {  text: 'Rome', correct: false },
        {  text: 'Madrid', correct: false },
        {  text: 'London', correct: false },
      ],
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: [
        {  text: 'Mars', correct: true },
        {  text: 'Venus', correct: false },
        {  text: 'Jupiter', correct: false },
        {  text: 'Saturn', correct: false },
      ],
    },
    {
    question: 'What is the largest mammal?',
    options: [
      {  text: 'Elephant', correct: false },
      {  text: 'Blue whale', correct: true },
      {  text: 'Giraffe', correct: false },
      {  text: 'Hippopotamus',correct : false },
    ],
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: [
      {  text: 'Thailand', correct: false },
      {  text: 'India', correct: false },
      {  text: 'Japan', correct: true },
      {  text: 'China', correct: false },
    ],
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: [
      {  text: 'Atlantic Ocean', correct: false },
      {  text: 'Indian Ocean', correct: false },
      {  text: 'Arctic Ocean', correct: false },
      {  text: 'Pacific Ocean', correct: true },
    ],
  },
  {
    question: 'What is the capital of Australia?',
    options: [
      { text: 'Melbourne', correct: false },
      { text: 'Sydney', correct: false },
      { text: 'Canberra', correct: true },
      { text: 'Perth', correct: false },
    ],
  },
  ];


const questionText = document.getElementById("questionText");
const answerSection = document.getElementById("answer-section");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questionsArray[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionText.innerText = questionNo + ". " + currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.classList.add("btn");
        answerSection.appendChild(button);
        if(option.correct){
            button.dataset.correct = option.correct;
        }
        button.addEventListener("click", selectOption);
        
    })
}
function resetState(){
    nextButton.style.display = "none";
    while(answerSection.firstChild){
        answerSection.removeChild(answerSection.firstChild);
    }
}

function selectOption(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerSection.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionText.innerText = `You scored ${score} out of ${questionsArray.length}`;
   nextButton.innerText = "Play Again";
   nextButton.style.display = "block";
   nextButton.addEventListener("click", startQuiz);
}

function handleNextBotton(){

    if (currentQuestionIndex < questionsArray.length - 1){
        currentQuestionIndex++;
        showQuestion();
    }else{
        showScore();
    }
}
    


nextButton.addEventListener("click", () => {
 if(currentQuestionIndex < questionsArray.length ){
      handleNextBotton();
        
    }else{
        startQuiz();
    }
})





  
  
  


