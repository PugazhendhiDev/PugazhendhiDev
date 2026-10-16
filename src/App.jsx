import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const container = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".reveal-stage",
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.fromTo(
        ".reveal-line",
        { scaleY: 0 },
        { scaleY: 1, duration: 0.2, ease: "none" }
      );

      timeline.to(
        ".home-left",
        {
          xPercent: -100,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "split"
      );

      timeline.to(
        ".home-right",
        {
          xPercent: 100,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "split"
      );

      timeline.to(
        ".reveal-line",
        { opacity: 0, duration: 0.1 },
        "split+=0.3"
      );
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <Navbar />

      <section className="reveal-stage relative h-dvh w-full">
        <div className="sticky top-0 h-dvh w-full overflow-hidden">
          <div className="absolute inset-0 z-10 h-full w-full overflow-y-auto bg-[var(--common-bg-color)]">
            <About />
          </div>

          <div className="home-left pointer-events-none absolute inset-y-0 left-0 z-20 h-full w-1/2 overflow-hidden">
            <div className="absolute inset-y-0 left-0 h-full w-[200%]">
              <Home />
            </div>
          </div>

          <div className="home-right pointer-events-none absolute inset-y-0 right-0 z-20 h-full w-1/2 overflow-hidden">
            <div className="absolute inset-y-0 right-0 h-full w-[200%]">
              <Home />
            </div>
          </div>

          <div className="reveal-line pointer-events-none absolute inset-y-0 left-1/2 z-30 w-px -translate-x-1/2 origin-center bg-[var(--text-color)] shadow-[0_0_12px_var(--text-color)]" />
        </div>
      </section>

      <main className="relative">
        <Projects className="sticky top-0 z-20" />
      </main>
    </div>
  );
}