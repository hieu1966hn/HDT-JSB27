
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
function sum(a, b) {
  return a + b;
}


console.log(
  sum(1, 2)
); // => 3

console.log(
  sum(99, 100)
); // => 199