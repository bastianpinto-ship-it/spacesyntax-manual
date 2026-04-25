// ── Sidebar accordion ──
document.querySelectorAll('.toc-chapter').forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.closest('.toc-section');
    section.classList.toggle('open');
  });
});

// Auto-open active section
document.querySelectorAll('.toc-item.active').forEach(item => {
  item.closest('.toc-section')?.classList.add('open');
});

// ── Mobile sidebar toggle ──
const toggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
if (toggle) {
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && e.target !== toggle) {
      sidebar.classList.remove('open');
    }
  });
}

// ── Reading progress bar ──
const bar = document.getElementById('progress-bar');
if (bar) {
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop;
    const total = doc.scrollHeight - doc.clientHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
  });
}

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Active TOC link on scroll ──
const sections = document.querySelectorAll('[data-section]');
const tocLinks = document.querySelectorAll('.toc-item');

if (sections.length && tocLinks.length) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('data-section');
        tocLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.toc-item[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => sectionObserver.observe(s));
}
