document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to my portfolio";
    let index = 0;
  
    function type() {
      document.getElementById("typing-text").textContent = text.substring(0, index + 1);
      index = (index + 1) % text.length; // Loop continuously
      setTimeout(type, 200); // 
    }
  
    type();
  });
  