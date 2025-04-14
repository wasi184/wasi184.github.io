const texts = ["Web Developer", "Student", "Freelancer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // Pause before next word
  } else {
    setTimeout(type, 100);
  }
})();

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector("footer").classList.toggle("dark-mode");
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => card.classList.toggle("dark-mode"));

  // Change button text based on mode
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "🌞";
  } else {
    darkModeToggle.textContent = "🌙";
  }
});

