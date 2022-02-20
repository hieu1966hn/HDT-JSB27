- Phần tử form định nghĩa ra 1 hoặc nhiều form mẫu được dùng để thu thập dữ liệu người dùng.

- Cú pháp:
<form>
...
Các phần tử form  input: ( text: điền chữ), checkbox, radio, 
nút submit
...

</form>
Có các dạng input như sau
+ <input type="text">: Định nghĩa trường nhập liệu văn bản 
+ <input type="radio">: Định nghĩa nút radio, một nút tròn cho phép người dùng chọn 1 hoặc nhiều lựa chọn
+ <input type="checkbox">: Định nghĩa ô check, một nút vuông cho phép người dùng chọn 1 hoặc nhiều lựa chọn

- Nút submit:

* Cú pháp:

- <input type ="submit">: Định nghĩa một nút để khi bấm vào đó sẽ gửi dữ liệu đi (đi form-handler)

- addEventListner() trong JS: la phuong thức được tích hợp sẵn vào các đối tượng HTML thông qua cơ chế DOM. Khi sử dụng addEventListner thì chúng ta có thể bổ sung rất nhiều hành động vào sự kiện tại nhiều thời điểm khác nhau;

* Cú pháp addEventListner:
  elementObject.addEventListener( "eventName" , function (e){
  .... do something
  })
