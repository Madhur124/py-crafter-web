'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/our-team', label: 'Our Team' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, { scope: navRef });

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 backdrop-blur-md bg-cream/80 border-b border-black/5"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-ink">
          Py<span className="text-sage">-</span>Crafters
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active ? 'text-sage' : 'text-ink-light hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-sage text-white text-sm font-medium hover:bg-sage/90 transition"
        >
          Get in touch
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-0.5 bg-ink transition-transform ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-opacity ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-ink transition-transform ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-cream/95">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === link.href ? 'text-sage' : 'text-ink-light'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}