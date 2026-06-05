  // Parallax tilt on cards
  document.querySelectorAll('.p-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top)  / r.height - .5;
      card.style.transform = `translateY(-16px) scale(1.02) rotateY(${x*10}deg) rotateX(${-y*8}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // Cart logic
  const updateCartUI = () => {
    const count = parseInt(localStorage.getItem('aura_cart_count') || '0');
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
    });
  };

  document.querySelectorAll('.add-to-cart-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // prevent other link clicks if nested
      let count = parseInt(localStorage.getItem('aura_cart_count') || '0');
      count++;
      localStorage.setItem('aura_cart_count', count);
      updateCartUI();

      // Visual feedback
      const originalText = btn.textContent;
      const originalBg = btn.style.background;
      btn.textContent = 'Added';
      btn.style.background = 'var(--glow1)';
      btn.style.color = 'white';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = originalBg;
        btn.style.color = '';
      }, 1500);
    });
  });

  // Initialize cart on page load
  updateCartUI();
