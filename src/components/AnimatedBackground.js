import { useEffect, useRef } from 'react';
import pageStyles from '../styles/Terminal.module.css';

/*
 * AnimatedBackground
 * -------------------
 * A full-viewport <canvas>, fixed behind all page content (pointer-events: none,
 * z-index: -1). It draws a faint accent-coloured dot grid plus a slow radial
 * pulse expanding from the centre of the viewport, capped at 30fps.
 *
 * Tune the two opacities here in one place:
 */
const GRID_OPACITY = 0.08; // dot-grid alpha — spec range 0.06–0.10 (halved on mobile)
const PULSE_OPACITY = 0.18; // pulse stroke alpha — spec range 0.04–0.07

// Other tunables.
const ACCENT_RGB = '94, 234, 212'; // #5eead4
const GRID_SPACING = 45; // px between dots
const DOT_RADIUS = 1.2; // px (<= 2)
const FPS = 60; // capped frame rate
const PULSE_PERIOD = 4000; // ms for a pulse to expand from 0 → max
const PULSE_MAX_FACTOR = 0.6; // fraction of the viewport diagonal
const MOBILE_QUERY = '(max-width: 640px)';
const RESIZE_DEBOUNCE = 150; // ms

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Offscreen canvas holding the static dot grid (rebuilt only on resize).
    const gridCanvas = document.createElement('canvas');
    const gridCtx = gridCanvas.getContext('2d');

    let width = 0;
    let height = 0;
    let dpr = 1;
    let centerX = 0;
    let centerY = 0;
    let maxRadius = 0;
    let isMobile = false;

    function buildGrid() {
      gridCanvas.width = Math.max(1, Math.floor(width * dpr));
      gridCanvas.height = Math.max(1, Math.floor(height * dpr));
      gridCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gridCtx.clearRect(0, 0, width, height);
      // Mobile: halve the dot opacity.
      const opacity = isMobile ? GRID_OPACITY / 2 : GRID_OPACITY;
      gridCtx.fillStyle = `rgba(${ACCENT_RGB}, ${opacity})`;
      // Centre the grid so the margins look balanced.
      const offsetX = (width % GRID_SPACING) / 2;
      const offsetY = (height % GRID_SPACING) / 2;
      for (let x = offsetX; x <= width; x += GRID_SPACING) {
        for (let y = offsetY; y <= height; y += GRID_SPACING) {
          gridCtx.beginPath();
          gridCtx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
          gridCtx.fill();
        }
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2); // cap dpr to limit CPU
      isMobile = window.matchMedia(MOBILE_QUERY).matches;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      centerX = width / 2;
      centerY = height / 2;
      maxRadius = Math.hypot(width, height) * PULSE_MAX_FACTOR;

      buildGrid();
    }

    resize();

    const frameInterval = 1000 / FPS;
    const start = performance.now();
    let lastDraw = 0;
    let rafId = 0;

    function draw(now) {
      rafId = requestAnimationFrame(draw);
      // Cap the frame rate.
      if (now - lastDraw < frameInterval) return;
      lastDraw = now;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(gridCanvas, 0, 0, width, height);

      // Mobile or reduced-motion: dot grid only, no pulse.
      if (isMobile || reduceMotion) return;

      const elapsed = now - start;
      // Two pulses offset by half a period so one or two rings are always visible.
      for (let i = 0; i < 2; i += 1) {
        const phase = ((elapsed / PULSE_PERIOD) + i * 0.5) % 1;
        const radius = phase * maxRadius;
        // Fade out as it expands so the loop resets seamlessly.
        const alpha = PULSE_OPACITY * (1 - phase);
        if (radius <= 0 || alpha <= 0.001) continue;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    rafId = requestAnimationFrame(draw);

    // Debounced resize listener.
    let resizeTimer = 0;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, RESIZE_DEBOUNCE);
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      {/*
        The page wrapper paints an opaque #0e0e0e background, which would hide a
        z-index:-1 canvas. Making it transparent lets the canvas show through while
        <body> provides the identical #0e0e0e, so contrast/appearance are unchanged.
      */}
      <style jsx global>{`
        .${pageStyles.page} {
          background-color: transparent !important;
        }
      `}</style>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
    </>
  );
}
