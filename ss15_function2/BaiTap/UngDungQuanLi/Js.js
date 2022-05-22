let x = 0;
let arr = Array();
    function add() {
        arr[x] = document.getElementById('text').value;
        alert("Display Product " + arr[x] + " Vị trí " + x);
        x++
        document.getElementById('text').value = "";
    // }
    // function Display() {
        let tr = "<tr>";
        for ( let i = 0 ; i < arr.length ; i++) {
            tr += "<td>" + arr[i] + "</td>"
            tr += "<td>" + "<input type='button' value='Edit' onclick='edit(i)'>" + "</td>"
            tr += "<td>" + "<input type='button' value='Delete'>" + "</td>" + "</tr>"
        }
        document.getElementById('test').innerHTML = tr
    }
