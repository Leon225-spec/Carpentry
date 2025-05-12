// script.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile menu toggle & icon swap
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('site-nav');

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    btn.innerHTML = isOpen
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // 2. Gallery filtering
  const filters = document.querySelectorAll('.filter-controls button');
  const items   = document.querySelectorAll('.gallery-item');

  filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
      // Update active state on buttons
      filters.forEach(b => b.classList.remove('active'));
      filterBtn.classList.add('active');

      // Show/hide gallery items
      const category = filterBtn.getAttribute('data-filter');
      items.forEach(item => {
        const matches = category === 'all' || item.dataset.category === category;
        item.style.display = matches ? 'block' : 'none';
      });
    });
  });

  // 3. Simple testimonials carousel
  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  if (testimonials.length > 0) {
    showTestimonial(currentIndex);
    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }, 5000);
  }
});
// SERVICE SELECTOR FILTER
const selectorBtns = document.querySelectorAll('.service-selector .nav-btn');
const cards = document.querySelectorAll('.roof-card');

selectorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // If Home btn, let the link run
    if (!btn.hasAttribute('data-filter')) return;

    // Toggle active styles
    selectorBtns.forEach(b => {
      b.classList.toggle('solid', b === btn);
      b.classList.toggle('ghost', b !== btn);
    });

    const filter = btn.getAttribute('data-filter');
    cards.forEach(card => {
      const cat = card.dataset.category;
      card.style.display =
        filter === 'all' || cat === filter
          ? 'flex' 
          : 'none';
    });
  });
});
// script.js additions (inside DOMContentLoaded listener)

// 4. Details toggle per card
document.querySelectorAll('.roof-card').forEach(card => {
  const btn = card.querySelector('.details-btn');
  const details = card.querySelector('.card-details');

  btn.addEventListener('click', () => {
    const isOpen = card.classList.toggle('open');
    btn.textContent = isOpen ? 'Hide Details' : 'Details';
  });
});
// Details overlay toggle
document.querySelectorAll('.roof-card').forEach(card => {
  const detailsBtn = card.querySelector('.details-btn');
  const closeBtn   = card.querySelector('.close-btn');

  detailsBtn.addEventListener('click', () => {
    card.classList.add('open');
  });
  closeBtn.addEventListener('click', () => {
    card.classList.remove('open');
  });
});
