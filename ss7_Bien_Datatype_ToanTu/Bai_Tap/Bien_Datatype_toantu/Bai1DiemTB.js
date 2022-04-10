let Vatly;
let HoaHoc;
let SinhHoc;
Vatly = prompt("Nhập điểm vật lý");
HoaHoc = prompt("Nhập điểm hóa học");
SinhHoc = prompt("Nhập điểm hóa học");

let DiemTB = (parseInt(Vatly) + parseInt(HoaHoc) + parseInt(SinhHoc))/3;
let DiemTong= parseInt(Vatly) + parseInt(HoaHoc) + parseInt(SinhHoc)
document.write('Điểm trung bình là : ' + DiemTB);

document.write('Tổng điểm 3 môn là : ' + DiemTong);