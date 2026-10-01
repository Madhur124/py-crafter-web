import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import HowWeWork from '@/components/home/HowWeWork';
import SelectedWork from '@/components/home/SelectedWork';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

export default function HomePage() {
  return (
    <div className="bg-ink-deep text-fg">
      <HeroSection />
      <StatsSection />
      <HowWeWork />
      <SelectedWork />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}