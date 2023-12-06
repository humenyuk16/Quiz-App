document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const welcomeSection = document.getElementById("welcomeSection");
    const questionSection = document.getElementById("questionSection");

    startButton.addEventListener("click", function(){
    welcomeSection.style.display = "none";
    questionSection.style.display = "block";
});
});

