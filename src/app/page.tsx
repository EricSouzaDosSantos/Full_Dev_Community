import AnimatedBackground from "@/components/Animate/BgAnimate";
import { Header } from "@/components/Sections_LP/Header";
import { Hero } from "@/components/Sections_LP/Hero";

export default function Home(): JSX.Element {
  return (
    <main className="relative h-screen w-full">
      <AnimatedBackground />
      <div className="absolute inset-0 flex flex-col z-10">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
