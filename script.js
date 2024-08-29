const darkModeToggle = document.getElementById("dark-toggle");

// Check the user's color scheme preference and apply the corresponding mode
const userPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;
const userPrefersLight = window.matchMedia(
  "(prefers-color-scheme: light)",
).matches;

// Apply the correct theme based on preference
if (userPrefersDark) {
  document.documentElement.classList.add("dark-mode");
  darkModeToggle.checked = true;
} else if (userPrefersLight) {
  document.documentElement.classList.remove("dark-mode");
  darkModeToggle.checked = false;
}

// Listen for changes in the user's color scheme preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (e.matches) {
      document.documentElement.classList.add("dark-mode");
      darkModeToggle.checked = true;
    } else {
      document.documentElement.classList.remove("dark-mode");
      darkModeToggle.checked = false;
    }
  });

// Allow the user to manually toggle dark mode
darkModeToggle.addEventListener("change", () => {
  console.log("darkModeToggle.checked", darkModeToggle.checked);
  if (darkModeToggle.checked) {
    if (document.documentElement.classList.contains("light-mode")) {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.add("dark-mode");
    }
  } else {
    if (document.documentElement.classList.contains("dark-mode")) {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
    }
  }
});
