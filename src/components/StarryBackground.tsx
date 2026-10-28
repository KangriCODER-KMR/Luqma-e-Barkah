import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  maxLife: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Stars
    const starCount = Math.floor((width * height) / 3200);
    const stars: Star[] = [];
    const starColors = [
      'rgba(255, 255, 255,',
      'rgba(247, 223, 165,', // warm gold
      'rgba(225, 185, 65,',  // rich saffron gold
      'rgba(215, 235, 255,', // subtle starlight blue
    ];

    for (let i = 0; i < starCount; i++) {
      const isGold = Math.random() > 0.55;
      const color = isGold
        ? starColors[Math.floor(Math.random() * 2) + 1]
        : starColors[Math.random() > 0.8 ? 3 : 0];

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() < 0.8 ? Math.random() * 1.2 + 0.4 : Math.random() * 2.0 + 1.2,
        baseAlpha: Math.random() * 0.6 + 0.35,
        alpha: Math.random(),
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        color,
      });
    }

    // Interactive mouse trail particles
    const particles: Particle[] = [];
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let isMouseMoving = false;
    let mouseMoveTimeout: any;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      isMouseMoving = true;
      clearTimeout(mouseMoveTimeout);
      mouseMoveTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 150);

      // Spawn stardust particles on mouse move
      if (Math.random() > 0.3) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.5,
          radius: Math.random() * 1.8 + 0.6,
          life: 0,
          maxLife: Math.floor(Math.random() * 35 + 25),
          color: Math.random() > 0.5 ? '212, 175, 55' : '247, 223, 165',
        });
      }
    };

    // Shooting stars / meteors
    const meteors: Meteor[] = [];
    const spawnMeteor = () => {
      meteors.push({
        x: Math.random() * (width * 0.8),
        y: Math.random() * (height * 0.4),
        length: Math.random() * 120 + 80,
        speed: Math.random() * 7 + 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg
        opacity: 1,
        active: true,
      });
    };

    // Spawn meteors every 4-7 seconds
    let meteorTimer = setInterval(() => {
      if (Math.random() > 0.25) spawnMeteor();
    }, 4500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    const render = () => {
      // Lerp mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const offsetX = (mouseX - width / 2) * 0.02;
      const offsetY = (mouseY - height / 2) * 0.02;

      ctx.clearRect(0, 0, width, height);

      // Draw faint celestial nebula gradient around cursor
      if (isMouseMoving) {
        const radGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
        radGrad.addColorStop(0, 'rgba(212, 175, 55, 0.045)');
        radGrad.addColorStop(0.5, 'rgba(180, 120, 30, 0.02)');
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.38;
        const clampedAlpha = Math.max(0.12, Math.min(1, currentAlpha));

        // Parallax position
        const px = (star.x + offsetX * star.radius + width) % width;
        const py = (star.y + offsetY * star.radius + height) % height;

        // Proximity flare when mouse passes near star
        const dx = mouseX - px;
        const dy = mouseY - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let bonusAlpha = 0;
        let bonusRadius = 0;
        if (dist < 140) {
          const prox = 1 - dist / 140;
          bonusAlpha = prox * 0.5;
          bonusRadius = prox * 1.2;
        }

        ctx.beginPath();
        ctx.arc(px, py, star.radius + bonusRadius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color} ${Math.min(1, clampedAlpha + bonusAlpha)})`;
        ctx.fill();

        // Extra halo for large stars
        if (star.radius > 1.3 && clampedAlpha > 0.55) {
          ctx.beginPath();
          ctx.arc(px, py, (star.radius + bonusRadius) * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${(clampedAlpha + bonusAlpha) * 0.22})`;
          ctx.fill();
        }
      }

      // Draw and update mouse trail particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const pAlpha = 1 - p.life / p.maxLife;
        if (pAlpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * pAlpha, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${pAlpha * 0.8})`;
        ctx.fill();
      }

      // Draw and update meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, 'rgba(212, 175, 55, 0)');
        grad.addColorStop(0.7, `rgba(247, 223, 165, ${m.opacity * 0.6})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${m.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Advance
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= 0.015;

        if (m.opacity <= 0 || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearInterval(meteorTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90 mix-blend-screen"
      style={{ willChange: 'transform' }}
    />
  );
};
