let weight = parseInt(prompt("Cân Nặng của bạn là ?"));
let height = parseInt(prompt("Chiều Cao của bạn là ?"));
let bmi;
    bmi = weight / ( height ^ 2 )
if (bmi < 18) {
    document.write("BMI của bạn là : Underweight");
} else if (bmi < 25) {
    document.write("BMI của bạn là : Normal");
} else if (bmi < 30) {
    document.write("BMI của bạn là : Overweight");
} else {
    document.write("BMI của bạn là : Obese");
}