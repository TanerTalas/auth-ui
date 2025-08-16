// 🔐 Şifre göster/gizle butonu (göz ikonu)
const togglePassButtons = document.querySelectorAll('.show-pass');

togglePassButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const inputGroup = btn.closest('.input-group');
    const input = inputGroup?.querySelector('input');
    const icon = btn.querySelector('img');
    if (!input || !icon) return;

    const toText = input.type === 'password';
    input.type = toText ? 'text' : 'password';
    icon.src = toText
      ? './images/icons/hide-password-icon.svg'
      : './images/icons/show-password-icon.svg';
    icon.alt = toText ? 'hide password icon' : 'show password icon';

    btn.setAttribute('aria-pressed', String(toText));
    btn.setAttribute('aria-label', toText ? 'Hide password' : 'Show password');
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
["sign-up-verification-code", "forgot-pass-verification-code", "sign-up-phone-verification-code"].forEach((id) => {
  const input = document.getElementById(id);
  if (!input) return;

  input.addEventListener("input", (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    const numbers = raw.slice(0, 6).split("");
    e.target.value = numbers.join(" ");

    input.classList.remove("filled", "animate-border");
    if (raw.length === 6) input.classList.add("animate-border");
    else if (raw.length > 0) input.classList.add("filled");
  });

  input.addEventListener("blur", () => {
    const raw = input.value.replace(/\D/g, "");
    input.classList.remove("filled", "animate-border");
    if (raw.length === 6) input.classList.add("animate-border");
    else if (raw.length > 0) input.classList.add("filled");
  });
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
    newCursor = Math.max(0, Math.min(newCursor, formatted.length)); // <-- ekle
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
  if (!dayInput || !monthInput || !yearInput) return;

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
  if (month < 1 || month > 12 || year < 1900 || year > 2099) return;

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

[dayInput, monthInput, yearInput].forEach((el) => {
  if (el) el.addEventListener('input', validateDate);
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

[countryInput, cityInput].forEach((el) => {
  if (el) el.addEventListener("input", () => restrictToLetters(el));
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
const profileFileInput = document.getElementById('sign-up-profile-picture');
const profilePreview = document.getElementById('profile-preview');
const resetBtn = document.querySelector('.reset-picture-btn');

if (profileFileInput && profilePreview && resetBtn) {
  profileFileInput.addEventListener('change', function () {
    const file = this.files && this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      profilePreview.src = e.target.result;
      profilePreview.classList.add('uploaded');
      profilePreview.classList.remove('default');
      resetBtn.style.display = 'inline';
    };
    reader.readAsDataURL(file);
  });

  resetBtn.addEventListener('click', () => {
    profileFileInput.value = '';
    profilePreview.src = './images/default-profile-picture.svg';
    profilePreview.classList.remove('uploaded');
    resetBtn.style.display = 'none';
  });
}


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

// ========= Button state helpers =========
const BTN_STATES = ['btn-default', 'btn-typing', 'btn-invalid', 'btn-valid'];
const fieldValidity = (sel) => (form) => {
  const el = form.querySelector(sel);
  return el ? el.checkValidity() : true;
};
function setBtnState(btn, state) {
  if (!btn) return;
  BTN_STATES.forEach(c => btn.classList.remove(c));
  btn.classList.add(`btn-${state}`);
}

// Aggregate rule: input/blur eventine göre buton state
function wireForm({ formSel, btnSel, fields, validators }) {
  const form = document.querySelector(formSel);
  if (!form) return;
  const btn = form.querySelector(btnSel);
  setBtnState(btn, 'default');

  const listenTargets = fields.map(sel => form.querySelector(sel)).filter(Boolean);

  function isAllEmpty() {
    return listenTargets.every(el => (el.value ?? '').trim() === '');
  }

  function runValidators() {
    return validators.every(v => v(form));
  }

  // INPUT: yazarken sarı; tüm kurallar tutuyorsa yeşil
  function onInput(e) {
    if (runValidators()) {
      setBtnState(btn, 'valid');
    } else if (isAllEmpty()) {
      setBtnState(btn, 'default');
    } else {
      setBtnState(btn, 'typing');
    }
  }

  // BLUR: tüm kurallar tamsa yeşil; değilse kırmızı (boşsa gri)
  function onBlur(e) {
    if (isAllEmpty()) {
      setBtnState(btn, 'default');
    } else if (runValidators()) {
      setBtnState(btn, 'valid');
    } else {
      setBtnState(btn, 'invalid');
    }
  }

  listenTargets.forEach(el => {
    el.addEventListener('input', onInput);
    el.addEventListener('blur', onBlur);
  });
}

// ========= Field validators =========
const emailOK = (form) => {
  const el = form.querySelector('input[type="email"]');
  if (!el) return true;
  const v = el.value.trim();
  const re = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return v !== '' && re.test(v);
};

const nonEmpty = (sel) => (form) => {
  const el = form.querySelector(sel);
  return el && el.value.trim() !== '';
};

const otpOK = (sel) => (form) => {
  const el = form.querySelector(sel);
  if (!el) return true;
  const digits = el.value.replace(/\D/g, '');
  return digits.length === 6;
};

const passwordStrong = (sel) => (form) => {
  const el = form.querySelector(sel);
  if (!el) return true;
  const v = el.value.trim();
  const re = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // min 8 + 1 büyük harf + 1 sayı
  return v !== '' && re.test(v);
};

const passwordsMatch = (passSel, confirmSel) => (form) => {
  const p = form.querySelector(passSel);
  const c = form.querySelector(confirmSel);
  if (!p || !c) return true;
  const pv = p.value.trim();
  const cv = c.value.trim();
  const strong = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(pv);
  return strong && pv !== '' && cv !== '' && pv === cv;
};

const formRequiredOK = (form) => form.checkValidity(); // required + pattern + min/max vs.

// ========= Wiring (senin HTML’ine göre) =========

// 1) SIGN IN
wireForm({
  formSel: '.sign-in-form1',
  btnSel: '.log-in-btn',
  fields: ['#sign-in-email', '#sign-in-password'],
  validators: [
    emailOK,
    fieldValidity('#sign-in-password')  // minlength dahil tüm HTML5 kuralları
  ]
});

// 2) FORGOT PASS STEP 1 (Email)
wireForm({
  formSel: '.forgot-pass-form1',
  btnSel: '.next-btn',
  fields: ['#forgot-pass-email'],
  validators: [emailOK]
});

// 3) FORGOT PASS STEP 2 (OTP)
wireForm({
  formSel: '.forgot-pass-form2',
  btnSel: '.verify-btn',
  fields: ['#forgot-pass-verification-code'],
  validators: [otpOK('#forgot-pass-verification-code')]
});

// 4) FORGOT PASS STEP 3 (Password + Confirm)
wireForm({
  formSel: '.forgot-pass-form3',
  btnSel: '.done-btn',
  fields: ['#forgot-pass-password', '#forgot-pass-confirm-password'],
  validators: [
    passwordStrong('#forgot-pass-password'),
    passwordsMatch('#forgot-pass-password', '#forgot-pass-confirm-password')
  ]
});

// 5) SIGN UP STEP 1 (Email + Password + Confirm)
wireForm({
  formSel: '.sign-up-form1',
  btnSel: '.next-btn',
  fields: ['#sign-up-email', '#sign-up-password', '#sign-up-confirm-password'],
  validators: [
    emailOK,
    passwordStrong('#sign-up-password'),
    passwordsMatch('#sign-up-password', '#sign-up-confirm-password')
  ]
});

// 6) SIGN UP STEP 2 (Email OTP)
wireForm({
  formSel: '.sign-up-form2',
  btnSel: '.verify-btn',
  fields: ['#sign-up-verification-code'],
  validators: [otpOK('#sign-up-verification-code')]
});

// 7) SIGN UP STEP 3 (Required alanlar dolu mu?)
wireForm({
  formSel: '.sign-up-form3',
  btnSel: '.next-btn',
  fields: [
    '#sign-up-firstname', '#sign-up-lastname',
    '#sign-up-day', '#sign-up-month', '#sign-up-year',
    '#sign-up-phone'
  ],
  validators: [formRequiredOK]
});

// 8) SIGN UP STEP 4 (Phone OTP)
wireForm({
  formSel: '.sign-up-form4',
  btnSel: '.verify-btn',
  fields: ['#sign-up-phone-verification-code'],
  validators: [otpOK('#sign-up-phone-verification-code')]
});

// yardımcılar
const $ = (s) => document.querySelector(s);
const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function swapPanels(fromId, toId, step = 1000, { fadeBtn = null } = {}) {
  const from = document.getElementById(fromId);
  const to   = document.getElementById(toId);
  const fromWrap = from.closest('.wrapper');
  const toWrap   = to.closest('.wrapper');

  if (fadeBtn) fadeBtn.classList.add('fading-out');

  // 1) from container'ı merkeze al
  from.classList.add('center-mode');

  // 2) 1 sn sonra from'u gizle, to'yu göster
  await delay(step);
  fromWrap.classList.add('is-hidden');
  toWrap.classList.remove('is-hidden');

  // 3) 1 sn sonra to'dan center-mode'u kaldır
  await delay(step);
  to.classList.remove('center-mode');

  if (fadeBtn) fadeBtn.classList.remove('fading-out');
}

// KULLANIMLAR

// sign-in → sign-up1
$('.sign-up-text')?.addEventListener('click', () => {
  swapPanels('sign-in-container1', 'sign-up-container1', 1000, { fadeBtn: $('.sign-up-text') });
});

// sign-up1 → sign-up2
$('.sign-up-form1')?.addEventListener('submit', (e) => {
  e.preventDefault();
  swapPanels('sign-up-container1', 'sign-up-container2');
});

// sign-up1 back → sign in
$('#sign-up-container1 .back-btn')?.addEventListener('click', (e) => {
  e.preventDefault();
  swapPanels('sign-up-container1', 'sign-in-container1');
});

// sign-up2 → sign-up3
$('.sign-up-form2')?.addEventListener('submit', (e) => {
  e.preventDefault();
  swapPanels('sign-up-container2', 'sign-up-container3');
});

// sign-up4 → sign-up5
$('.sign-up-form4')?.addEventListener('submit', (e) => {
  e.preventDefault();
  swapPanels('sign-up-container4', 'sign-up-container5');
});

// sign-up5 → sign-in
$('#sign-up-container5 .sign-in-btn')?.addEventListener('click', () => {
  swapPanels('sign-up-container5', 'sign-in-container1', 1000, { fadeBtn: $('.sign-in-btn') });
});

// sign-in → forgot-pass1
$('#sign-in-container1 .forgot-pass-text')?.addEventListener('click', () => {
  swapPanels('sign-in-container1', 'forgot-pass-container1', 1000, { fadeBtn: $('.sign-up-text') });
});

// forgot-pass1 → forgot-pass2
$('.forgot-pass-form1')?.addEventListener('submit', (e) => {
  e.preventDefault();
  swapPanels('forgot-pass-container1', 'forgot-pass-container2');
});

// forgot-pass1 back → sign in
$('#forgot-pass-container1 .back-btn')?.addEventListener('click', (e) => {
  e.preventDefault();
  swapPanels('forgot-pass-container1', 'sign-in-container1');
});

// forgot-pass2 → forgot-pass3
$('.forgot-pass-form2')?.addEventListener('submit', (e) => {
  e.preventDefault();
  swapPanels('forgot-pass-container2', 'forgot-pass-container3');
});

// forgot-pass3 → forgot-pass4
$('.forgot-pass-form3')?.addEventListener('submit', (e) => {
  e.preventDefault();
  swapPanels('forgot-pass-container3', 'forgot-pass-container4');
});

// forgot-pass4 → sign-in
$('#forgot-pass-container4 .sign-in-btn')?.addEventListener('click', () => {
  swapPanels('forgot-pass-container4', 'sign-in-container1', 1000, { fadeBtn: $('.sign-in-btn') } );
});

// ==== Overlay refs ====
const overlay      = $('#confirmOverlay');
const overlayPanel = overlay?.querySelector('.overlay-panel');
const proceedBtn   = overlay?.querySelector('.proceed-btn');
const backBtn      = overlay?.querySelector('.back-btn');

// Aç
function openConfirmOverlay() {
  // display:none'ı kaldır
  overlay?.classList.remove('hidden');
  overlay?.removeAttribute('aria-hidden');

  // bir frame sonra .open ekle ki fade-in çalışsın
  requestAnimationFrame(() => {
    overlay?.classList.add('open');
    document.body.classList.add('no-scroll');
    overlayPanel?.setAttribute('tabindex', '-1');
    overlayPanel?.focus();
  });
}

// Kapat
function closeConfirmOverlay() {
  overlay?.classList.remove('open');
  overlay?.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');

  // fade-out bitince tekrar display:none yap
  const onEnd = (e) => {
    if (e.target !== overlay || e.propertyName !== 'opacity') return;
    overlay?.removeEventListener('transitionend', onEnd);
    overlay?.classList.add('hidden');
  };
  overlay?.addEventListener('transitionend', onEnd);
}

// dışarı tıkla / ESC
overlay?.addEventListener('click', (e) => { if (e.target === overlay) closeConfirmOverlay(); });
overlay?.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeConfirmOverlay(); });

// Step 3 submit → overlay
$('.sign-up-form3')?.addEventListener('submit', (e) => {
  e.preventDefault();
  openConfirmOverlay();
});

// Proceed → kapat + step4
proceedBtn?.addEventListener('click', async () => {
  closeConfirmOverlay();
  await delay(200); // CSS'te 180ms; güvenli pay
  swapPanels('sign-up-container3', 'sign-up-container4');
});

// Back → sadece kapat
backBtn?.addEventListener('click', closeConfirmOverlay);
