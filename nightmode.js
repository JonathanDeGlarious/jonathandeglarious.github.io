// nightmode.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("night-mode-toggle");

  if (!toggleButton) return;

  const nightMode = localStorage.getItem("nightMode");

  if (nightMode === "enabled") {
    document.body.classList.add("night-mode");
    toggleButton.textContent = " Light Mode";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");

    if (document.body.classList.contains("night-mode")) {
      localStorage.setItem("nightMode", "enabled");
      toggleButton.textContent = " Light Mode";
    } else {
      localStorage.setItem("nightMode", "disabled");
      toggleButton.textContent = " Night Mode";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("night-mode-toggle");

  if (!toggleButton) return; // Graceful fail if button isn't on this page

  const nightMode = localStorage.getItem("nightMode");

  if (nightMode === "enabled") {
    document.body.classList.add("night-mode");
    toggleButton.textContent = " Light Mode";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");

    if (document.body.classList.contains("night-mode")) {
      localStorage.setItem("nightMode", "enabled");
      toggleButton.textContent = " Light Mode";
    } else {
      localStorage.setItem("nightMode", "disabled");
      toggleButton.textContent = " Night Mode";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("night-mode-toggle");
  if (!toggleButton) return; // Prevents error if the button doesn't exist

  const nightMode = localStorage.getItem("nightMode");
  if (nightMode === "enabled") {
    document.body.classList.add("night-mode");
    toggleButton.textContent = " Light Mode";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
    if (document.body.classList.contains("night-mode")) {
      localStorage.setItem("nightMode", "enabled");
      toggleButton.textContent = " Light Mode";
    } else {
      localStorage.setItem("nightMode", "disabled");
      toggleButton.textContent = " Night Mode";
    }
  });
});
