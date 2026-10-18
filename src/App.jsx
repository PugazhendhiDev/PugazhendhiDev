import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const container = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutStarted = useRef(false);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".reveal-stage",
          start: "top top",
          end: () => `+=${window.innerHeight * 1.5}`,
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

      timeline.eventCallback("onUpdate", () => {
        if (!aboutStarted.current && timeline.progress() >= 0.85) {
          aboutStarted.current = true;
          setAboutVisible(true);
        }
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <Navbar />

      <section className="reveal-stage relative min-h-dvh w-full">
        <div className="relative min-h-dvh w-full overflow-hidden">
          <div className="relative z-10 w-full bg-[var(--common-bg-color)]">
            <About isVisible={aboutVisible} />
          </div>

          <div className="home-left pointer-events-none absolute left-0 top-0 z-20 h-dvh w-1/2 overflow-hidden">
            <div className="absolute inset-y-0 left-0 h-full w-[200%]">
              <Home />
            </div>
          </div>

          <div className="home-right pointer-events-none absolute right-0 top-0 z-20 h-dvh w-1/2 overflow-hidden">
            <div className="absolute inset-y-0 right-0 h-full w-[200%]">
              <Home />
            </div>
          </div>

          <div className="reveal-line pointer-events-none absolute left-1/2 top-0 z-30 h-dvh w-px -translate-x-1/2 origin-center bg-[var(--text-color)] shadow-[0_0_12px_var(--text-color)]" />
        </div>
      </section>

      <main className="relative">
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}