// Typing animation
const typingText = document.querySelector(".typing");
const words = ["Web Developer", "Designer", "Problem Solver", "CSE Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = words[wordIndex];
  const visibleText = current.substring(0, charIndex);
  typingText.textContent = visibleText;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(type, 1000);
  }
}

type();

// Dark mode toggle
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Header shrinking on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
