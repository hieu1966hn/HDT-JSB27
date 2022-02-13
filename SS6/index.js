// Bắt đầu code JS tại đây:
/////// Vòng lặp cơ bản: while, (do -  while), for

//// While
// cú pháp:

/*
while(điều kiện){
    // mã lệnh javascript
    ......
}

B1: Kiểm tra điều kiện
B2: Điều kiện đúng -> chạy code bên trong -> Về lại bước 1
B3: Điều kiện sai -> thoát vòng lặp

*/

// // VD: In ra các số từ 1 -> 10;
// let i = 1; // i = 1
// while(i < 11){ // true
//     console.log(i); // 1,1,1

//     // Sau mỗi lần lặp. Biến i sẽ tăng 1 đơn vị
//     i = i+1; // i++
// }

/////// do - while:
//// Cú pháp:
/*
do{
    // code javascript
}
while(điều kiện);


Mô tả cách hoạt động:
B1: Cho phép chạy code trong "do" lần đầu tiên
B2: Kiểm tra điều kiện
B3: Điều kiện đúng => chạy code trong "do"  => Quay lại bước 2
B4: Điều kiện sai => Thoát vòng lặp
*/

// VD: in ra các số từ 1 -> 10 với vòng lặp do - while
// let i =1; // khai báo biến i
// do{
// // in ra số 1 luôn đi
// console.log(i); // 1,2 ,.., 10
// i = i + 1;
// }
// while(i < 11);

////// Vòng lặp For
//// Cú pháp
/*
for( box1 ;box2 ; box3 ){
    // Code Javascript (JS)
}

- box1: Cho phép truyền 1 giá trị trong vòng lặp for (có thể bỏ qua)
- box2: Điều kiện dừng (bắt buộc)
- box3: Sau khi chạy xong hết code JS thì chạy box3 ; (có thể bỏ qua)


Mô tả quy trình: 
- B1: Thực hiện lệnh ở box1 (ko có thì thôi, chỉ thực hiện lần đầu tiên)
- B2: Kiểm tra điều kiện 
- B3: Điều kiện đúng => chạy code bên trong
 => chạy tới câu lệnh box3( nếu có) => Quay về B2
- B4: Điều kiện sai => Dừng vòng lặp
*/

// In ra các số từ 1 -> 10
//C1:
// let i = 1;
// for (; i < 11; ) {
//   // Code JS
//   console.log(i); // 1, 2, 3, ... ,10
//   i++; // i = i+1; // 2, 3, ..., 10, 11
// }

// C2:

// for (let i = 1; i < 11; i++) {
//   // Code JS
//   console.log(i); // 1, 2, 3, ... ,10
// }

/*
B1: Viết trương trình in ra các số chẵn từ 1 -> 10
output: 2,4,6,8,10
B2: Viết trương trình nhập vào 1 số dương, nếu không phải số dương => bắt nhập lại
Gợi ý: sử dụng "promt" để nhập giá trị từ trình duyệt.
B3: Nhập vào 1 số nguyên dương N, xác định xem số đó có phải số nguyên tố hay không ?.

*/

// Bài 01:
// C1: Không khuyến nghị
// console.log(2);
// console.log(4);
// console.log(6);
// console.log(8);
// console.log(10);

// C2: Sử dụng while
// let i = 1;
// while (i <= 10) {
//   // i<11
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// C3: Sử dụng for
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

////// Bài 02:
// let num = Number(prompt("Nhập vào 1 cái gì đó"));
// // Ép kiểu "chuỗi" về "number"

// console.log("num: ", num);

/*
Tất cả giá trị nhập vào đều được lưu lại dưới dạng kiểu dữ liệu chuỗi
*/

/// Bài giải
// let num;
// do {
//   num = Number(prompt("Mời người dùng nhập vào số dương"));
//   console.log(num);
// } while (num < 0);

// Chữa Bai03: Nhập vào 1 số nguyên dương N, xác định xem số đó có phải số nguyên tố hay không ?.
/*
Snt: là số chỉ chia hết cho 1 và chính nó
*/

let num;
do {
  num = Number(prompt("Mời người dùng nhập vào số dương"));
  console.log(num);
} while (num < 0);


// num =3;
let dem = 0;
for (let i = 1; i < num; i++) {
    if(num%i==0){
        dem++;
    }
}

if(dem ==1){
    alert(`số ${num} là số nguyên tố`)
}else{
    alert(`số ${num} không là số nguyên tố`)
}
