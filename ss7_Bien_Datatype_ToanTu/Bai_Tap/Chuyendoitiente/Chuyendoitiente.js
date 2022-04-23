function Convert() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("FromC").value;
    let To = document.getElementById("To").value;
    let Result;
    if (FromC == "USD" && To == "VND") {
        Result = "result : " + (Amount * 23000) + "VND";
        document.getElementById("Result").innerHTML = Result;

    } else if (FromC == "VND" && To == "USD") {
        Result = "result : " + (Amount / 23000) + "USD";
    document.getElementById("Result").innerHTML = Result;
}   else
        Result = "Không Hợp Lệ"
        document.getElementById("result").innerHTML = Result;
    }
