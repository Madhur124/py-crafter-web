'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

const facts = [
  { k: '12', label: 'people on the team' },
  { k: '40+', label: 'projects shipped since 2019' },
  { k: '7 yrs', label: 'average experience' },
  { k: '2', label: 'new projects per quarter' },
];

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo('.reveal', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out' });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="py-24 bg-ink-deep-2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* left copy */}
          <div className="lg:col-span-5">
            <p className="reveal text-xs uppercase tracking-[0.18em] text-amber-glow mb-4">
              Who we are
            </p>
            <h2 className="reveal text-3xl md:text-4xl font-semibold text-fg leading-tight mb-6">
              A quiet studio that ships loud work.
            </h2>
            <p className="reveal text-fg-muted leading-relaxed">
              We started in 2019 with three engineers and a shared dislike for
              software built carelessly. We still work the same way: small team,
              long attention spans, and code we would be happy to inherit.
            </p>
          </div>

          {/* right — inline facts, no cards */}
          <div className="lg:col-span-7 lg:pl-12">
            <ul className="divide-y divide-white/8">
              {facts.map((f) => (
                <li key={f.label} className="reveal flex items-baseline justify-between py-5 group">
                  <span className="text-2xl md:text-3xl font-semibold text-fg tabular-nums">
                    <span className="bg-gradient-to-r from-amber-glow to-rose-glow bg-clip-text text-transparent">
                      {f.k}
                    </span>
                  </span>
                  <span className="text-sm text-fg-muted group-hover:text-fg transition-colors">
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}