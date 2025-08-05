// 🔐 Şifre göster/gizle işlevi
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

// 📞 Telefon numarası girişinde sadece rakam, + ve boşluk kabul etme
const phoneInput = document.getElementById('sign-up-phone');

if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\d+ ]/g, '');
  });
}

// 📅 Ay girişini sadece 01–12 arasında ve 2 haneli formatta kabul etme
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

let lastSelectedRadio = null;

document.querySelectorAll('input[name="sign-up-gender"]').forEach((radio) => {
  radio.addEventListener('click', function () {
    if (this === lastSelectedRadio) {
      this.checked = false; // seçimi iptal et
      lastSelectedRadio = null;
    } else {
      lastSelectedRadio = this;
    }
  });
});

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
            resetBtn.style.display = 'inline'; // göster
        };
        reader.readAsDataURL(file);
    }
});

resetBtn.addEventListener('click', () => {
    profileInput.value = '';
    profilePreview.src = './images/default-profile-picture.svg';
    profilePreview.classList.remove('uploaded');
    resetBtn.style.display = 'none'; // gizle
});