'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo('.cta-reveal', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out' });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="py-28 bg-ink-deep-2 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-amber-glow/6 blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="cta-reveal text-xs uppercase tracking-[0.18em] text-amber-glow mb-4">
          Lets talk
        </p>
        <h2 className="cta-reveal text-3xl md:text-5xl font-semibold text-fg leading-tight mb-6">
          If this sounds like the kind of team you want,{' '}
          <span className="italic font-serif bg-gradient-to-r from-amber-glow to-rose-glow bg-clip-text text-transparent">
            say hello.
          </span>
        </h2>
        <p className="cta-reveal text-fg-muted mb-10 max-w-xl mx-auto leading-relaxed">
          Tell us a bit about what you are working on. We read every message
          ourselves — usually reply within a day, always with something useful.
        </p>
        <div className="cta-reveal flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-fg text-ink-deep text-sm font-semibold hover:bg-fg/90 transition"
          >
            Start a conversation
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <span className="text-xs text-fg-muted">or email us at hello@pycrafters.dev</span>
        </div>
      </div>
    </section>
  );
}