const btnEl = document.getElementById("btn");
const result = document.getElementById("result")
const weightcondition = document.getElementById("weight-condition")

function calculateBMI() {
    const height = document.getElementById("height").value / 100
    const weight = document.getElementById("weight").value;


    const BMI = weight / (height * height)
    
    result.value = BMI

    if (BMI < 18.5) {
        weightcondition.innerText = "Under weight";
      } else if (BMI >= 18.5 && BMI <= 24.9) {
        weightcondition.innerText = "Normal weight";
      } else if (BMI >= 25 && BMI <= 29.9) {
        weightcondition.innerText = "Overweight";
      } else if (BMI >= 30) {
        weightcondition.innerText = "Obesity";
      }
}

btnEl.addEventListener("click", calculateBMI)