import Container from "@/components/atom/container";
import HeroSection from "@/components/organisms/hero-section";
import TimelineSection from "@/components/organisms/timeline-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Container>
        {/* 
        <OLDTimelineSection /> */}
        <TimelineSection />
      </Container>
    </main>
  );
}
