const togglePassBtn = document.querySelector('.show-pass');
const passwordInput = document.getElementById('password');
const togglePassIcon = togglePassBtn.querySelector('img');

togglePassBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';

  passwordInput.type = isPassword ? 'text' : 'password';

  togglePassIcon.src = isPassword
    ? './images/icons/hide-password-icon.svg'  
    : './images/icons/show-password-icon.svg';

  togglePassIcon.alt = isPassword ? 'hide password icon' : 'show password icon';
});

const codeInput = document.getElementById("verification-code");

codeInput.addEventListener("input", (e) => {
  // Sadece rakamları al
  const numbers = e.target.value.replace(/\D/g, "").slice(0, 6).split("");
  
  // Boşlukla birleştir
  e.target.value = numbers.join(" ");
});