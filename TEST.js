document.addEventListener("DOMContentLoaded", () => {
  // Theme button function
  const themeButton = document.getElementById("themeButton");
  const html = document.documentElement;

  themeButton.addEventListener("click", () => {
    html.classList.toggle("dark");
  });

  
});
