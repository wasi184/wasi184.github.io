// Dark mode toggle
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.classList.add('clicked');

  // Little shake animation for button
  setTimeout(() => {
    toggleButton.classList.remove('clicked');
  }, 300);
});

// Pop In Animation for Cards on Load
window.addEventListener('load', () => {
  document.querySelectorAll('.card').forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1'; // Ensures the card stays visible after the animation
    }, index * 200); // Stagger the animation for each card
  });
});


// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.card, .section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el) => {
  observer.observe(el);
});

// Smooth Section Scrolling
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

const confettiButton = document.getElementById('confettiButton');
confettiButton.addEventListener('click', (e) => {
  e.preventDefault(); // stop immediate navigation
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Redirect after short delay so confetti can finish
  setTimeout(() => {
    window.location.href = "resources.html";
  }, 800); // You can increase this if the confetti is still too fast
});

// Particles.js initialization
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    shape: {
      type: 'circle',
    },
    move: {
      speed: 3
    }
  }
});
