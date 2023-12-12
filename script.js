document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const welcomeSection = document.getElementById("welcomeSection");
    const questionSection = document.getElementById("questionSection");

    startButton.addEventListener("click", function(){
    welcomeSection.style.display = "none";
    questionSection.style.display = "block";
});
});

function checkAnswer(selectOption){
    const correctAnswer = 'a';
     // Get all elements with the class 'answer' (answer options)
    const options =Array.from(document.querySelectorAll(".answer"));

    options.forEach(option => {
        const label = document.querySelector(`label[for ="${option.id}"]`)
        const optionId = option.id;
        if(optionId === selectOption){
            if(optionId === correctAnswer){
                label.style.color = "green";
            }else{
               label.style.color ="red";
            }
        }
    });
}

// Додаємо обробники подій до варіантів відповідей

const answerOptions = document.querySelectorAll(".answer");
answerOptions.forEach(option =>{
    // Add a 'click' event listener to each answer option
    option.addEventListener("click", function(){
        checkAnswer(option);
    })
})




