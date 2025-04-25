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
  e.preventDefault();

  const duration = 1 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      // now redirect
      window.location.href = "resources.html";
      return;
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
  }, 250);
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

// 3D Tilt Effect on .card elements
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth, offsetHeight } = target;
    const rotateX = ((offsetY / offsetHeight) - 0.5) * 20;
    const rotateY = ((offsetX / offsetWidth) - 0.5) * -20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});

