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
  let isTransitioning = false;

  function bindStepButton(selector, section, target) {
    $(selector)?.addEventListener("click", (e) => {
      if (!e.currentTarget.classList.contains("btn-valid")) return;
      switchStep(section, target);
    });
  }

  function bindSectionSwitch(selector, section, div) {
    $(selector)?.addEventListener("click", () => {
      switchSection(section, div);
    });
  }

  function blurActiveElement() {
    const active = document.activeElement;
    if (active && typeof active.blur === "function") {
      active.blur();
    }
  }

  function blurIfInside(container, focusBody = false) {
    const active = document.activeElement;
    if (container && active && container.contains(active)) {
      active.blur();
      if (focusBody) document.body.focus();
    }
  }

  function openOverlay(fromSection) {
    blurIfInside(fromSection);
    fromSection.setAttribute("aria-hidden", "true");

    overlay.classList.remove("close");
    overlay.setAttribute("aria-hidden", "false");
    overlay.querySelector("button, input, [tabindex]")?.focus();
  }

  function closeOverlay(backToSection) {
    blurIfInside(overlay);

    overlay.classList.add("close");
    overlay.setAttribute("aria-hidden", "true");

    backToSection.setAttribute("aria-hidden", "false");
    backToSection.querySelector("input, button, [tabindex]")?.focus();
  }

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

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
    if (isTransitioning) return;
    isTransitioning = true;

    const activeSection = getActiveSection();
    const activeDiv = getActiveDiv(activeSection);

    const targetSection = $(targetSectionSelector);
    const targetDiv = $(targetDivSelector, targetSection);

    if (!activeSection || !activeDiv || !targetSection || !targetDiv) return;

    closeSection(activeSection, activeDiv);

    setTimeout(() => {
      openSection(targetSection, targetDiv);
    }, 1200);

    setTimeout(() => {
      isTransitioning = false;
    }, 2400);
  }
  // SWITCHS
  bindSectionSwitch("#openSignIn", ".signIn-section", ".signIn-1-section");
  bindSectionSwitch("#openSignUp", ".signUp-section", ".signUp-1-section");
  bindSectionSwitch(
    ".createAccount-btn",
    ".signUp-section",
    ".signUp-1-section",
  );
  bindSectionSwitch(
    ".forgotPassword-btn",
    ".forgotPass-section",
    ".forgotPass-1-section",
  );

  bindSectionSwitch(
    "#forgotPass-1-back-btn",
    ".signIn-section",
    ".signIn-1-section",
  );
  bindSectionSwitch(
    "#signUp-1-back-btn",
    ".signIn-section",
    ".signIn-1-section",
  );
  bindSectionSwitch("#btn-signUp-5", ".signIn-section", ".signIn-1-section");
  bindSectionSwitch(
    "#btn-forgotPass-4",
    ".signIn-section",
    ".signIn-1-section",
  );

  // SWITCH STEPS
  function switchStep(sectionSelector, targetDivSelector) {
    blurActiveElement();

    const section = $(sectionSelector);
    if (!section) return;

    const activeDiv = getActiveDiv(section);
    const targetDiv = $(targetDivSelector, section);
    if (!activeDiv || !targetDiv || activeDiv === targetDiv) return;

    activeDiv.classList.add("centered");

    setTimeout(() => activeDiv.classList.add("hideWith-opacity"), 500);
    setTimeout(() => {
      activeDiv.classList.add("hideWith-display");
      activeDiv.setAttribute("aria-hidden", "true");
    }, 1100);

    setTimeout(() => {
      targetDiv.classList.remove("hideWith-display");
      targetDiv.setAttribute("aria-hidden", "false");
    }, 1200);

    setTimeout(() => targetDiv.classList.remove("hideWith-opacity"), 1300);
    setTimeout(() => targetDiv.classList.remove("centered"), 2300);
  }

  bindStepButton("#btn-signUp-1", ".signUp-section", ".signUp-2-section");
  bindStepButton("#btn-signUp-2", ".signUp-section", ".signUp-3-section");
  bindStepButton("#btn-signUp-4", ".signUp-section", ".signUp-5-section");

  bindStepButton(
    "#btn-forgotPass-1",
    ".forgotPass-section",
    ".forgotPass-2-section",
  );
  bindStepButton(
    "#btn-forgotPass-2",
    ".forgotPass-section",
    ".forgotPass-3-section",
  );
  bindStepButton(
    "#btn-forgotPass-3",
    ".forgotPass-section",
    ".forgotPass-4-section",
  );

  const overlay = document.getElementById("confirmOverlay");

  // STEP 3 → OVERLAY
  $("#btn-signUp-3-1").addEventListener("click", (e) => {
    if (!e.currentTarget.classList.contains("btn-valid")) return;
    openOverlay($(".signUp-3-section"));
  });

  // CLOSE OVERLAY
  $("#back-btn-signUp-3-overlay").addEventListener("click", () => {
    closeOverlay($(".signUp-3-section"));
  });

  // TO SIGN UP 4
  $("#btn-signUp-3-2").addEventListener("click", () => {
    closeOverlay($(".signUp-3-section"));
    switchStep(".signUp-section", ".signUp-4-section");
  });
});
