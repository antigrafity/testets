// ===========================
// BACKGROUND PARTICLES - Dronixsys
// Lightweight floating particle network on <canvas>
// ===========================

(function () {
  const canvas = document.getElementById('bgParticles');
  if (!canvas) return;

  // Respect user's reduced-motion preference
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let particles = [];
  let animationId = null;
  let running = true;

  const COLOR = '0, 217, 255';        // brand cyan (rgb)
  const LINK_DISTANCE = 140;          // px distance to draw a connecting line
  const MAX_PARTICLES = 90;           // hard cap for performance

  // Density based on viewport area
  function particleCount() {
    const area = width * height;
    const count = Math.round(area / 18000);
    return Math.max(28, Math.min(MAX_PARTICLES, count));
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: rand(-0.35, 0.35),
      vy: rand(-0.35, 0.35),
      r: rand(1, 2.6),
      alpha: rand(0.25, 0.7)
    };
  }

  function initParticles() {
    particles = [];
    const n = particleCount();
    for (let i = 0; i < n; i++) {
      particles.push(createParticle());
    }
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
  }

  function step() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    // Move + draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -20) p.x = width + 20;
      else if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      else if (p.y > height + 20) p.y = -20;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + COLOR + ',' + p.alpha + ')';
      ctx.fill();
    }

    // Draw links between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DISTANCE) {
          const opacity = (1 - dist / LINK_DISTANCE) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = 'rgba(' + COLOR + ',' + opacity + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(step);
  }

  function start() {
    if (animationId) cancelAnimationFrame(animationId);
    running = true;
    step();
  }

  function stop() {
    running = false;
    if (animationId) cancelAnimationFrame(animationId);
    animationId = null;
  }

  // Pause when tab is hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 200);
  });

  resize();
  start();
})();
