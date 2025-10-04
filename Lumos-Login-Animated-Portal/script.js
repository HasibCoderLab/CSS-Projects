const toggleButton = document.getElementById("toggle-theme");

// Dark & Light Theme Toggle
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    // Change button icon based on the theme
    if (document.body.classList.contains("light-theme")) {
        toggleButton.textContent = "🌞"; // Sun icon for light mode
    } else {
        toggleButton.textContent = "🌙"; // Moon icon for dark mode
    }
});
