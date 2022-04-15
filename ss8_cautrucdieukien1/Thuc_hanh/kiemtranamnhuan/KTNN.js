var year = parseInt(prompt("Enter a year"));
var isleapyear = false;
var HoangLinh4 = year % 4 == 0;
if (HoangLinh4) {
    var Hoang100 = year % 100 == 0;
    if (Hoang100) {
        var Linh400 = year % 400 == 0;
        if (Linh400) {
            isleapyear = true;
        }
    } else {
        isleapyear = true;

    }
}
if (isleapyear) {
    alert(year + " Is a leap year");
} else {
    alert(year + " Is NOT a leap year");
}