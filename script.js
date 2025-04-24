document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const toggleButton = document.getElementById('darkModeToggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.classList.add('clicked');
    setTimeout(() => {
      toggleButton.classList.remove('clicked');
    }, 300);
  });

  // Pop In Animation for Cards on Load
  window.addEventListener('load', () => {
    document.querySelectorAll('.card').forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
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

  // Confetti Button
  const confettiButton = document.getElementById('confettiButton');
  confettiButton.addEventListener('click', (e) => {
    e.preventDefault();
    const duration = 1 * 1000;
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
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
    }, 250);
  });
});
