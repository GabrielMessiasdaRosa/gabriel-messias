import Container from "@/components/container";
import HeroSection from "@/components/hero-section";
import TimelineSection from "@/components/timeline-section";

export default function Home() {
  return (
    <main className="h-[2000px] ">
      <HeroSection />
      <Container>
        <TimelineSection />
      </Container>
    </main>
  );
}
