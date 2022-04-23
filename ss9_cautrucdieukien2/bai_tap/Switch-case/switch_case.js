function day() {
    let month = document.getElementById("a").value;
    month = parseInt(month)
    switch (month) {
        case 1 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 31 ngày ";
            break;
        case 3 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 31 ngày ";
            break;
        case 5 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 31 ngày ";
            break;
        case 7 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 31 ngày ";
            break;
        case 8 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 31 ngày ";
            break;
        case 10 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 31 ngày ";
            break;
        case 12 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 31 ngày ";
            break;
        case 4 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 30 ngày ";
            break;
        case 6 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 30 ngày ";
            break;
        case 9 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 30 ngày ";
            break;
        case 11 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 30 ngày ";
            break;
        case 2 :
            document.getElementById("months").innerHTML = "tháng " + month + " có 28 hoặc 29 ngày ";
            break;
        default :
            document.getElementById("months").innerHTML = "Vui lòng nhập tháng dưới 12";
            break;
    }
}