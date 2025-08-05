// nightmode.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("night-mode-toggle");
  if (!toggleButton) return; // Exit if button isn't found

  // Load saved mode from localStorage
  const nightMode = localStorage.getItem("nightMode");

  if (nightMode === "enabled") {
    document.body.classList.add("night-mode");
    toggleButton.textContent = "Light Mode";
  } else {
    toggleButton.textContent = "Night Mode";
  }

  // Toggle night mode on click
  toggleButton.addEventListener("click", () => {
    const isNight = document.body.classList.toggle("night-mode");

    localStorage.setItem("nightMode", isNight ? "enabled" : "disabled");
    toggleButton.textContent = isNight ? "Light Mode" : "Night Mode";
  });
});
