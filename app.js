const angleInput = document.querySelectorAll(".angles");
const checkSumOfAngles = document.querySelector("#check-sum-of-angle");
const outputArea = document.querySelector("#output-area");

checkSumOfAngles.addEventListener("click", isTriangle);

function isTriangle(){
    var sum = caculateSumofAngles(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
    if(sum===180){
        showMessage("Yay! These angles are good to form a triangle.");
    }
    else{
        showMessage("Sad :( Sorry! Thess angles can't form a triangle.")
    }
}

function caculateSumofAngles(angle1, angle2, angle3){
    return (angle1 + angle2 + angle3);
}

function showMessage(message){
    outputArea.innerText = message;
    outputArea.style.fontWeight = "bold";
}


