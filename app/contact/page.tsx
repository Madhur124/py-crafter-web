import ContactForm from '@/components/contact/ContactForm';

export const metadata = { title: 'Contact | Py-Crafters' };

export default function ContactPage() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-mint/50 to-cream min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-sage mb-3">
          Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">
          Tell us about your project.
        </h1>
        <p className="text-ink-light mb-12 max-w-xl">
          Fill the form below and we will get back within one business day.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}