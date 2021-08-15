//const quizForm = document.querySelector(".quizForm");
const quizForm = document.forms[0];
const submitQuiz = document.querySelector("#submitQuiz");
const score = document.querySelector(".score");
const correctAnswers = ["Yes", "No", "Yes", "65", "120", "28", "21", "600", "Right", "Yes"];
let currentScore=0;
// submitQuiz.addEventListener("click", calculateScore, false);

// function calculateScore(e){
//     e.preventDefault();
//     var index=0;
//     var sum=0;
//    const formData = new FormData(quizForm);
//    for(let value of formData.keys()){
//        console.log(value);
//        if(value === correctAnswers[index]){
//            sum++;
//        }
//        index++;
//    }

//  score.innerText = sum;
// }
quizForm.addEventListener('submit', calculateScore)


function calculateScore(e){
    e.preventDefault();
    const data = new FormData(quizForm);
    let index=0;
    for(let value of data){
       if(value[1] == correctAnswers[index]){
        //queDivs[index].style.backgroundColor = "lightgreen";
        currentScore++;
       }
       else{
        //queDivs[index].style.backgroundColor = "pink";
       }
        index++;
    }
    score.innerText = currentScore;
    submitQuiz.style.display= "none";
};