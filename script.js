const togglePassButtons = document.querySelectorAll('.show-pass');

togglePassButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const inputGroup = btn.closest('.input-group');
    const input = inputGroup.querySelector('input'); 
    const icon = btn.querySelector('img');

    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    icon.src = isPassword
      ? './images/icons/hide-password-icon.svg'
      : './images/icons/show-password-icon.svg';
    icon.alt = isPassword
      ? 'hide password icon'
      : 'show password icon';
  });
});

const codeInput = document.getElementById("verification-code");

codeInput.addEventListener("input", (e) => {
  // Sadece rakamları al
  const numbers = e.target.value.replace(/\D/g, "").slice(0, 6).split("");
  
  // Boşlukla birleştir
  e.target.value = numbers.join(" ");
});