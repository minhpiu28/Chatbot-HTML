function login() {
  // Kiểm tra thông tin đăng nhập ở đây
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Kiểm tra thông tin đăng nhập thành công
  if (username === "admin" && password === "123456") {
    // Chuyển đến giao diện khác
    window.location.href = "chatbot.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
}