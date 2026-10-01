'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

export default function AboutIntro() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.about-reveal',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
    );
  }, { scope: ref });

  return (
    <section ref={ref} className="pt-24 pb-16 bg-gradient-to-b from-lavender/50 to-cream">
      <div className="max-w-6xl mx-auto px-6">
        <p className="about-reveal text-sm font-medium tracking-widest uppercase text-sage mb-3">
          About us
        </p>
        <h1 className="about-reveal text-4xl md:text-5xl font-bold text-ink leading-tight mb-8 max-w-3xl">
          A small studio with a sharp focus on Python and product thinking.
        </h1>

        <div className="about-reveal grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 text-ink-light leading-relaxed space-y-4">
            <p>
              Py-Crafters started in 2019 with three engineers and a shared
              frustration: too much software is built without care. We wanted
              to change that — one thoughtful project at a time.
            </p>
            <p>
              Today we are a team of twelve, working with startups and product
              teams across India and abroad. We specialise in Python, data
              engineering, and full-stack web apps.
            </p>
          </div>

          <div className="md:col-span-2 bg-white/60 rounded-3xl p-7 border border-black/5">
            <h3 className="text-lg font-semibold text-ink mb-3">Our values</h3>
            <ul className="space-y-3 text-sm text-ink-light">
              <li className="flex gap-3">
                <span className="text-sage font-bold">01</span>
                Write code we would be happy to maintain.
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-bold">02</span>
                Say no to work we can not do well.
              </li>
              <li className="flex gap-3">
                <span className="text-sage font-bold">03</span>
                Ship early, iterate honestly.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}