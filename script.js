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
