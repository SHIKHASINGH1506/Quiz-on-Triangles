const hypotenuseForm = document.querySelector("#check-hypo");
const sides = document.querySelectorAll(".sides");
const submitBtn = document.querySelector("#submit-Btn");
const outputArea = document.querySelector(".hypShowHere");

hypotenuseForm.addEventListener('submit', calculateHypotenuse);

function calculateHypotenuse(e){
    e.preventDefault();
   // console.log(hypotenuseForm);
   let sideOne = Number(sides[0].value);
   let sideTwo = Number(sides[1].value)
   let sideThree = Math.sqrt((sideOne * sideOne) + ( sideTwo * sideTwo));
   outputArea.innerText = sideThree.toFixed(2);
}
