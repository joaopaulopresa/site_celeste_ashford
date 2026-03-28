/* ===== Intersection Observer — Fade-in ===== */
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
})();

/* ===== Navbar scroll ===== */
(function () {
  const nav = document.querySelector('.site-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
})();

/* ===== Mobile nav toggle ===== */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
    });
  });
})();

/* ===== ARC Form submit ===== */
(function () {
  const form = document.getElementById('arc-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          form.style.display = 'none';
          document.getElementById('arc-success').style.display = 'block';
        }
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
      });
  });
})();

/* ===== Newsletter Form submit ===== */
(function () {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          form.style.display = 'none';
          document.getElementById('newsletter-success').style.display = 'block';
        }
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
      });
  });
})();
