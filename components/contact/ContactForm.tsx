'use client';

import { useActionState, useRef } from 'react';
import { useEffect } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-setup';
import { submitContact, type ContactState } from '@/app/contact/actions';

const initialState: ContactState | null = null;

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const wrapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.field',
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
    );
  }, { scope: wrapRef });

  useEffect(() => {
    if (state?.success) {
      gsap.fromTo(
        '.success-msg',
        { scale: 0.96, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [state]);

  if (state?.success) {
    return (
      <div className="success-msg bg-white/70 rounded-3xl p-10 border border-black/5 text-center">
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-mint flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7BA893" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-ink mb-2">Message sent</h3>
        <p className="text-ink-light text-sm">
          Thanks for reaching out. We will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <div ref={wrapRef}>
      <form action={formAction} className="space-y-6">
        <div className="field grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
              Full name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition"
              placeholder="jane@company.com"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">
            Company <span className="text-ink-light font-normal">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition"
            placeholder="Acme Inc."
          />
        </div>

        <div className="field">
          <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
            Project details *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/80 focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition resize-none"
            placeholder="What are you building? What's the timeline?"
          />
        </div>

        {state?.error && (
          <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full md:w-auto px-8 py-3 rounded-full bg-ink text-white text-sm font-medium hover:bg-ink/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </div>
  );
}