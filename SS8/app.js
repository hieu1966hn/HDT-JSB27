
/////// Khai báo hàm
// //C1:
// function inRaHelloWorld() {
//   alert("Hello World!!!");
// }

// // C2:
// let inRaHelloWorld2 = function () {
//   alert("Hello World!!!");
// }


// ///// Khai báo Hàm không tham số
// function demo() {
//   console.log("Đây là hàm không tham số");
// }

// ///// Khai báo Hàm có 1 tham số (dưới dạng biến hoặc các kiểu dữ liệu khác)
// function demo2(x) {
//   console.log("Đây là hàm 1 tham số là:", x);
// }
// ///// Khai báo Hàm có nhiều tham số (dưới dạng biến hoặc các kiểu dữ liệu khác)
// /*
// VD:
// x1 = 1;
// x2 = "hello";
// x3 = ["hi"];
// x4 = {name: "Hiếu"}
// */
// function demo2(x1, x2, x3, x4) {
//   console.log("Đây là hàm nhiều tham số");
// }


// //// Khai báo hàm có Giá trị Trả về
// function sum() {
//   return "Đây là hàm có giá trị trả về"
// }


// ////// VD:
// function greet(name) {
//   console.log("Hello " + name);// Hello Nguyễn Hiếu
// }

// greet("Nguyễn Hiếu");//
// greet("Hoàng Vũ");//
// greet(123);//
// greet(['Nguyễn', "Trung", 'Hiếu']);//
// greet(true);//
// greet();//

/*
NX: Để gọi tới hàm ta viết cú pháp: tenHam()
(): Call back hay gọi là cú pháp thực thi hàm.
*/


/*
Xây dựng hàm "sum" có 2 tham số truyền vào là
số a và b và trả về (return) kết quả là  a+b:

Sau đó chạy hàm.
*/
// Hàm cộng 2 số bất kỳ;
// function sum(a, b) {
//   return a + b;
// }


// console.log(
//   sum(1, 2)
// ); // => 3

// console.log(
//   sum(99, 100)
// ); // => 199




/*
Bài Toán
1. Viết hàm kiểm tra số nguyên tố
2. Áp dụng vào để in ra các số nguyên tố nhỏ hơn 100;

SNT: là số chỉ chia hết cho 1 và chính nó;
*/

// Lưu ý: Đặt tên hàm theo quy tắc "camel case": đầu chữ viết thường, từ chữ thứ 2 viết hoa ký tự đầu
function kiemTraSoNguyenTo(n) { // n = 3;
  let dem = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      dem = dem + 1; // 1,2
    }
  }

  if (dem == 2) {
    return n; // đây là số nguyên tố
  }
  else {
    return false;
  }
}

// console.log(
//   kiemTraSoNguyenTo(4)//  in ra
// );

for (let i = 1; i <= 100; i++) {
  if (kiemTraSoNguyenTo(i) != false) {
    console.log(i);
  }
}