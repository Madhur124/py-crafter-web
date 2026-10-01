'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

const steps = [
  {
    n: '01',
    title: 'We talk first',
    text: 'A short call. No pitch deck. We ask what you actually need — and tell you honestly whether we can help.',
  },
  {
    n: '02',
    title: 'A written plan',
    text: 'Scope, timeline, cost, and the three things most likely to change. You keep it whether or not you hire us.',
  },
  {
    n: '03',
    title: 'Build in the open',
    text: 'You see progress every week. No black boxes, no status-deck theatre — just working software and honest updates.',
  },
  {
    n: '04',
    title: 'Hand it over clean',
    text: 'Documented, tested, and yours. We stay around for a while afterwards, then quietly step back.',
  },
];

export default function HowWeWork() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo('.step', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.12, ease: 'power2.out' });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="py-24 bg-ink-deep">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="step text-xs uppercase tracking-[0.18em] text-cyan-glow mb-4">
            How we work
          </p>
          <h2 className="step text-3xl md:text-4xl font-semibold text-fg leading-tight">
            Four steps. No ceremony.
          </h2>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
          {steps.map((s) => (
            <li key={s.n} className="step relative">
              <span className="block text-xs font-mono text-amber-glow/70 mb-4">
                {s.n}
              </span>
              <h3 className="text-lg font-semibold text-fg mb-3">{s.title}</h3>
              <p className="text-sm text-fg-muted leading-relaxed">{s.text}</p>
              {/* faint connector line on desktop */}
              <span className="hidden lg:block absolute -top-2 left-0 w-8 h-px bg-white/15" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}