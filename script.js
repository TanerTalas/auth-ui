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
const phoneInput = document.getElementById("sign-up-phone");

if (phoneInput) {
  let hasInitialized = false;

  phoneInput.addEventListener("focus", function () {
    if (!hasInitialized) {
      this.value = "+90 ";
      hasInitialized = true;
    }
  });

  phoneInput.addEventListener("input", function (e) {
    const input = this;
    const rawValue = input.value;
    const cursor = input.selectionStart;

    let digits = rawValue.replace(/[^\d]/g, "");

    if (digits.startsWith("90")) {
      digits = digits.slice(2);
    }

    digits = digits.slice(0, 10);

    let formatted = "+90";
    if (digits.length > 0) formatted += " " + digits.slice(0, 3);
    if (digits.length > 3) formatted += " " + digits.slice(3, 6);
    if (digits.length > 6) formatted += " " + digits.slice(6, 8);
    if (digits.length > 8) formatted += " " + digits.slice(8, 10);

    const oldLength = rawValue.length;
    const newLength = formatted.length;
    const diff = newLength - oldLength;

    input.value = formatted;

    let newCursor = cursor + diff;
    setTimeout(() => {
      input.setSelectionRange(newCursor, newCursor);
    }, 0);
  });

  phoneInput.addEventListener("keydown", function (e) {
    const cursor = this.selectionStart;

    if (cursor <= 4) {
      const blockedKeys = ["Backspace", "Delete", "ArrowLeft"];
      if (blockedKeys.includes(e.key)) {
        e.preventDefault();
      }
    }
  });

  phoneInput.addEventListener("blur", function () {
    const digits = this.value.replace(/[^\d]/g, "");
    const isValid = /^90[5]\d{9}$/.test(digits);

    this.classList.remove("invalid");
    if (!isValid) {
      this.classList.add("invalid");
    }
  });

  phoneInput.addEventListener("input", function () {
    const digits = this.value.replace(/[^\d]/g, "");
    const isValid = /^90[5]\d{9}$/.test(digits);
    if (isValid) {
      this.classList.remove("invalid");
    }
  });

}

// 📅 Doğum tarihi: geçersiz gün girişini engelle
const dayInput = document.getElementById('sign-up-day');
const monthInput = document.getElementById('sign-up-month');
const yearInput = document.getElementById('sign-up-year');

function validateDate() {
  const day = parseInt(dayInput.value, 10);
  const month = parseInt(monthInput.value, 10);
  const year = parseInt(yearInput.value, 10);

  if (!month || !year) {
    if (day < 1 || day > 31) {
      dayInput.classList.add('invalid');
      dayInput.value = "";
    } else {
      dayInput.classList.remove('invalid');
    }
    return;
  }

  if (month < 1 || month > 12 || year < 1900 || year > 2099) {
    return;
  }

  const date = new Date(year, month - 1, day);

  const isValid =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  if (!isValid) {
    dayInput.classList.add('invalid');
    dayInput.value = "";
  } else {
    dayInput.classList.remove('invalid');
  }
}


[dayInput, monthInput, yearInput].forEach((input) => {
  input.addEventListener('input', validateDate);
});

// 📅 Ay inputu (MM): 01–12 arası, geçersizse anında temizle ve uyar
if (monthInput) {
  monthInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');

    if (this.value.length === 2) {
      if (!/^(0[1-9]|1[0-2])$/.test(this.value)) {
        this.value = "";
        this.classList.add("invalid");
      } else {
        this.classList.remove("invalid");
      }
    } else {
      this.classList.remove("invalid");
    }
  });

  monthInput.addEventListener("blur", function () {
    let value = this.value.trim();

    if (/^[1-9]$/.test(value)) {
      value = "0" + value;
    }

    if (!/^(0[1-9]|1[0-2])$/.test(value)) {
      this.value = "";
      this.classList.add("invalid");
    } else {
      this.value = value;
      this.classList.remove("invalid");
    }
  });
}

// 📅 Gün inputu (DD): tek basamaklıysa başına 0 ekle, geçersizse temizle
if (dayInput) {
  dayInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  dayInput.addEventListener("blur", function () {
    let value = this.value.trim();

    if (/^[1-9]$/.test(value)) {
      value = "0" + value;
    }

    if (!/^(0[1-9]|[12][0-9]|3[01])$/.test(value)) {
      this.value = "";
    } else {
      this.value = value;
    }
  });
}

// 📅 Yıl inputu: 4 basamaklı değilseg geçersiz kıl
if (yearInput) {
  yearInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");

    if (this.value.length > 4) {
      this.value = "";
      this.classList.add("invalid");
    } else {
      this.classList.remove("invalid");
    }
  });

  yearInput.addEventListener("blur", function () {
    const value = this.value.trim();

    if (!/^\d{4}$/.test(value) || value < 1900 || value > 2099) {
      this.value = "";
      this.classList.add("invalid");
    } else {
      this.classList.remove("invalid");
    }
  });
}

// Location sadece harf kabulü
const countryInput = document.getElementById("sign-up-country");
const cityInput = document.getElementById("sign-up-city");

function restrictToLetters(input) {
  input.value = input.value.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s\-]/g, "");
}

[countryInput, cityInput].forEach((input) => {
  input.addEventListener("input", () => restrictToLetters(input));
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
["sign-up-verification-code", "forgot-pass-verification-code", "sign-up-phone-verification-code"].forEach((id) => {
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

// Inputların lk harfini büyük yapar 
const capitalizeFields = [
  "sign-up-firstname",
  "sign-up-lastname",
  "sign-up-country",
  "sign-up-city",
  "sign-up-bio"
];

capitalizeFields.forEach((id) => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("input", function () {
      const cursorPos = this.selectionStart;
      let value = this.value;

      if (value.length > 0) {
        const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
        if (capitalized !== value) {
          this.value = capitalized;
          this.setSelectionRange(cursorPos, cursorPos);
        }
      }
    });
  }
});

function formatNameInput(input) {
  input.addEventListener("input", function () {
    const cursorPos = input.selectionStart;
    let value = input.value;

    if (value.length > 0) {
      const formatted =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

      if (formatted !== value) {
        input.value = formatted;
        input.setSelectionRange(cursorPos, cursorPos); // imleç yerini korur
      }
    }
  });
}

const firstNameInput = document.getElementById("sign-up-firstname");
const lastNameInput = document.getElementById("sign-up-lastname");

[firstNameInput, lastNameInput, countryInput, cityInput].forEach((input) => {
  if (input) formatNameInput(input);
});

