// Tổng duyệt kiến thức:
/*
Buổi 1 -> 4: HTML - CSS
- Tiêu đề: h1 -> h6
- Thẻ đoạn văn: p
- Box-model: margin -> border - > padding -> content
- CSS Selector: Sư dụng CSS để style cho các element (thẻ) tại html
- Luyện tập: The Band Page.
Buổi 5 -> 8: Javascript
- Biến: Lưu trữ dữ liệu, (mọi kiểu dữ liệu)
- KDL cơ bản (6 cái): string, number, boolean, undefined, null, Object
- if (else if) else: nếu - nếu không thì - thì
- Vòng lặp: Có 3 vòng lặp cơ bản (while, do while, for) (vòng lặp thêm: for - in, for - of)
- Array: mảng là gì? dùng để làm gì?. Mảng giống như 1 danh sách, dùng để liệt kê, lưu trữ dữ liệu:
- Object: Object là gì? Nó dùng để làm gì?. Đối tượng, thường được dùng để: Lưu trữ nội dung dễ lấy ra.
*/

// let a = "123";
// console.log(typeof (a)); // KDL của a là ??

/*
Nay lên trường xin dược info 1 bạn gái rất là xinh.
Tôi muốn lưu trữ dữ liệu bạn gái này thì phải lưu cái gì để dễ dàng truy cập

1. name
2. address
3. phone
4. social
..
*/



// Bắt đầu thực hành lấy dữ liệu trong Form

// Tạo ra 1 biến để chứa thẻ form đó
const formElement = document.getElementById(`info`);
// AddEventListener
formElement.addEventListener("submit", function (e) {
  //  Ngan su kien reload mac dinh cua trinh duyet ta su dung
  e.preventDefault(); // ngan thanh cong trinh duyet tự động reload
  const data = {
    lastName: formElement.lastName.value,
    firstName: formElement.firstName.value,
    gender: formElement.gender.value,
    city: formElement.city.value,
  }
  console.log(data);
  formElement.lastName.value = ""
  formElement.firstName.value = ""
})


