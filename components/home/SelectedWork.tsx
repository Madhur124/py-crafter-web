'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

const work = [
  {
    client: 'Nimbus Analytics',
    year: '2024',
    title: 'Rebuilt a slow data pipeline',
    note: 'Processing time cut from 4 hours to under 8 minutes.',
    tags: ['Python', 'Airflow', 'Postgres'],
  },
  {
    client: 'Loom Labs',
    year: '2024',
    title: 'Shipped a customer portal',
    note: 'Replaced three spreadsheets and a Zapier chain.',
    tags: ['Next.js', 'FastAPI'],
  },
  {
    client: 'Kite Systems',
    year: '2023',
    title: 'Embedded with their platform team',
    note: 'Six months of pairing, code review, and quiet cleanup.',
    tags: ['Python', 'Kubernetes'],
  },
];

export default function SelectedWork() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo('.work-row', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="py-24 bg-ink-deep-2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="work-row text-xs uppercase tracking-[0.18em] text-mint-glow mb-4">
              Selected work
            </p>
            <h2 className="work-row text-3xl md:text-4xl font-semibold text-fg leading-tight max-w-xl">
              A few projects we are proud of.
            </h2>
          </div>
          <Link
            href="/contact"
            className="work-row text-sm text-fg-muted hover:text-fg transition inline-flex items-center gap-1.5"
          >
            Ask about our work
            <span>→</span>
          </Link>
        </div>

        <ul className="divide-y divide-white/8 border-y border-white/8">
          {work.map((w) => (
            <li key={w.title} className="work-row group py-7 grid md:grid-cols-12 gap-4 md:gap-6 items-baseline">
              <div className="md:col-span-2 text-xs font-mono text-fg-muted/70">
                {w.year}
              </div>
              <div className="md:col-span-3">
                <p className="text-sm text-amber-glow/90">{w.client}</p>
              </div>
              <div className="md:col-span-5">
                <h3 className="text-lg font-medium text-fg group-hover:text-amber-glow transition-colors">
                  {w.title}
                </h3>
                <p className="text-sm text-fg-muted mt-1">{w.note}</p>
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-1.5 md:justify-end">
                {w.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-white/10 text-fg-muted">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}