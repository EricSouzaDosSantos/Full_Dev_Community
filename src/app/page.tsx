import AnimatedBackground from "@/components/Animate/BgAnimate";
import { CarouselSlides } from "@/components/Animate/CarouselSlides";
import { Contact } from "@/components/Sections_LP/Contact";
import { Copyright } from "@/components/Sections_LP/Copyright";
import { Differences } from "@/components/Sections_LP/Differences";
import { Header } from "@/components/Sections_LP/Header";
import { Hero } from "@/components/Sections_LP/Hero";

export default function Home(): JSX.Element {
  return (
    <main className="relative h-screen w-full">
      <AnimatedBackground />
      <div className="absolute inset-0 flex flex-col z-10">
        <Header />
        <div>
          <Hero />
          <Differences />
          <CarouselSlides />
          <Contact />
          <Copyright />
      </div>
      </div>
    </main>
  );
}
