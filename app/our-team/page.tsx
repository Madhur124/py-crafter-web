import TeamCard, { type Member } from '@/components/team/TeamCard';

export const metadata = { title: 'Our Team | Py-Crafters' };

const team: Member[] = [
  { name: 'Aarav Rao', role: 'Founder & Lead Engineer', img: '/images/team/aarav.jpg', accent: 'mint' },
  { name: 'Priya Menon', role: 'Head of Product', img: '/images/team/priya.jpg', accent: 'peach' },
  { name: 'Rohan Iyer', role: 'Senior Backend Engineer', img: '/images/team/rohan.jpg', accent: 'sky' },
  { name: 'Ananya Sharma', role: 'Data Engineer', img: '/images/team/ananya.jpg', accent: 'lavender' },
  { name: 'Kabir Nair', role: 'Frontend Engineer', img: '/images/team/kabir.jpg', accent: 'mint' },
  { name: 'Meera Pillai', role: 'UX Designer', img: '/images/team/meera.jpg', accent: 'peach' },
];

export default function TeamPage() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-peach/40 to-cream">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-sage mb-3">
          Our team
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 max-w-2xl leading-tight">
          The people behind the code.
        </h1>
        <p className="text-ink-light mb-16 max-w-xl">
          Small team, deep focus. Everyone here writes, reviews, and ships.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <TeamCard key={m.name} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}