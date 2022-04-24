var value = "";
function cal(x) {
    value = value + x
}
function tinhtoan(cal){
    switch (cal) {
        case '+' :
            value = value + '+';
        case '-' :
            value = value + '-';
    }
}