  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let rx = 0, ry = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    if(cursor) {
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
    }
  });

  // Ring follows with lag
  function animateRing() {
    rx += (cx - rx) * .12;
    ry += (cy - ry) * .12;
    if(ring) {
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
    }
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Cursor grows on hover
  document.querySelectorAll('button, a, .p-card, .feat-product').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if(cursor) {
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.background = 'var(--glow2)';
      }
      if(ring) {
        ring.style.width = '60px';
        ring.style.height = '60px';
      }
    });
    el.addEventListener('mouseleave', () => {
      if(cursor) {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        cursor.style.background = 'var(--glow1)';
      }
      if(ring) {
        ring.style.width = '36px';
        ring.style.height = '36px';
      }
    });
  });

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
