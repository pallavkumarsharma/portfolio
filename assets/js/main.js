/* ═══════════════════════════════════════
   PALLAV KUMAR SHARMA — Shared Scripts
   ═══════════════════════════════════════ */

// ── Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── Set active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-center a, .mobile-menu a[data-page]').forEach(link => {
  if (link.dataset.page === currentPage) link.classList.add('active');
});

// ── Blog modal (used on blog.html)
function openModal(id) {
  if (!window.blogPosts || !window.blogPosts[id]) return;
  const post = window.blogPosts[id];
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-label">${post.label}</div>
    <div class="modal-title">${post.title}</div>
    <div class="modal-date">${post.date}</div>
    <div class="modal-body">${post.body}</div>
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModalDirect() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

// ── Contact form (Formspree)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const success = document.getElementById('formSuccess');
    const error = document.getElementById('formError');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    const formData = new FormData(contactForm);
    const action = contactForm.getAttribute('action');

    // If Formspree ID is set, submit to Formspree
    if (action && action.includes('formspree')) {
      try {
        const res = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          success.style.display = 'block';
          if (error) error.style.display = 'none';
          btn.style.display = 'none';
          contactForm.reset();
        } else {
          throw new Error('Network error');
        }
      } catch {
        if (error) error.style.display = 'block';
        btn.textContent = 'Send Message';
        btn.disabled = false;
      }
    } else {
      // Demo mode (no Formspree ID set yet)
      setTimeout(() => {
        success.style.display = 'block';
        btn.style.display = 'none';
        contactForm.reset();
      }, 1000);
    }
  });
}
