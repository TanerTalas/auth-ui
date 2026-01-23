document.addEventListener("DOMContentLoaded", () => {
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
    // hemen
    div.classList.add("centered");

    // 500ms sonra
    setTimeout(() => {
      div.classList.add("hideWith-opacity");
    }, 500);

    // 1100ms sonra
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
    // 100ms sonra
    setTimeout(() => {
      section.classList.remove("hideWith-display");
      div.classList.remove("hideWith-display");

      if (section.getAttribute("aria-hidden") === "true")
        section.setAttribute("aria-hidden", "false");

      if (div.getAttribute("aria-hidden") === "true")
        div.setAttribute("aria-hidden", "false");
    }, 100);

    // 200ms sonra
    setTimeout(() => {
      div.classList.remove("hideWith-opacity");
    }, 200);

    // 1100ms sonra
    setTimeout(() => {
      div.classList.remove("centered");
    }, 1100);
  }

  function switchSection(targetSectionSelector, targetDivSelector) {
    const activeSection = getActiveSection();
    const activeDiv = getActiveDiv(activeSection);

    const targetSection = $(targetSectionSelector);
    const targetDiv = $(targetDivSelector, targetSection);

    if (!activeSection || !activeDiv || !targetSection || !targetDiv) return;

    closeSection(activeSection, activeDiv);

    // kapanış bittikten sonra açılış
    setTimeout(() => {
      openSection(targetSection, targetDiv);
    }, 1200);
  }

  $("#openSignIn").addEventListener("click", () => {
    switchSection(".signIn-section", ".signIn-1-section");
  });

  $("#openSignUp").addEventListener("click", () => {
    switchSection(".signUp-section", ".signUp-1-section");
  });

  $(".createAccount-btn").addEventListener("click", () => {
    switchSection(".signUp-section", ".signUp-1-section");
  });
});
