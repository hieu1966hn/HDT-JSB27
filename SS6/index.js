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
let i =1; // khai báo biến i
do{
// in ra số 1 luôn đi
console.log(i); // 1,2 ,.., 10
i = i + 1;
}
while(i < 11);