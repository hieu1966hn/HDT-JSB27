// Bắt đầu code JS tại đây:
/////// Vòng lặp cơ bản

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

// VD: In ra các số từ 1 -> 10;
let i = 1; // i = 1
while(i < 11){ // true
    console.log(i); // 1,1,1

    // Sau mỗi lần lặp. Biến i sẽ tăng 1 đơn vị 
    i = i+1; // i++

}