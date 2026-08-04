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
