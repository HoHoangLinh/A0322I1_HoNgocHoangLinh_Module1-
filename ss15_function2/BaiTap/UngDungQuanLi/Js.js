// let x = 0;
// let arr = Array();
//     function add() {
//         arr[x] = document.getElementById('text').value;
//         alert("Display Product " + arr[x] + " Vị trí " + x);
//         x++
//         document.getElementById('text').value = "";
//     // }
//     // function Display() {
//         let tr = "<tr>";
//         for ( let i = 0 ; i < arr.length ; i++) {
//             tr += "<td>" + arr[i] + "</td>"
//             tr += "<td>" + "<input type='button' value='Edit' onclick='edit(i)'>" + "</td>"
//             tr += "<td>" + "<input type='button' value='Delete'>" + "</td>" + "</tr>"
//         }
//         document.getElementById('test').innerHTML = tr
//     }

let product = ["Apple","SamSung","Nokia"];
listproduct()

function listproduct() {
    let result = "";
    result += "<table id='table'><th>Ten san pham<td></td><td></td><td colspan='2'>" + product.length + " products</td></th>"
    for (let i = 0 ; i < product.length ; i++) {
        result += "<tr><td>" + product[i] + "</td>" +
            "<td> <button onclick="editproduct(" + i + ")">Edit</button> </td>" + "<td> <button onclick="deleteproduct(" + i + ")">Delete</button> </td>" + "</tr>";
    }
    result += "</table>";
    document.getElementById('table').innerText = result;
}