// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle
  const toggleButton = document.getElementById('darkModeToggle');
  if (toggleButton) {
    // Initialize button icon based on saved mode (optional)
    if (document.body.classList.contains('dark')) {
      toggleButton.textContent = '☀️';
    } else {
      toggleButton.textContent = '🌙';
    }

    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');

      // Change button icon based on mode
      if (document.body.classList.contains('dark')) {
        toggleButton.textContent = '☀️'; // Sun for light mode
      } else {
        toggleButton.textContent = '🌙'; // Moon for dark mode
      }

      // Little shake animation for button
      toggleButton.classList.add('clicked');
      setTimeout(() => {
        toggleButton.classList.remove('clicked');
      }, 300);
    });
  }

 
});


  // Pop In Animation for Cards on Load
  window.addEventListener('load', () => {
    document.querySelectorAll('.card').forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1'; // Ensures the card stays visible after the animation
      }, index * 200); // Stagger the animation
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
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Confetti on button click and redirect
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

  // Particles.js initialization
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
          type: 'circle',
        },
        move: {
          speed: 3
        }
      }
    });
  }

  // 3D Tilt Effect on Cards
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
ScrollReveal().reveal('.logic-lab-card', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 300,
  reset: false
});

});
