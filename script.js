// 🔐 Şifre göster/gizle butonu (göz ikonu)
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

// 🔓 Şifre alanı: yazarken sarı, blur olduğunda sarı-yeşil animasyon
const passwordInput = document.getElementById("sign-in-password");

if (passwordInput) {
  passwordInput.addEventListener("input", () => {
    const value = passwordInput.value.trim();

    passwordInput.classList.remove("animate-border");

    if (value.length > 0) {
      passwordInput.classList.add("typing");
    } else {
      passwordInput.classList.remove("typing");
    }
  });

  passwordInput.addEventListener("blur", () => {
    const value = passwordInput.value.trim();

    passwordInput.classList.remove("typing");

    if (value.length > 0) {
      passwordInput.classList.add("animate-border");
    } else {
      passwordInput.classList.remove("animate-border");
    }
  });
}



// 🔢 6 haneli doğrulama kodu formatlama (boşlukla ayırma)
["sign-up-verification-code", "forgot-pass-verification-code"].forEach((id) => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("input", (e) => {
      const numbers = e.target.value.replace(/\D/g, "").slice(0, 6).split("");
      e.target.value = numbers.join(" ");
    });
  }
});

// 📞 Telefon numarası inputu: yalnızca rakam, + ve boşluk kabul edilir
const phoneInput = document.getElementById('sign-up-phone');

if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d+ ]/g, '');
  });
}

// 📅 Ay inputu (MM): yalnızca 01–12 arasında geçerli değer kabul edilir
document.addEventListener("DOMContentLoaded", function () {
  const monthInput = document.getElementById("sign-up-month");

  if (monthInput) {
    monthInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });

    monthInput.addEventListener("blur", function () {
      let value = this.value.trim();

      if (/^[1-9]$/.test(value)) {
        value = "0" + value;
      }

      if (!/^(0[1-9]|1[0-2])$/.test(value)) {
        this.value = "";
      } else {
        this.value = value;
      }
    });
  }
});

// 🚻 Cinsiyet seçiminde aynı butona tekrar tıklanırsa seçimi kaldır
let lastSelectedRadio = null;

document.querySelectorAll('input[name="sign-up-gender"]').forEach((radio) => {
  radio.addEventListener('click', function () {
    if (this === lastSelectedRadio) {
      this.checked = false;
      lastSelectedRadio = null;
    } else {
      lastSelectedRadio = this;
    }
  });
});

// 🖼️ Profil fotoğrafı yükleme ve önizleme (sign up)
const input = document.getElementById('sign-up-profile-picture');
const preview = document.getElementById('profile-preview');

input.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      preview.src = this.result;
      preview.classList.remove("default");
      preview.classList.add("uploaded");
    });

    reader.readAsDataURL(file);
  }
});

// 🖼️ Profil fotoğrafı sıfırlama butonu (reset)
const profileInput = document.getElementById('sign-up-profile-picture');
const profilePreview = document.getElementById('profile-preview');
const resetBtn = document.querySelector('.reset-picture-btn');

profileInput.addEventListener('change', function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePreview.src = e.target.result;
      profilePreview.classList.add('uploaded');
      resetBtn.style.display = 'inline';
    };
    reader.readAsDataURL(file);
  }
});

resetBtn.addEventListener('click', () => {
  profileInput.value = '';
  profilePreview.src = './images/default-profile-picture.svg';
  profilePreview.classList.remove('uploaded');
  resetBtn.style.display = 'none';
});

// 📧 Tüm email inputlarında yazarken sarı, geçerli formatta anında yeşil, blur'da aynı kontrol
const emailInputs = document.querySelectorAll('input[type="email"]');

emailInputs.forEach((emailInput) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  emailInput.addEventListener('input', () => {
    const value = emailInput.value.trim();

    emailInput.classList.remove('typing', 'valid', 'invalid');

    if (value === "") return;

    if (emailPattern.test(value)) {
      emailInput.classList.add('valid');
    } else {
      emailInput.classList.add('typing');
    }
  });

  emailInput.addEventListener('blur', () => {
    const value = emailInput.value.trim();

    emailInput.classList.remove('typing', 'valid', 'invalid');

    if (value === "") return;

    if (emailPattern.test(value)) {
      emailInput.classList.add('valid');
    } else {
      emailInput.classList.add('invalid');
    }
  });
});

// Forgot password - password ile confirm password kontrol
function checkPasswordStrength(password) {
  const pattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return pattern.test(password);
}

function setupPasswordValidation(passId, confirmId) {
  const passInput = document.getElementById(passId);
  const confirmPassInput = document.getElementById(confirmId);

  if (!passInput || !confirmPassInput) return;

  passInput.addEventListener('input', () => {
    const value = passInput.value.trim();
    passInput.classList.remove('valid', 'invalid');

    if (value.length > 0) {
      passInput.classList.add('typing');
      if (checkPasswordStrength(value)) {
        passInput.classList.add('valid');
        passInput.classList.remove('typing');
      }
    } else {
      passInput.classList.remove('typing');
    }

    validateConfirmPassword();
  });

  passInput.addEventListener('blur', () => {
    const value = passInput.value.trim();
    passInput.classList.remove('typing', 'valid', 'invalid');

    if (value === "") return;

    if (checkPasswordStrength(value)) {
      passInput.classList.add('valid');
    } else {
      passInput.classList.add('invalid');
    }
  });

  confirmPassInput.addEventListener('input', () => {
    const value = confirmPassInput.value.trim();
    confirmPassInput.classList.remove('valid', 'invalid');

    if (value.length > 0) {
      confirmPassInput.classList.add('typing');
      validateConfirmPassword();
    } else {
      confirmPassInput.classList.remove('typing');
    }
  });

  confirmPassInput.addEventListener('blur', () => {
    confirmPassInput.classList.remove('typing');
    validateConfirmPassword();
  });

  function validateConfirmPassword() {
    const passValue = passInput.value.trim();
    const confirmValue = confirmPassInput.value.trim();

    confirmPassInput.classList.remove('valid', 'invalid');

    if (confirmValue && passValue === confirmValue && checkPasswordStrength(passValue)) {
      confirmPassInput.classList.add('valid');
    } else if (confirmValue) {
      confirmPassInput.classList.add('invalid');
    }
  }
}

setupPasswordValidation('forgot-pass-password', 'forgot-pass-confirm-password');
setupPasswordValidation('sign-up-password', 'sign-up-confirm-password');


// 🔢 6 haneli doğrulama kodları için boşluklu format ve animasyon (sign up & forgot pass)
["sign-up-verification-code", "forgot-pass-verification-code"].forEach((id) => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("input", (e) => {
      const raw = e.target.value.replace(/\D/g, "");
      const numbers = raw.slice(0, 6).split("");

      e.target.value = numbers.join(" ");

      input.classList.remove("filled", "animate-border");

      if (raw.length === 6) {
        input.classList.add("animate-border");
      } else if (raw.length > 0) {
        input.classList.add("filled");
      }
    });

    input.addEventListener("blur", () => {
      const raw = input.value.replace(/\D/g, "");
      input.classList.remove("filled", "animate-border");

      if (raw.length === 6) {
        input.classList.add("animate-border");
      } else if (raw.length > 0) {
        input.classList.add("filled");
      }
    });
  }
});

