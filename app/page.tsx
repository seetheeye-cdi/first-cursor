import { HeroSection } from '../components/hero-section';
import { ProblemSection } from '../components/problem-section';
import { SolutionSection } from '../components/solution-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
    </main>
  );
}