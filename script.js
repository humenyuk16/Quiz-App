document.addEventListener("DOMContentLoaded", function() {
  const quizGameButton = document.getElementById("quiz-game-button");
  const createQuizBtn = document.getElementById("create-quiz-btn");
  const welcomeSection = document.getElementById("welcome-section");
  const questionSection = document.getElementById("question-section");
  const quizFormUser = document.getElementById("quiz-create-form");
  const questionsListContainer = document.getElementById("questions-list-container");
  const returnHomeButton = document.getElementById("return-home-btn");
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", function(e){
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const sections = document.querySelectorAll("section");
      
        sections.forEach(section => {
          if (section.id === targetId) {
            section.style.display = "flex";
          } else {
            section.style.display = "none";
          }
        });      
    });
  });

  
  
 
  function showWelcomeSection(){
    welcomeSection.style.display = "flex";
    questionSection.style.display = "none";
    quizFormUser.style.display = "none";
    questionsListContainer.style.display = "none";
  }
  returnHomeButton.addEventListener("click", function(){
showWelcomeSection();
  });

    
    quizGameButton.addEventListener("click", function(){
    welcomeSection.style.display = "none";
    quizFormUser.style.display = "none";
    questionSection.style.display = "block";
    questionsListContainer.style.display = "none";

    startQuiz();

});

createQuizBtn.addEventListener("click", function(){
    welcomeSection.style.display = "none";
    questionSection.style.display = "none";
    quizFormUser.style.display = "flex";
    questionsListContainer.style.display = "flex";   
   
});
});

// CREATE QUIZ

const quizFormUser = document.getElementById('quiz-create-form');
const buttonSubmit = document.getElementById('submit-btn');
const questionList = document.getElementById('question-list');
const searchInput = document.getElementById('search-input');
const revealBtns = [];
const quizQuestions = [];

quizFormUser.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user inputs
  const question = document.getElementById('question').value;
  const option1 = document.getElementById('option1').value;
  const option2 = document.getElementById('option2').value;
  const option3 = document.getElementById('option3').value;
  const option4 = document.getElementById('option4').value;
  const correctAnswer = document.getElementById('correct-answer').value;
  const dialog = document.getElementById('dialog');

  // Create a new question object
  const newQuestion = {
    question,
    options: [option1, option2, option3, option4],
    correctAnswer: parseInt(correctAnswer),
    isForQuizPlay: false
  };

 function showDialog(message){
   dialog.textContent = message;
   dialog.showModal();
 }

 quizQuestions.push(newQuestion);
 showDialog('Question added successfully!');

 setTimeout(() => {
   dialog.close();
 }, 2000);

  // Clear form inputs
  document.getElementById('question').value = '';
  document.getElementById('option1').value = '';
  document.getElementById('option2').value = '';
  document.getElementById('option3').value = '';
  document.getElementById('option4').value = '';

  updateQuestionList();
});
 
function createQuestionHeader(question, index){
   const questionHeader = document.createElement("h3");
   questionHeader.className = "question-header";
   questionHeader.classList.add("question-header");
   questionHeader.textContent = `Q ${index + 1}: ${question.question}`;
return questionHeader;
}
function updateQuestionList() {
  // Clear the question list
  questionList.innerHTML = '';

  // Loop through the quizQuestions array and create list items for each question
  quizQuestions.forEach((question, index) => {
    const listItem = document.createElement("li");
    listItem.className = "question-list-item";

    // Display the question
    const questionHeader = createQuestionHeader(question, index);
    listItem.appendChild(questionHeader);

// Display the options, with the correct and wrong answear
       const optionsList = document.createElement("ul");
       optionsList.className = "options-list";
       question.options.forEach((option, optionIndex) => {
         const optionItem = document.createElement("li");
         optionItem.textContent = `${optionIndex + 1}: ${option}`;
         optionsList.appendChild(optionItem);
       });
       listItem.appendChild(optionsList);

       if(question.isForQuizPlay){
        question.options.forEach((option, optionIndex) => {
          if (optionIndex === question.correctAnswer - 1) {
            optionItem.children[optionIndex].style.color = "green";
           } else {
            optionsList.children[optionIndex].style.color = "red";
           }
        });
       }
    // Create a button to reveal the correct answer
    const revealBtn = document.createElement("button");
    revealBtn.className = "reveal-btn";
    revealBtn.textContent = "Reveal Answer";
    revealBtn.addEventListener("click", function() {
      alert(`The correct answer for question ${index + 1} is Option ${question.correctAnswer}`);
    });
    revealBtns.push(revealBtn);
    listItem.appendChild(revealBtn);
    questionList.appendChild(listItem);
  });

}


searchInput.addEventListener("input", function() {
  const searchQuery = searchInput.value.toLowerCase();

  // Filter the quizQuestions array by the search query
  const filteredQuestions = quizQuestions.filter(question =>
    question.question.toLowerCase().includes(searchQuery)
  );

  // Update the question list with the filtered questions
  updateFilteredQuestionList(filteredQuestions);
});

function updateFilteredQuestionList(filteredQuestions) {
  // Clear the question list
  questionList.innerHTML = "";

  // Loop through the filtered questions and create list items for each question
  filteredQuestions.forEach((question, index) => {
    const listItem = document.createElement("li");
    
    listItem.textContent = question.question;
    questionList.appendChild(listItem);

    // button to reveal the correct answer
    const revealBtn = revealBtns[index];
    listItem.appendChild(revealBtn);
  });
  
}



//QUIZ STANDART GAME
const questions = [
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
    question: 'What is the largest animal?',
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


const questionText = document.getElementById("question-text");
const answerSection = document.getElementById("answer-section");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next →";
  showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
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
        
    });
    
}
function resetState(){
    while(answerSection.firstChild){
        answerSection.removeChild(answerSection.firstChild);
    }    
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
  nextButton.style.display = "block";
  nextButton.innerText = "Next →";
  nextButton.removeEventListener("click", restartQuiz);
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
    questionText.innerText = `You scored ${score} out of ${questions.length}`;
   nextButton.innerText = "Play Again";
   nextButton.style.display = "block";
   nextButton.addEventListener("click", restartQuiz);
}


function handleNextButton(){

    if (currentQuestionIndex < questions.length - 1){
        currentQuestionIndex++;
        showQuestion();
    }else{
        showScore();
    }
}
    


nextButton.addEventListener("click", () => {
 if(currentQuestionIndex < questions.length ){
      handleNextButton();
        
    }else{
        startQuiz();
    }
});



  
  
  


