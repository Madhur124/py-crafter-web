'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

export type Member = {
  name: string;
  role: string;
  img: string;
  accent: 'mint' | 'peach' | 'sky' | 'lavender';
};

const accentMap: Record<Member['accent'], string> = {
  mint: 'bg-mint',
  peach: 'bg-peach',
  sky: 'bg-sky',
  lavender: 'bg-lavender',
};

export default function TeamCard({ member, index }: { member: Member; index: number }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, delay: index * 0.08, ease: 'power2.out' }
    );
  }, { scope: ref });

  return (
    <article ref={ref} className="overflow-hidden rounded-2xl border border-black/5 bg-white/75">
      <div className={`relative aspect-[4/3] ${accentMap[member.accent]}`}>
        <Image
          src={member.img}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-ink">{member.name}</h2>
        <p className="mt-1 text-sm text-ink-light">{member.role}</p>
      </div>
    </article>
  );
}