// Main JavaScript for AgenticMinds - Enhanced with Dynamic Features

// ── SCROLL REVEAL ANIMATIONS ──
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach((el) => {
  revealObserver.observe(el);
});

// ── SMOOTH SCROLL BEHAVIOR ──
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// ── INTERSECTION OBSERVER FOR ANIMATIONS ──
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, observerOptions);

  // Observe all cards and feature items
  document.querySelectorAll('.card, .feature-card, .course-card, .team-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ── FORM VALIDATION ──
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#e74c3c';
      isValid = false;
    } else {
      input.style.borderColor = '';
    }
  });

  return isValid;
}

// ── BUTTON CLICK TRACKING ──
function addButtonClickTracking() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function() {
      console.log('Button clicked:', this.textContent);
      // Add analytics or tracking here
    });
  });
}

// ── ENHANCED FORM SUBMISSION ──
function setupFormSubmission() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (this.id === 'contactForm' || !this.id) {
        e.preventDefault();
        if (validateForm(this.id || 'contactForm')) {
          // Form is valid, you can submit here
          console.log('Form submitted successfully');
          // Show success message
          const btn = this.querySelector('button[type="submit"]');
          if (btn) {
            const originalText = btn.textContent;
            btn.textContent = '✓ Message sent!';
            btn.style.background = 'var(--primary-blue)';
            setTimeout(() => {
              btn.textContent = originalText;
              btn.style.background = '';
              this.reset();
            }, 3000);
          }
        }
      }
    });
  });
}

// ── LAZY LOADING IMAGES ──
function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ── NAVBAR SCROLL EFFECT ──
function setupNavbarScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.backdropFilter = 'blur(10px)';
      nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
      nav.style.backdropFilter = 'blur(0px)';
      nav.style.backgroundColor = 'var(--white)';
    }
  });
}

// ── COUNTER ANIMATION ──
function animateCounters() {
  const counters = document.querySelectorAll('.stat-item h3');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current) + counter.textContent.replace(/[0-9]/g, '');
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = counter.textContent;
          }
        };

        updateCounter();
        counterObserver.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

// ── ACTIVE NAV LINK HIGHLIGHT ──
function setupActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('nav ul a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// ── INITIALIZE ON PAGE LOAD ──
document.addEventListener('DOMContentLoaded', function() {
  addButtonClickTracking();
  setupFormSubmission();
  setupLazyLoading();
  setupNavbarScroll();
  animateCounters();
  setupActiveNavHighlight();
});

// ── PERFORMANCE OPTIMIZATION ──
// Throttle scroll events
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Scroll-related actions here
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

