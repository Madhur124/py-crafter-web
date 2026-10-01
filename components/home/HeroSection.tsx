'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

const HEADLINE = ['We', 'build', 'software', 'with', 'care.'];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [greeting, setGreeting] = useState('Hello');

  // live greeting based on local time — small, human touch
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting('Good morning');
      else if (hour < 18) setGreeting('Good afternoon');
      else setGreeting('Good evening');
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-eyebrow', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo('.hero-word', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.06 }, '-=0.25')
        .fromTo('.hero-sub', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, '-=0.35')
        .fromTo('.hero-cta', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08 }, '-=0.3')
        .fromTo('.hero-portrait', { y: 24, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.9 }, '-=0.7')
        .fromTo('.hero-foot', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.5');

      gsap.to('.glow-a', { xPercent: 5, yPercent: -3, duration: 16, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.glow-b', { xPercent: -4, yPercent: 4, duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    },
    { scope: containerRef }
  );

  // gentle portrait parallax
  useEffect(() => {
    const el = containerRef.current;
    const p = portraitRef.current;
    if (!el || !p) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(p, { x: x * 8, y: y * 6, duration: 0.8, ease: 'power2.out', overwrite: 'auto' });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-ink-deep text-fg">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep via-ink-deep-2 to-ink-deep" />
        <div className="glow-a absolute -top-40 -left-32 w-[40rem] h-[40rem] rounded-full bg-amber-glow/8 blur-[130px]" />
        <div className="glow-b absolute -bottom-48 -right-32 w-[44rem] h-[44rem] rounded-full bg-cyan-glow/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 78%)',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7">
            <div className="hero-eyebrow inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-mint-glow opacity-75 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-mint-glow" />
              </span>
              <span className="text-xs font-medium tracking-wide text-fg-muted">
                {greeting} — we are taking on two new projects this quarter
              </span>
            </div>

            <h1 className="text-[2.7rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-tight mb-7">
              {HEADLINE.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <span className="hero-word inline-block mr-[0.28em]">
                    {i === HEADLINE.length - 1 ? (
                      <span className="relative italic font-serif bg-gradient-to-r from-amber-glow via-rose-glow to-cyan-glow bg-clip-text text-transparent">
                        {w}
                      </span>
                    ) : (
                      w
                    )}
                  </span>
                </span>
              ))}
            </h1>

            <p className="hero-sub text-base sm:text-lg text-fg-muted max-w-xl mb-10 leading-relaxed">
              We are a small team of twelve engineers in Bengaluru. We take on a
              handful of projects a year and give each one our full attention —
              no juggling, no handoffs, no surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/contact"
                className="hero-cta group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-fg text-ink-deep text-sm font-semibold hover:bg-fg/90 transition"
              >
                Tell us about your project
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/our-team"
                className="hero-cta inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/12 bg-white/[0.03] text-fg text-sm font-medium hover:bg-white/[0.07] transition"
              >
                Meet the people
              </Link>
            </div>
          </div>

          {/* RIGHT — portrait + human details */}
          <div className="lg:col-span-5">
            <div ref={portraitRef} className="hero-portrait relative will-change-transform">
              {/* aura */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-amber-glow/12 via-transparent to-cyan-glow/15 blur-3xl" />

              {/* portrait frame */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-ink-deep-3 aspect-[4/5]">
                <Image
                  src="/images/team/aarav.jpg"
                  alt="Aarav Rao, founder of Py-Crafters"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                {/* subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-transparent to-transparent" />

                {/* name caption inside the image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-amber-glow/90 mb-1.5">
                    Founded 2019
                  </p>
                  <p className="text-lg font-semibold text-fg">Aarav Rao</p>
                  <p className="text-sm text-fg-muted">
                    Founder — still reviews every PR
                  </p>
                </div>
              </div>

              {/* small floating note */}
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-ink-deep-3/90 border border-white/10 backdrop-blur-md shadow-xl">
                <span className="text-lg leading-none">✍️</span>
                <div className="leading-tight">
                  <p className="text-xs text-fg-muted">We reply personally</p>
                  <p className="text-xs font-medium text-fg">Usually within a day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom human strip */}
        <div className="hero-foot mt-20 pt-8 border-t border-white/8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-fg-muted">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-mint-glow" />
            Bengaluru, India
          </span>
          <span>·</span>
          <span>Working with teams in 6 countries</span>
          <span>·</span>
          <span>Python, TypeScript, and whatever fits</span>
        </div>
      </div>
    </section>
  );
}