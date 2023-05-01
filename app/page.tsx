import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sn:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <Projects />
    </main>
  );
}
