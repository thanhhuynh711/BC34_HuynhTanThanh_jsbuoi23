// Bài tập 1

document.getElementById("btnTinhLuong").onclick = function () {
  // đầu vào
  console.log("yesS");
  var luongNgay = document.getElementById("luongNgay").value;
  var soNgayLam = document.getElementById("soNgayLam").value;
  // xử lý
  var total = "";
  total = luongNgay * soNgayLam;

  // format vnđ
  var format = new Intl.NumberFormat("vn-VN");
  var totalVND = format.format(total) + " vnd";

  // đầu ra
  var totalSumVND = "Tổng lương: " + totalVND 
  document.getElementById("thongBaoTinhLuong").innerHTML = totalSumVND;
};

// Bài tập 2

document.getElementById("btnTinhTrungBinh").onclick = function () {
  // Đầu vào 5 số thực từ người nhập
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var number3 = +document.getElementById("number3").value;
  var number4 = +document.getElementById("number4").value;
  var number5 = +document.getElementById("number5").value;
  // Xử lý
  var average = ((number1 + number2 + number3 + number4 + number5) * 1) / 5;
  // Đầu ra
  document.getElementById("thongBao").innerHTML = average;
};

// Bài tập 3

document.getElementById("btnQuyDoi").onclick = function () {
  // Đầu vào
  var vnd = 23500;
  var usd = document.getElementById("usd").value;
  // xử lý
  var convert = usd * vnd;
  // format vnđ
  var format = new Intl.NumberFormat("vn-VN");
  var convertVND = format.format(convert) + " vnd";
  // Đầu ra
  document.getElementById("thongBaoQuyDoi").innerHTML = convertVND;
};

// Bài tập 4

document.getElementById("btnHCN").onclick = function () {
  // Đầu vào
  var width = +document.getElementById("width").value;
  var height = +document.getElementById("height").value;
  // Xử lý
  var area = width * height;
  var perimeter = (width + height) * 2;
  // Đầu ra
  var thongBaoHCN = "";
  thongBaoHCN += "<p>" + "Diện tích: " + area + "</p> ";
  thongBaoHCN += "<p>" + "Chu vi: " + perimeter + "</p> ";

  document.getElementById("thongBaoHCN").innerHTML = thongBaoHCN;
};

// Bài tập 5

document.getElementById("btnSum").onclick = function () {
  // Đầu vào
  var twoDigits = document.getElementById("twoDigits").value;
  // Xử lý
  var num1 = twoDigits % 10; 
  var num2 = Math.floor(twoDigits / 10); 
  var sum = num1 + num2;
  // Đầu ra

  document.getElementById("thongBaoSum").innerHTML = sum;
};
