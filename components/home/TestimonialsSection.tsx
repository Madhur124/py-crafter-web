'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo('.t-item', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out' });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="py-24 bg-ink-deep">
      <div className="max-w-6xl mx-auto px-6">
        <p className="t-item text-xs uppercase tracking-[0.18em] text-rose-glow mb-4">
          In their words
        </p>
        <h2 className="t-item text-3xl md:text-4xl font-semibold text-fg mb-16 max-w-xl leading-tight">
          What it is like to work with us.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* featured */}
          <figure className="t-item md:col-span-2 bg-white/[0.04] rounded-3xl p-8 md:p-10 border border-white/10">
            <blockquote className="text-xl md:text-2xl text-fg leading-relaxed mb-8 font-light">
              “We would been burned by two agencies before. Py-Crafters was the
              first team that told us what they <em className="not-italic text-amber-glow">would not</em> do.
              Six weeks later the pipeline was live and we finally understood
              our own data.”
            </blockquote>
            <figcaption className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                <Image src="/images/team/priya.jpg" alt="Aarav Rao" fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-fg">Aarav Rao</p>
                <p className="text-xs text-fg-muted">CTO, Nimbus Analytics</p>
              </div>
            </figcaption>
          </figure>

          <figure className="t-item bg-white/[0.04] rounded-3xl p-7 border border-white/10">
            <blockquote className="text-base text-fg leading-relaxed mb-6 font-light">
              “They wrote documentation our interns could follow. That alone
              was worth the fee.”
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                <Image src="/images/team/priya.jpg" alt="Priya Menon" fill sizes="40px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-fg">Priya Menon</p>
                <p className="text-xs text-fg-muted">Founder, Loom Labs</p>
              </div>
            </figcaption>
          </figure>

          <figure className="t-item md:col-start-2 md:col-span-2 bg-white/[0.04] rounded-3xl p-7 border border-white/10">
            <blockquote className="text-base text-fg leading-relaxed mb-6 font-light">
              “They embedded with our team for six months. On the last day, it
              felt like losing a colleague, not ending a contract.”
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                <Image src="/images/team/rohan.jpg" alt="Rohan Iyer" fill sizes="40px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-fg">Rohan Iyer</p>
                <p className="text-xs text-fg-muted">VP Eng, Kite Systems</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}