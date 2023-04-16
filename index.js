/** BÀI 1
 *  Đầu vào
 * tạo biến luong1Ngay gán giá trị 100.000
 * 
 * tạo biến soNgayLam giá trị người dùng nhập
 * tạo biến tinhLuong
 *tạo biến tongLuong
 *  Xử lý 
 * soNgayLam = luong1Ngay * soNgayLam
 * 
 * Đầu ra
 * show kết quả lương
 * 
 */


var luong1Ngay = 100000;
var donVi = new Intl.NumberFormat('vn-VN');

var tinhLuong = document.getElementById('tinhLuong');
tinhLuong.onclick = function () {
    var soNgayLam = document.getElementById('soNgayLam').value;

    var tongLuong = luong1Ngay * soNgayLam;

    tongLuong = ('Tổng lương là : ' + donVi.format(tongLuong) + 'đ');


    document.getElementById('tongLuong').innerHTML = tongLuong;

};

/** BÀI 2
 *  Đầu vào
 * tạo biến so1
 * tạo biến so2
 * tạo biến so3
 * tạo biến so4
 * tạo biến so5
 * tạo biến tong
 * tạo biến giaTriTB
 *
 *  Xử lý 
 * giaTriTB = tong / 5
 * 
 * Đầu ra
 * show kết quả giaTriTB
 * 
 */
var tinhTB = document.getElementById('tinhTB');
tinhTB.onclick = function () {
    var so1 = document.getElementById('so1').value * 1;
    var so2 = document.getElementById('so2').value * 1;
    var so3 = document.getElementById('so3').value * 1;
    var so4 = document.getElementById('so4').value * 1;
    var so5 = document.getElementById('so5').value * 1;
    var tong = so1 + so2 + so3 + so4 + so5;
    var giaTriTB = tong / 5;
    giaTriTB = ('Giá trị trung bình là : ' + giaTriTB);
    document.getElementById('giaTriTB').innerHTML = giaTriTB;

};


/** BÀI 3
 *  Đầu vào
 * tạo biến soTien
 * tạo biến quyDoi
 * tạo biến giaTriQD
  tạo biến USD gán giá trị = 23.500
 *
 *  Xử lý 
 * giaTriQD = soTien * USD
 * 
 * Đầu ra
 * show kết quả giaTriQD
 * 
 */


var USD = 23500;
var doiUSD = new Intl.NumberFormat('vn-VN');
var quyDoi = document.getElementById('quyDoi');
quyDoi.onclick = function () {
    var soTien = document.getElementById('soTien').value;
    var giaTriQD = document.getElementById('giaTriQD');
    giaTriQD = soTien * USD;
    giaTriQD = ("Giá trị quy đổi là : " + doiUSD.format(giaTriQD)) + 'đ';
    document.getElementById('giaTriQD').innerHTML = giaTriQD;
};


/** BÀI 4
 *  Đầu vào
 * tạo biến chieuDai
 * tạo biến chieuRong
 * tạo biến chuVi
 * tạo biến dienTich
 * tạo biến tinh
   tạo biến ketQuaTinh
 *
 *  Xử lý 
 * chuVi = chieuDai + chieuRong *2
 * dienTich = chieuDai * chieuRong
 * Đầu ra
 * show kết quả ketQuaTinh
 * 
 */


var tinh = document.getElementById('tinh');
tinh.onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    var ketQuaTinh = ('Diện tích là : ' + dienTich) + ('; Chu vi là : ' + chuVi);

    document.getElementById('ketQuaTinh').innerHTML = ketQuaTinh;

};


/** BÀI 5
 *  Đầu vào
 * tạo biến kiSo
 * tạo biến hangChuc
 * tạo biến hangDonVi
 * tạo biến tinhTong
 * tạo biến tongKiso
 *
 *
 *  Xử lý 
 * tongKiso = hangChuc + hangDonVi
 * Đầu ra
 * show kết quả tongKiso
 * 
 */

var tinhTong = document.getElementById('tinhTong');
tinhTong.onclick = function () {
    var kiSo = document.getElementById('kiSo').value * 1;
    var hangChuc = Math.floor(kiSo / 10);
    var hangDonVi = kiSo % 10;
    var tongKiso = hangChuc + hangDonVi;
    tongKiso = ('Tổng kí số là : ' + tongKiso);
    document.getElementById('tongKiso').innerHTML = tongKiso;
};

