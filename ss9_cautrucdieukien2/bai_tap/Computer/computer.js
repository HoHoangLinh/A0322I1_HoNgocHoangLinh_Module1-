function cal(x) {
    let value = document.getElementById("result").innerText;
    switch (x) {
        case "1" :
        case "2" :
        case "3" :
        case "4" :
        case "5" :
        case "6" :
        case "7" :
        case "8" :
        case "9" :
        case "+" :
            value = value + x;
        case "-" :
            value = value - x;
        case "X" :
            value = value * x;
            break;
        case "=":
            value = eval(value);
            break
    }
    document.getElementById("result").innerText = value;
}