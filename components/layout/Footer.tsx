import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-lavender/60 border-t border-black/5 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-ink mb-3">
            Py<span className="text-sage">-</span>Crafters
          </h3>
          <p className="text-sm text-ink-light leading-relaxed max-w-xs">
            A team of engineers crafting Python-powered products for ambitious
            companies.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-ink-light">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li><Link href="/about" className="hover:text-ink">About</Link></li>
            <li><Link href="/our-team" className="hover:text-ink">Our Team</Link></li>
            <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-ink mb-3">Reach us</h4>
          <ul className="space-y-2 text-sm text-ink-light">
            <li>hello@pycrafters.dev</li>
            <li>+91 00000 00000</li>
            <li>Bengaluru, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <p className="max-w-6xl mx-auto px-6 py-4 text-xs text-ink-light">
          © {new Date().getFullYear()} Py-Crafters. All rights reserved.
        </p>
      </div>
    </footer>
  );
}