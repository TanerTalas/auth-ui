document.addEventListener("DOMContentLoaded", () => {
  // ********** BUTTONS RELOAD PROBLEM **********
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
  // ********** NAV ACTIVE LINK **********
  const signInSection = document.querySelector(".signIn-section");
  const signUpSection = document.querySelector(".signUp-section");
  const signInNav = document
    .querySelector("#openSignIn")
    ?.closest(".nav-button");
  const signUpNav = document
    .querySelector("#openSignUp")
    ?.closest(".nav-button");
  if (!signInSection || !signUpSection || !signInNav || !signUpNav) return;
  function updateNavActive() {
    const signInActive = !signInSection.classList.contains("hideWith-display");
    const signUpActive = !signUpSection.classList.contains("hideWith-display");

    signInNav.classList.toggle("active", signInActive);
    signUpNav.classList.toggle("active", signUpActive);
  }
  updateNavActive();
  const observer = new MutationObserver(updateNavActive);
  observer.observe(signInSection, {
    attributes: true,
    attributeFilter: ["class"],
  });
  observer.observe(signUpSection, {
    attributes: true,
    attributeFilter: ["class"],
  });
  // ********** SECTION CHANGER **********
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  function blurIfFocusedInside(container) {
    const active = document.activeElement;
    if (container && active && container.contains(active)) {
      active.blur();
    }
  }

  function blurIfInside(container) {
    const active = document.activeElement;
    if (container && active && container.contains(active)) {
      active.blur();

      document.body.focus();
    }
  }

  function getActiveSection() {
    return $$("section").find(
      (sec) => sec.getAttribute("aria-hidden") === "false",
    );
  }

  function getActiveDiv(section) {
    return $$("div", section).find(
      (div) => div.getAttribute("aria-hidden") === "false",
    );
  }

  function closeSection(section, div) {
    blurIfInside(div);
    blurIfInside(section);
    div.classList.add("centered");

    setTimeout(() => {
      div.classList.add("hideWith-opacity");
    }, 500);

    setTimeout(() => {
      section.classList.add("hideWith-display");
      div.classList.add("hideWith-display");

      if (section.getAttribute("aria-hidden") === "false")
        section.setAttribute("aria-hidden", "true");

      if (div.getAttribute("aria-hidden") === "false")
        div.setAttribute("aria-hidden", "true");
    }, 1100);
  }

  function openSection(section, div) {
    setTimeout(() => {
      section.classList.remove("hideWith-display");
      div.classList.remove("hideWith-display");

      if (section.getAttribute("aria-hidden") === "true")
        section.setAttribute("aria-hidden", "false");

      if (div.getAttribute("aria-hidden") === "true")
        div.setAttribute("aria-hidden", "false");
    }, 100);

    setTimeout(() => {
      div.classList.remove("hideWith-opacity");
    }, 200);

    setTimeout(() => {
      div.classList.remove("centered");

      div.querySelector("input, button, [tabindex]")?.focus();
    }, 1100);
  }

  function switchSection(targetSectionSelector, targetDivSelector) {
    const activeSection = getActiveSection();
    const activeDiv = getActiveDiv(activeSection);

    const targetSection = $(targetSectionSelector);
    const targetDiv = $(targetDivSelector, targetSection);

    if (!activeSection || !activeDiv || !targetSection || !targetDiv) return;

    closeSection(activeSection, activeDiv);

    setTimeout(() => {
      openSection(targetSection, targetDiv);
    }, 1200);
  }
  // SWITCHS
  $("#openSignIn").addEventListener("click", () => {
    switchSection(".signIn-section", ".signIn-1-section");
  });

  $("#openSignUp").addEventListener("click", () => {
    switchSection(".signUp-section", ".signUp-1-section");
  });

  $(".createAccount-btn").addEventListener("click", () => {
    switchSection(".signUp-section", ".signUp-1-section");
  });

  // SWITCH STEPS
  function switchStep(sectionSelector, targetDivSelector) {
    blurActiveElement();
    function blurActiveElement() {
      const active = document.activeElement;
      if (active && typeof active.blur === "function") {
        active.blur();
      }
    }
    const section = $(sectionSelector);
    if (!section) return;

    const activeDiv = getActiveDiv(section);
    const targetDiv = $(targetDivSelector, section);

    if (!activeDiv || !targetDiv || activeDiv === targetDiv) return;

    activeDiv.classList.add("centered");

    setTimeout(() => {
      activeDiv.classList.add("hideWith-opacity");
    }, 500);

    setTimeout(() => {
      activeDiv.classList.add("hideWith-display");
      activeDiv.setAttribute("aria-hidden", "true");
    }, 1100);

    setTimeout(() => {
      targetDiv.classList.remove("hideWith-display");
      targetDiv.setAttribute("aria-hidden", "false");
    }, 1200);

    setTimeout(() => {
      targetDiv.classList.remove("hideWith-opacity");
    }, 1300);

    setTimeout(() => {
      targetDiv.classList.remove("centered");
    }, 2300);
  }
  // SIGN UP SWITCHS
  // TO SIGN UP 2
  $("#btn-signUp-1").addEventListener("click", (e) => {
    const btn = e.currentTarget;

    if (!btn.classList.contains("btn-valid")) return;

    switchStep(".signUp-section", ".signUp-2-section");
  });
  // TO SIGN UP 3
  $("#btn-signUp-2").addEventListener("click", (e) => {
    const btn = e.currentTarget;

    if (!btn.classList.contains("btn-valid")) return;

    switchStep(".signUp-section", ".signUp-3-section");
  });

  const overlay = document.getElementById("confirmOverlay");

  // STEP 3 → OVERLAY
  $("#btn-signUp-3-1").addEventListener("click", (e) => {
    const btn = e.currentTarget;
    if (!btn.classList.contains("btn-valid")) return;

    const signUp3 = $(".signUp-3-section");

    blurIfFocusedInside(signUp3);

    signUp3.setAttribute("aria-hidden", "true");

    overlay.classList.remove("close");
    overlay.setAttribute("aria-hidden", "false");

    overlay.querySelector("button, input, [tabindex]")?.focus();
  });

  // CLOSE OVERLAY
  const backBtn = document.getElementById("back-btn-signUp-3-overlay");
  backBtn.addEventListener("click", () => {
    const signUp3 = $(".signUp-3-section");

    blurIfFocusedInside(overlay);

    overlay.classList.add("close");
    overlay.setAttribute("aria-hidden", "true");

    signUp3.setAttribute("aria-hidden", "false");

    signUp3.querySelector("input, button, [tabindex]")?.focus();
  });

  // TO SIGN UP 4
  $("#btn-signUp-3-2").addEventListener("click", () => {
    const signUp3 = $(".signUp-3-section");

    overlay.classList.add("close");
    overlay.setAttribute("aria-hidden", "true");

    signUp3.setAttribute("aria-hidden", "false");

    signUp3.classList.remove("hideWith-display");

    switchStep(".signUp-section", ".signUp-4-section");
  });

  // TO SIGN UP 5
  $("#btn-signUp-4").addEventListener("click", (e) => {
    const btn = e.currentTarget;

    if (!btn.classList.contains("btn-valid")) return;

    switchStep(".signUp-section", ".signUp-5-section");
  });

  // SIGN UP 5 → SIGN IN
  $("#btn-signUp-5").addEventListener("click", () => {
    const btn = e.currentTarget;

    if (!btn.classList.contains("btn-valid")) return;
    
    switchSection(".signIn-section", ".signIn-1-section");
  });
});
