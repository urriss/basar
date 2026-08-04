const langToggle = document.getElementById('langToggle');
const toast = document.getElementById('toast');
let toastTimer = null;

langToggle.addEventListener('click', () => {
  const spans = langToggle.querySelectorAll('span');
  spans.forEach((s) => s.classList.toggle('active'));

  const isNowActive = langToggle.querySelector('[data-lang="en"]').classList.contains('active');
  showToast(isNowActive ? 'English support is coming soon' : 'Íslenska er sjálfgefið tungumál');
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
}

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const trailsExpandBtn = document.getElementById('trailsExpandBtn');
const trailGroups = document.getElementById('trailGroups');

trailsExpandBtn.addEventListener('click', () => {
  const isOpen = trailGroups.classList.toggle('open');
  trailsExpandBtn.setAttribute('aria-expanded', String(isOpen));
  trailsExpandBtn.querySelector('span').textContent = isOpen ? 'Fela gönguleiðir' : 'Sjá allar gönguleiðir';
});

const nav = document.querySelector('.nav');
const MOBILE_BREAKPOINT = 860;
const SCROLL_THRESHOLD = 10;
const TOP_OFFSET = 80;
let lastScrollY = window.scrollY;
let scrollTicking = false;

function handleScroll() {
  const currentY = window.scrollY;

  if (window.innerWidth > MOBILE_BREAKPOINT || currentY < TOP_OFFSET || navLinks.classList.contains('open')) {
    nav.classList.remove('nav-hidden');
  } else if (currentY > lastScrollY + SCROLL_THRESHOLD) {
    nav.classList.add('nav-hidden');
  } else if (currentY < lastScrollY - SCROLL_THRESHOLD) {
    nav.classList.remove('nav-hidden');
  }

  lastScrollY = currentY;
  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(handleScroll);
    scrollTicking = true;
  }
}, { passive: true });
