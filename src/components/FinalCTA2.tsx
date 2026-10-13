'use client';

import { useRef, useEffect, useState } from 'react';

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Canvas particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    window.addEventListener('resize', resize);

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; color: string; life: number };
    const particles: Particle[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * 1400, y: Math.random() * 700,
      vx: (Math.random() - 0.5) * 0.6, vy: -Math.random() * 0.8 - 0.2,
      r: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.5 ? '#E8192C' : '#00D4C8',
      life: Math.random(),
    }));

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      // Central red bloom
      const rg = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.6);
      rg.addColorStop(0, 'rgba(232,25,44,0.08)'); rg.addColorStop(1, 'transparent');
      ctx.fillStyle = rg; ctx.fillRect(0, 0, w, h);
      // Subtle grid
      ctx.strokeStyle = 'rgba(255,255,255,0.018)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 80) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
      for (let y = 0; y < h; y += 80) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
      // Particles
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy; p.life += 0.004;
        if (p.y < -10 || p.life > 1) { p.y = h + 10; p.x = Math.random() * w; p.life = 0; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(Math.sin(p.life * Math.PI) * 200).toString(16).padStart(2, '0');
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section
      ref={ref}
      id="cta"
      style={{ background: 'var(--ax-black)', position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />

      {/* Scan line */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(232,25,44,0.4), transparent)', animation: 'scanLine 6s linear infinite' }} />
      </div>

      {/* Large corner brackets */}
      <div style={{ position: 'absolute', top: 40, left: 40, width: 60, height: 60, borderTop: '1px solid rgba(232,25,44,0.4)', borderLeft: '1px solid rgba(232,25,44,0.4)', zIndex: 5 }} />
      <div style={{ position: 'absolute', bottom: 40, right: 40, width: 60, height: 60, borderBottom: '1px solid rgba(0,212,200,0.4)', borderRight: '1px solid rgba(0,212,200,0.4)', zIndex: 5 }} />

      {/* Section marker */}
      <div className="panel-padding-20-60 layout-wrap" style={{ position: 'absolute', top: 0, left: 0, right: 0, borderBottom: '1px solid var(--ax-border)',  display: 'flex', alignItems: 'center', gap: 20, zIndex: 10 }}>
        <span className="ax-micro-label" style={{ color: 'var(--ax-red)' }}>§ 08</span>
        <div style={{ width: 1, height: 16, background: 'var(--ax-border2)' }} />
        <span className="ax-micro-label">START NOW</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--ax-border2), transparent)', marginLeft: 8 }} />
      </div>

      {/* Left vertical label */}
      <div style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, zIndex: 10 }}>
        <div style={{ width: 1, height: 80, background: 'var(--ax-border)' }} />
        <span className="ax-vert-label">Axiom 2024</span>
        <div style={{ width: 1, height: 80, background: 'var(--ax-border)' }} />
      </div>

      {/* Main content — bottom-left anchored */}
      <div className="panel-padding-160-60-100" style={{ position: 'relative', zIndex: 10,  display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

        {/* Pre-line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ax-aqua)', boxShadow: '0 0 12px var(--ax-aqua)' }} />
          <span style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ax-aqua)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>Ready when you are</span>
        </div>

        {/* Massive headline */}
        <h2 className="ax-font-display" style={{
          fontSize: 'clamp(32px, 12vw, 180px)',
          fontWeight: 800,
          lineHeight: 0.85,
          letterSpacing: '-0.05em',
          color: 'var(--ax-white)',
          margin: '0 0 40px',
          maxWidth: '90vw',
          opacity: vis ? 1 : 0,
          transform: vis ? 'translateY(0)' : 'translateY(60px)',
          transition: 'opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1)',
        }}>
          BUILD<br />
          THE <span style={{ color: 'var(--ax-red)' }}>FUTURE</span><br />
          <span style={{ WebkitTextStroke: '3px var(--ax-white)', color: 'transparent' }}>TODAY.</span>
        </h2>

        {/* Supporting copy */}
        <p style={{
          fontSize: 18,
          lineHeight: 1.7,
          color: 'var(--ax-white2)',
          maxWidth: 500,
          marginBottom: 48,
          fontWeight: 400,
          opacity: vis ? 1 : 0,
          transition: 'opacity 0.8s ease 0.3s',
        }}>
          Join 4,200+ teams who stopped settling for fragmented tools. One platform. Total control. Zero compromises.
        </p>

        {/* CTA group */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56, opacity: vis ? 1 : 0, transition: 'opacity 0.8s ease 0.5s' }}>
          <a href="/pricing" className="ax-btn-primary" style={{ fontSize: 15, padding: '16px 40px' }}>
            Start Building Free →
          </a>
          <a href="#features" className="ax-btn-ghost" style={{ fontSize: 15, padding: '16px 40px' }}>
            Schedule a Demo
          </a>
        </div>

        {/* Trust signals */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap', paddingTop: 32, borderTop: '1px solid var(--ax-border)', opacity: vis ? 1 : 0, transition: 'opacity 0.8s ease 0.7s', width: '100%', maxWidth: 700 }}>
          {[
            { icon: '◈', label: 'No credit card' },
            { icon: '◈', label: '14-day free trial' },
            { icon: '◈', label: 'SOC 2 Certified' },
            { icon: '◈', label: 'GDPR Compliant' },
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--ax-aqua)', fontSize: 12 }}>{t.icon}</span>
              <span style={{ fontSize: 12, color: 'var(--ax-white2)', fontWeight: 500 }}>{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom right version info */}
      <div style={{ position: 'absolute', bottom: 40, right: 60, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, zIndex: 10 }}>
        <span className="ax-micro-label">AXIOM PLATFORM</span>
        <span className="ax-micro-label">v2.4.1 — PROD</span>
      </div>

      {/* Horizontal rule at bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, var(--ax-red) 30%, var(--ax-aqua) 70%, transparent)' }} />
    </section>
  );
}
