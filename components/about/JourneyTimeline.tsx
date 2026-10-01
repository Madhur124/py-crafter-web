'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

const milestones = [
  { year: '2019', title: 'Founded in Bengaluru', text: 'Three engineers, one rented desk, and a first client who took a chance on us.' },
  { year: '2021', title: 'First product launch', text: 'Shipped an internal analytics platform that is still running today.' },
  { year: '2023', title: 'Crossed 40 projects', text: 'Grew to a team of ten and expanded into data engineering.' },
  { year: '2026', title: 'Where we are now', text: 'Twelve engineers, a calm process, and work we are proud to sign our name to.' },
];

export default function JourneyTimeline() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.journey-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power2.out' }
    );
  }, { scope: ref });

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <p className="journey-item text-sm font-medium tracking-widest uppercase text-sage mb-3">
          Our journey
        </p>
        <h2 className="journey-item text-3xl md:text-4xl font-bold text-ink mb-16">
          A few moments that shaped us.
        </h2>

        <div className="relative">
          {/* center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black/10" />

          <ul className="space-y-14">
            {milestones.map((m, i) => {
              const right = i % 2 === 1;
              return (
                <li
                  key={m.year}
                  className={`journey-item relative md:grid md:grid-cols-2 md:gap-12 ${
                    right ? '' : ''
                  }`}
                >
                  {/* dot */}
                  <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-sage ring-4 ring-cream" />

                  <div className={`pl-12 md:pl-0 ${right ? 'md:col-start-2' : 'md:text-right md:pr-12'}`}>
                    <p className="text-sm font-semibold text-sage mb-1">{m.year}</p>
                    <h3 className="text-lg font-semibold text-ink mb-2">{m.title}</h3>
                    <p className="text-sm text-ink-light leading-relaxed">{m.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}