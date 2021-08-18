const calArea = document.querySelector("#cal-area");
const sides = document.querySelectorAll(".angles");
const outputArea = document.querySelector(".areaShowHere");

calArea.addEventListener('submit', calculateArea);

function calculateArea(e){
    e.preventDefault();
    let base = sides[0].value;
    let height = sides[1].value;
    let area = (base*height)/2;
    outputArea.innerText = area;
}