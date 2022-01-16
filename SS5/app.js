// Kiểu dữ liệu cơ bản trong JS

// Number: Kiểu số. VD: 1,2,3,4,5
// Boolean: true/false
// String: 'Hello World', "Hello", `Hi`
// Null: null: Nó là kiểu dữ liệu rỗng: VD
// Undefined: Kiểu không xác định: VD
// Object: Đối tượng: {name: "Hieu", age: "24"}

////// KHái niệm biến trong JS: Biến dùng để lưu trữ dữ liệu.
//// Khai báo biến: let/var/const

// let: khai báo biến bình thường
// let a = 123;
// a = 321

// var: khai báo biến bình thường
// var b = "Đây là biến b";

// const: KHai báo hằng số.
// const Pi = 3.14;
// Pi = 4.14; // Sai vì hằng số là số không đổi.

// NX: Let/var thay đổi được. Hằng số thì không.

// Lưu ý: câu lệnh: "console.log()": là câu lệnh in giá trị ra màn hình console trên trình duyệt

////// Luyện tập với toán tử trong JS:
// console.log("Đây là câu lệnh Console.log dùng để in ra cái gì mình thích trên cửa sổ console tại trình duyệt");;

///// Toán tử số học: +, -, *, /
// phép +
// console.log(1+2);
// console.log(1000+1);

// phép -
// console.log(1-2);
// console.log(101-1);

// phép *
// console.log(9 * 8); // 72
// console.log(3 * -1); // -3

// phép /
// console.log(3/2); // 1.5
// console.log(1/0); // Infinity

// phép %
// console.log(56%3);
// let chiaLayDu = 5%4; //1
// console.log("chiaLayDu của 5%4 là: ", chiaLayDu);

// phép ++
// let i = 1;
// i++; // tăng 1 đơn vị
// console.log(i);

// let phepToanCongCong = 3 + i++ + ++i + 1; // 8,
//    3 +   2   +   2   + 1 // sai
//    3 +   1   +   3   + 1 // Đúng
// console.log("phepToanCongCong: ", phepToanCongCong);

// phép --: giảm 1 đơn vị
// let j = 5;
// j--;
// console.log(j); //4
// let k = 5;
// --k;
// console.log(k);

/////// Toán tử gán

//// Toán tử gán: =
// let a;
// let b = 1;
// console.log("b: ", b);// 1
// console.log("a: ", (a = b)); // 1
//                 //  a = 1 => 1

///// Toán tử: +=
// let a = 0;
// let b = 10;
// console.log("a += b là: ", a+=b); // 10
// giải thích:  a+=b => a = a +b = 0 + 10 = 10

///// Toán tử: -=
// let a = 0;
// let b = 10;
// console.log("a -= b là: ", a-=b); // 10

///// Toán tử: *=
// let a = 0;
// let b = 10;
// console.log("a *= b là: ", a*=b); // 0
// a = a*b;

///// Toán tử: /=
// let a = 0;
// let b = 10;
// console.log("a /= b là: ", a/=b); // 0
// a = a/b;

///// Toán tử: %=
// let a = 5;
// let b = 4;
// console.log("a %= b là: ", a%=b); // a = a%b = 5%4 = 1

/////// Câu lệnh điều kiện trong Javascript: if  - else
// cú pháp
// if (1 > 2) { // 1>21 => false
//   // điều kiện đúng => chạy code này
//   console.log("Sai");
// } else {
//     // Điều kiện sai => chạy code này
//   console.log("Đúng");
// }
// KQ: In ra câu lệnh ở else

let diem = 8;
if (diem > 8) { // 8 > 8 => false
  console.log("Bạn đạt học sinh giỏi"); // thiên Ân. 
} else {
  console.log("Bạn đạt học sinh tiên tiến"); // Hưng, Vũ.
}

/*
Vòng đời: 
if (đk)
- đk đúng: Chạy code trong if   
- đk sai: Chạy code trong else     
*/

// Kiến thức nâng cao: Toán tử 3 ngôi: 
console.log(
    1>2? "Đúng":"Sai"
//  đk    
//  false if    else
);

