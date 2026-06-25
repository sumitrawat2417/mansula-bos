/* ════════════════════════════════════════════════════
   MANSULA NEXUS — Page-Specific Interactions
   (shared.js handles nav, footer, mobile menu, fade-up)
   ════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ─── SMOOTH SCROLL for anchor links on same page ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── HOME PAGE — Chart Bar Animation ──────────────
  function animateBars(selector, delay = 50) {
    document.querySelectorAll(selector).forEach((bar, i) => {
      const h = bar.style.height;
      bar.style.height = '0';
      bar.style.transition = `height .55s cubic-bezier(.4,0,.2,1) ${i * delay}ms`;
      setTimeout(() => { bar.style.height = h; }, 80);
    });
  }
  function animateFill(selector, delay = 120) {
    document.querySelectorAll(selector).forEach((fill, i) => {
      const w = fill.style.width;
      fill.style.width = '0';
      fill.style.transition = `width .7s cubic-bezier(.4,0,.2,1) ${i * delay}ms`;
      setTimeout(() => { fill.style.width = w; }, 100);
    });
  }

  // Hero chart bars
  const hcb = document.querySelector('.hcb');
  if (hcb) {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { animateBars('.hcb'); obs.disconnect(); }
    }, { threshold: 0.4 });
    obs.observe(hcb);
  }

  // Analytics chart bars + fill bars
  const amcb = document.querySelector('.amcb');
  if (amcb) {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        animateBars('.amcb', 70);
        animateFill('.am-fill', 130);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(amcb);
  }

  // Roadmap card cursor glow
  document.querySelectorAll('.rm-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.background = `radial-gradient(circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(99,102,241,.08), transparent 55%), var(--bg-dark-2, #0B1220)`;
    });
    card.addEventListener('mouseleave', () => { card.style.background = ''; });
  });

  // Active nav section highlight (home page)
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  if (sections.length && navLinks.length) {
    const secObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          navLinks.forEach(l => l.classList.remove('nav-active'));
          const active = document.querySelector(`.nav-links a[href="index.html#${id}"], .nav-links a[href="#${id}"]`);
          if (active) active.classList.add('nav-active');
        }
      });
    }, { threshold: 0.42 });
    sections.forEach(s => secObs.observe(s));
  }

  // ─── FLOATING HERO PARTICLES ──────────────────────
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    const anims = ['fa', 'fb', 'fc'];
    for (let i = 0; i < 10; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 2.5 + 1.2;
      p.style.cssText = `
        position:absolute;pointer-events:none;z-index:1;
        width:${size}px;height:${size}px;border-radius:50%;
        background:rgba(255,255,255,${Math.random() * .08 + .03});
        top:${Math.random() * 70 + 10}%;left:${Math.random() * 90 + 5}%;
        animation:${anims[i % 3]} ${Math.random() * 5 + 9}s ease-in-out infinite ${Math.random() * 4}s;
      `;
      heroEl.appendChild(p);
    }
  }

  // ─── LEGAL PAGE — ACTIVE TOC LINK ─────────────────
  const legalSections = document.querySelectorAll('.legal-section[id]');
  const tocLinks = document.querySelectorAll('.toc-list a');
  if (legalSections.length && tocLinks.length) {
    const legalObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          tocLinks.forEach(l => { l.style.color = ''; l.style.fontWeight = ''; });
          const active = document.querySelector(`.toc-list a[href="#${e.target.id}"]`);
          if (active) {
            active.style.color = 'var(--primary)';
            active.style.fontWeight = '600';
          }
        }
      });
    }, { threshold: 0.4 });
    legalSections.forEach(s => legalObs.observe(s));
  }

  // ─── DEV CONSOLE BRANDING ─────────────────────────
  console.log(
    '%cManSula Nexus — Business Operating System',
    'font-size:15px;font-weight:900;background:linear-gradient(135deg,#6366F1,#8B5CF6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;'
  );
  console.log('%cOffline POS Software · Inventory Management · Billing Software · Business Analytics', 'font-size:11px;color:#6366F1;font-weight:600;');

});
