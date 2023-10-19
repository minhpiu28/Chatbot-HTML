function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value;
  
    if (userMessage !== "") {
      appendMessage("user", userMessage); // Hiển thị tin nhắn của người dùng
  
      // Gửi yêu cầu đến bot và nhận phản hồi
      var botResponse = getBotResponse(userMessage);
      appendMessage("bot", botResponse);
  
      userInput.value = ""; // Xóa nội dung input
    }
  }
  
  function appendMessage(sender, message) {
    var chatMessages = document.getElementById("chat-messages");
    var messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
  
    var messageBubble = document.createElement("div");
    messageBubble.classList.add("message-bubble");
    messageBubble.textContent = message;
  
    messageContainer.classList.add(sender);
    messageContainer.appendChild(messageBubble);
    chatMessages.appendChild(messageContainer);
  
    chatMessages.scrollTop = chatMessages.scrollHeight; // Tự động cuộn xuống tin nhắn mới nhất
  }
  
  function getBotResponse(userMessage) {
    // Đây là nơi để gửi yêu cầu của người dùng đến bot và nhận phản hồi từ bot
    // Bạn có thể sử dụng API hoặc các phương thức xử lý ngôn ngữ tự nhiên để tương tác với bot
  
    // Trong ví dụ này, tôi sẽ trả về một phản hồi cứng-coded từ bot
    if (userMessage.toLowerCase().includes("xin chào")) {
      return "Xin chào! Bạn cần giúp gì ạ?";
    } else if (userMessage.toLowerCase().includes("tạm biệt")) {
      return "Tạm biệt! Hãy cho tôi biết nếu bạn cần thêm sự trợ giúp.";
    } else {
      return "Xin lỗi, tôi không hiểu. Có gì đó bạn muốn tôi giúp?";
    }
  }