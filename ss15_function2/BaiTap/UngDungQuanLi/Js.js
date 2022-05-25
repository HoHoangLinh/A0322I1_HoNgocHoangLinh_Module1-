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
    for (let index = 0; index < product.length; index++) {
        result += "<tr><td>" + product[index] + "</td>" +
            "<td><button onclick='edit(" + index + ")'>Edit</button></td>" +
            "<td><button onclick='deleteProduct(" + index + ")'>Delete</button></td>" +
            "</tr>";
    }
    result += "</table>";
    document.getElementById("table").innerHTML = result
}

function add() {
    let addproduct = document.getElementById('text');
    if (addproduct.value === "") {
        alert("Điền tên sản phẩm")
    } else {
        product.push(addproduct.value);
    }
    listproduct()
}

function edit(temp) {
    let result  = "";
    result += "<table id='table'><th>Ten san pham<td></td><td colspan='2'>" + product.length + " products</td></th>";
    for (let index = 0; index < product.length; index++) {
        if (temp === index) {
            result += "<tr><td><input id='edit' type='text' value='" + product[index] + "'>"+ "</td>" +
                "<td><button onclick='update(" + index + ")'>Update</button></td>" +
                "<td><button onclick='deleteProduct(" + index + ")'>Delete</button></td>" +
                "</tr>";
        }else {
            result += "<tr><td>" + product[index] + "</td>" +
                "<td><button onclick='edit(" + index + ")'>Edit</button></td>" +
                "<td><button onclick='deleteProduct(" + index + ")'>Delete</button></td>" +
                "</tr>";
        }
    }
    result += "</table>";
    document.getElementById("table").innerHTML = result;

}

function update(temp) {
    let tenMoi = document.getElementById("edit").value;
    for (let index = 0; index < danhSachSanPham.length; index++){
        if(temp === index){
            product[index] = tenMoi;
        }
    }
    listproduct();
}

function deleteProduct() {
    if (confirm("Bạn có chắc muốn xóa sản phẩm " + product[temp] + " ra khỏi danh sách?")){
        product.splice(temp,1);
    }
    listproduct()
}