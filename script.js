// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // === DARK MODE TOGGLE ===
  const toggleButton = document.getElementById('darkModeToggle');
  if (toggleButton) {
    // Set initial icon based on mode
    toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';

    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
      toggleButton.classList.add('clicked');
      setTimeout(() => toggleButton.classList.remove('clicked'), 300);
    });
  }

  // === CARD POP-IN ANIMATION ON LOAD ===
  window.addEventListener('load', () => {
    document.querySelectorAll('.card').forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
      }, index * 200);
    });
  });

  // === SCROLL REVEAL ANIMATION ===
  const revealElements = document.querySelectorAll('.card, .section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));

  // === SMOOTH SCROLLING FOR NAV LINKS ===
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // === CONFETTI BUTTON LOGIC ===
  const confettiButton = document.getElementById('confettiButton');
  if (confettiButton) {
    confettiButton.addEventListener('click', (e) => {
      e.preventDefault();

      const duration = 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          clearInterval(interval);
          window.location.href = "resources.html";
          return;
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: { x: Math.random(), y: Math.random() - 0.2 }
        }));
      }, 250);
    });
  }

  // === PARTICLES.JS INIT ===
  if (document.getElementById('particles-js')) {
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
          type: 'circle'
        },
        move: {
          speed: 3
        }
      }
    });
  }

  // === 3D TILT ON CARD HOVER ===
  document.querySelectorAll('.card').forEach(card => {
    card.style.transformStyle = "preserve-3d";
    card.style.transition = "transform 0.2s ease";

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });

  // === OPTIONAL: SCROLLREVEAL (Only if ScrollReveal.js is included) ===
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.logic-lab-card', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 300,
      reset: false
    });
  }
});
