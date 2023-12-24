import Container from "@/components/atom/container";
import HeroSection from "@/components/organisms/hero-section";
import ProjectsSection from "@/components/organisms/projects-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Container>
        <ProjectsSection />
      </Container>
    </main>
  );
}
