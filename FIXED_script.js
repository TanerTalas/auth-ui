document.addEventListener("DOMContentLoaded", () => {
  // ******************** THEME BUTTON ********************
  const themeButton = document.getElementById("themeButton");
  const html = document.documentElement;

  themeButton.addEventListener("click", () => {
    html.classList.toggle("dark");
  });

  // ******************** SHOW PASSWORD ********************
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".show-pass");
    if (!btn) return;

    const group = btn.closest(".input-group");
    if (!group) return;

    const input = group.querySelector(
      'input[type="password"], input[type="text"]',
    );
    if (!input) return;

    const icon = btn.querySelector("img");
    if (!icon) return;

    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";

    icon.src = isPassword
      ? "./images/icons/hide-password-icon.svg"
      : "./images/icons/show-password-icon.svg";

    icon.alt = isPassword ? "hide password icon" : "show password icon";

    btn.setAttribute("aria-pressed", String(isPassword));
    btn.setAttribute(
      "aria-label",
      isPassword ? "Hide password" : "Show password",
    );
  });

  // ******************** EMAIL - ANIMATE BORDER ********************
  const emailInputs = document.querySelectorAll('input[type="email"]');
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  const updateEmailState = (input, isBlur = false) => {
    const value = input.value.trim();

    input.classList.remove("typing", "valid", "invalid");
    if (!value) return;

    const isValid = EMAIL_REGEX.test(value);

    if (isValid) {
      input.classList.add("valid");
    } else if (isBlur) {
      input.classList.add("invalid");
    } else {
      input.classList.add("typing");
    }
  };

  emailInputs.forEach((input) => {
    input.addEventListener("input", () => updateEmailState(input));
    input.addEventListener("blur", () => updateEmailState(input, true));
  });

  // ******************** SIGN IN 1 - PASSWORD - ANIMATE BORDER ********************
  const passwordInput = document.getElementById("signIn-password");

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

  // ******************** PASSWORD - CONFIRM PASSWORD ********************

  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const isStrongPassword = (v) => PASSWORD_REGEX.test(v);

  function setupPasswordValidation(passId, confirmId) {
    const pass = document.getElementById(passId);
    const confirm = document.getElementById(confirmId);
    if (!pass || !confirm) return;

    const clearState = (el) =>
      el.classList.remove("typing", "valid", "invalid");

    const validateConfirm = () => {
      clearState(confirm);

      if (!confirm.value) return;

      if (confirm.value === pass.value && isStrongPassword(pass.value)) {
        confirm.classList.add("valid");
      } else {
        confirm.classList.add("invalid");
      }
    };

    // PASSWORD
    pass.addEventListener("input", () => {
      clearState(pass);

      if (!pass.value) {
        clearState(confirm);
        return;
      }

      if (isStrongPassword(pass.value)) {
        pass.classList.add("valid");
      } else {
        pass.classList.add("typing");
      }

      validateConfirm();
    });

    pass.addEventListener("blur", () => {
      clearState(pass);
      if (!pass.value) return;

      pass.classList.add(isStrongPassword(pass.value) ? "valid" : "invalid");
    });

    // CONFIRM PASSWORD
    confirm.addEventListener("input", () => {
      clearState(confirm);
      if (!confirm.value) return;

      confirm.classList.add("typing");
      validateConfirm();
    });

    confirm.addEventListener("blur", validateConfirm);
  }

  setupPasswordValidation(
    "forgotPass-3-password",
    "forgotPass-3-confirmPassword",
  );

  setupPasswordValidation("signUp-1-password", "signUp-1-confirmPassword");

  // ******************** MAKES FIRST LETTERS UPPERCASE ********************
  const capitalizeFields = [
    "signUp-3-firstName",
    "signUp-3-lastName",
    "signUp-3-country",
    "signUp-3-city",
    "signUp-3-bio",
  ];

  const formatInput = (input) => {
    input.addEventListener("input", () => {
      const cursor = input.selectionStart;
      const value = input.value;

      if (!value) return;

      const formatted = value.charAt(0).toUpperCase() + value.slice(1);

      if (formatted !== value) {
        input.value = formatted;
        input.setSelectionRange(cursor, cursor);
      }
    });
  };

  capitalizeFields.forEach((id) => {
    const input = document.getElementById(id);
    if (input) formatInput(input);
  });

  // ******************** CODE INPUTS ********************
  const codeInputIds = [
    "forgotPass-2-verificationCode",
    "signUp-2-verificationCode",
    "signUp-4-verificationCode",
  ];

  const updateCodeInputState = (input, raw) => {
    input.classList.remove("filled", "animate-border");

    if (raw.length === 6) {
      input.classList.add("animate-border");
    } else if (raw.length > 0) {
      input.classList.add("filled");
    }
  };

  codeInputIds.forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;

    input.addEventListener("input", (e) => {
      const raw = e.target.value.replace(/\D/g, "").slice(0, 6);
      e.target.value = raw.split("").join(" ");

      updateCodeInputState(input, raw);
    });

    input.addEventListener("blur", () => {
      const raw = input.value.replace(/\D/g, "");
      updateCodeInputState(input, raw);
    });
  });

  // ******************** SIGN UP - 3 PHONE INPUT ********************
  const phoneInput = document.getElementById("signUp-3-phone");
  const PHONE_REGEX = /^90[5]\d{9}$/;

  if (phoneInput) {
    const formatPhone = (value) => {
      let digits = value.replace(/\D/g, "");

      if (digits.startsWith("90")) digits = digits.slice(2);
      digits = digits.slice(0, 10);

      let f = "+90";
      if (digits.length) f += " " + digits.slice(0, 3);
      if (digits.length > 3) f += " " + digits.slice(3, 6);
      if (digits.length > 6) f += " " + digits.slice(6, 8);
      if (digits.length > 8) f += " " + digits.slice(8, 10);

      return { formatted: f, digits };
    };

    const validate = (digits) => PHONE_REGEX.test("90" + digits);

    phoneInput.addEventListener("focus", () => {
      if (!phoneInput.value) phoneInput.value = "+90 ";
    });

    phoneInput.addEventListener("input", (e) => {
      const { value, selectionStart } = e.target;
      const { formatted, digits } = formatPhone(value);

      const diff = formatted.length - value.length;
      e.target.value = formatted;

      const cursor = Math.min(
        Math.max(selectionStart + diff, 0),
        formatted.length,
      );

      requestAnimationFrame(() => e.target.setSelectionRange(cursor, cursor));

      phoneInput.classList.toggle(
        "invalid",
        !validate(digits) && digits.length,
      );
    });

    phoneInput.addEventListener("keydown", (e) => {
      if (
        phoneInput.selectionStart <= 4 &&
        ["Backspace", "Delete", "ArrowLeft"].includes(e.key)
      ) {
        e.preventDefault();
      }
    });

    phoneInput.addEventListener("blur", () => {
      const allDigits = phoneInput.value.replace(/\D/g, "");

      if (allDigits === "90") {
        phoneInput.value = "";
        phoneInput.classList.remove("invalid");
        return;
      }

      const digits = allDigits.slice(2);
      phoneInput.classList.toggle("invalid", !validate(digits));
    });
  }

  // ******************** SIGN UP - 3 - BIRTHDAY - Preventing invalid date entry ********************
  // INPUTS
  const inputs = {
    day: document.getElementById("signUp-3-day"),
    month: document.getElementById("signUp-3-month"),
    year: document.getElementById("signUp-3-year"),
  };

  // HELPERS
  const onlyDigits = (el) => (el.value = el.value.replace(/\D/g, ""));
  const pad2 = (v) => (v.length === 1 ? "0" + v : v);
  const setInvalid = (el, state) => el.classList.toggle("invalid", state);
  const CURRENT_YEAR = new Date().getFullYear();

  // FORMAT & RANGE GUIDELINES
  const rules = {
    day: /^(0[1-9]|[12][0-9]|3[01])$/,
    month: /^(0[1-9]|1[0-2])$/,
    year: /^(19\d{2}|20\d{2})$/,
  };

  // TRUE DATE VERIFICATION
  function validateRealDate() {
    const d = +inputs.day.value;
    const m = +inputs.month.value;
    const y = +inputs.year.value;

    if (!d || !m || !y) return;

    const date = new Date(y, m - 1, d);
    const valid =
      date.getFullYear() === y &&
      date.getMonth() === m - 1 &&
      date.getDate() === d;

    setInvalid(inputs.day, !valid);
    if (!valid) inputs.day.value = "";
  }

  function handleInput(type) {
    const el = inputs[type];
    if (!el) return;

    el.addEventListener("input", () => {
      onlyDigits(el);
      if (type === "year" && el.value.length > 4) {
        el.value = "";
        setInvalid(el, true);
      } else {
        setInvalid(el, false);
      }
    });

    el.addEventListener("blur", () => {
      let v = el.value.trim();
      if (type !== "year") v = pad2(v);

      let valid = rules[type].test(v);

      if (type === "year" && valid) {
        const yearNum = +v;
        valid = yearNum >= 1900 && yearNum <= CURRENT_YEAR;
      }

      setInvalid(el, !valid);
      el.value = valid ? v : "";

      validateRealDate();
    });
  }

  Object.keys(inputs).forEach(handleInput);

  // ******************** SIGN UP - 3 - LOCATION - Only letters allowed ********************
  const countryInput = document.getElementById("signUp-3-country");
  const cityInput = document.getElementById("signUp-3-city");

  function restrictToLetters(input) {
    input.value = input.value.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s\-]/g, "");
  }

  [countryInput, cityInput].forEach((el) => {
    if (el) el.addEventListener("input", () => restrictToLetters(el));
  });

  // ******************** SIGN UP - 3 - GENDER - Give radio's optional function ********************
  let lastSelectedRadio = null;

  document
    .querySelectorAll('input[name="signUp-3-gender"]')
    .forEach((radio) => {
      radio.addEventListener("click", function () {
        if (this === lastSelectedRadio) {
          this.checked = false;
          lastSelectedRadio = null;
        } else {
          lastSelectedRadio = this;
        }
      });
    });

  // ******************** FORM BUTTON STATES ********************
  const BTN_CLASSES = ["btn-default", "btn-typing", "btn-invalid", "btn-valid"];

  function setBtnState(btn, state) {
    if (!btn) return;
    BTN_CLASSES.forEach((c) => btn.classList.remove(c));
    btn.classList.add(`btn-${state}`);
    btn.disabled = state !== "valid";
  }

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  // FORM WIRING
  document.querySelectorAll("form").forEach((form) => {
    const btn = form.querySelector('button[type="submit"]');
    const inputs = form.querySelectorAll("input");

    if (!btn || inputs.length === 0) return;

    setBtnState(btn, "default");

    // GET PASSWORD FIELDS (IF ANY)
    const password = form.querySelector('input[name="password"]');
    const confirm = form.querySelector('input[name="confirmPassword"]');

    // PASSWORD MATCH RULE (PER FORM)
    const passwordsMatch = () => {
      const pwFields = [...form.querySelectorAll('input[type="password"]')];

      if (pwFields.length < 2) return true;

      const [password, confirm] = pwFields;

      return (
        password.value.trim() !== "" &&
        confirm.value.trim() !== "" &&
        password.value === confirm.value
      );
    };

    // CHECK ALL INPUTS VALIDITY
    const isAllValid = () =>
      [...inputs].every((input) => {
        if (input.type === "email") {
          return EMAIL_RE.test(input.value.trim());
        }
        return input.checkValidity();
      }) && passwordsMatch();

    const isAllEmpty = () => [...inputs].every((i) => i.value.trim() === "");

    // INPUT EVENT → DEFAULT / TYPING / VALID
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (isAllEmpty()) {
          setBtnState(btn, "default");
        } else if (isAllValid()) {
          setBtnState(btn, "valid");
        } else {
          setBtnState(btn, "typing");
        }
      });

      // BLUR EVENT → INVALID
      input.addEventListener("blur", () => {
        if (isAllEmpty()) {
          setBtnState(btn, "default");
        } else if (isAllValid()) {
          setBtnState(btn, "valid");
        } else {
          setBtnState(btn, "invalid");
        }
      });
    });
  });

  
});
