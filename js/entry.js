document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle-password');
    const password = document.getElementById('password');
    const confirm = document.getElementById('password-confirm');
  
    if (toggle && password && confirm) {
      toggle.addEventListener('change', function () {
        const type = this.checked ? 'text' : 'password';
        password.type = type;
        confirm.type = type;
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const email = document.getElementById("email");
    const emailConfirm = document.getElementById("email-confirm");
    const errorMsg = document.getElementById("email-error");
  
    // フォーム送信時に確認
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      if (email.value !== emailConfirm.value) {
        e.preventDefault(); // 送信キャンセル
        errorMsg.style.display = "block";
        emailConfirm.focus();
      } else {
        errorMsg.style.display = "none";
      }
    });
  });
  