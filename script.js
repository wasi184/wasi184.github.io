document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");

  // Load dark mode state from localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }

  // Toggle dark mode and store preference
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggleButton.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleButton.classList.add("clicked");
    setTimeout(() => toggleButton.classList.remove("clicked"), 300);
  });

  // Reveal cards on scroll
  const revealElements = document.querySelectorAll(".card, .section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach((el) => observer.observe(el));

  // Smooth scrolling for nav links
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Confetti redirect logic
  const confettiButton = document.getElementById("confettiButton");
  if (confettiButton) {
    confettiButton.addEventListener("click", (e) => {
      e.preventDefault();
     confetti({
  particleCount: 120,
  spread: 180,
  origin: { y: 0.6 },
  zIndex: 1000
});

setTimeout(() => {
  window.location.href = "resources.html";
}, 1000);

    });
  }

  // Particles.js initialization
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        shape: { type: "circle" },
        move: { speed: 3 },
      },
    });
  }

  // 3D tilt effect on card hover
  document.querySelectorAll(".card").forEach((card) => {
    card.style.transformStyle = "preserve-3d";
    card.style.transition = "transform 0.2s ease";

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });

  // Optional: ScrollReveal if available
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".logic-lab-card", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      delay: 300,
      reset: false,
    });
  }
});
