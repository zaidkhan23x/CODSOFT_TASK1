// ============================================
// Footer year
// ============================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// Header background on scroll + scroll progress dot
// ============================================
const header = document.getElementById('header');
const orbitDot = document.getElementById('orbitDot');

function onScroll(){
  header.classList.toggle('scrolled', window.scrollY > 20);
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
  orbitDot.style.top = `${progress * 100}%`;
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ============================================
// Mobile nav toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================
// Active nav link on scroll (scrollspy)
// ============================================
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(section => spyObserver.observe(section));

// ============================================
// Animate skill bars when they enter the viewport
// ============================================
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('filled');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ============================================
// Generic reveal-on-scroll for cards/sections
// ============================================
const revealTargets = document.querySelectorAll(
  '.project-card, .about-card, .about-copy, .contact-form, .contact-side'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('in');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));

// ============================================
// Contact form (front-end only demo)
// ============================================
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Thanks! Your message has been noted — I\'ll get back to you soon.';
  contactForm.reset();
});

// ============================================
// CV download placeholder (no file attached yet)
// ============================================
// document.getElementById('cvBtn').addEventListener('click', (e) => {
//   e.preventDefault();
//   alert('Add your CV file and update the link on the "Download my CV" button in index.html.');
// });
