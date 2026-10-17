import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TechStack from "../components/TechStack";

gsap.registerPlugin(useGSAP);

export default function About({ className = "", isVisible = false }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const techRef = useRef(null);

  const renderLetters = (text, lineKey) =>
    Array.from(text).map((character, index) => (
      <span key={`${lineKey}-${index}`} className="about-letter-clip">
        <span className="about-letter">
          {character === " " ? "\u00A0" : character}
        </span>
      </span>
    ));

  useGSAP(
    () => {
      const letters = gsap.utils.toArray(".about-letter", headingRef.current);
      const paragraph = paragraphRef.current;
      const sections = gsap.utils.toArray(".tech-section", techRef.current);

      gsap.set(letters, { y: "110%", autoAlpha: 0 });
      gsap.set(paragraph, { y: 15, autoAlpha: 0 });
      sections.forEach((section) => {
        gsap.set(section.querySelector(".tech-heading"), { y: 20, autoAlpha: 0 });
        gsap.set(section.querySelectorAll(".tech-badge"), {
          y: 20,
          scale: 0.85,
          autoAlpha: 0,
        });
      });

      if (!isVisible) return;

      const timeline = gsap.timeline();

      timeline.to(letters, {
        y: "0%",
        autoAlpha: 1,
        duration: 0.65,
        stagger: 0.035,
        ease: "power3.out",
      });

      timeline.to(
        paragraph,
        { y: 0, autoAlpha: 1, duration: 0.9, ease: "power2.out" },
        "-=0.3"
      );

      sections.forEach((section, i) => {
        timeline.to(
          section.querySelector(".tech-heading"),
          { y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" },
          i === 0 ? "-=0.4" : ">-0.2"
        );
        timeline.to(
          section.querySelectorAll(".tech-badge"),
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
            clearProps: "transform",
          },
          "<0.15"
        );
      });

      return () => timeline.kill();
    },
    { scope: sectionRef, dependencies: [isVisible], revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative about-content content-center py-20! min-h-dvh w-full border-t-2 border-t-[var(--faded-text-color)]/30 bg-[var(--common-bg-color)] ${className}`}
    >
      <h1
        ref={headingRef}
        className="max-w-4xl text-center text-4xl leading-tight gradient-text-light sm:text-5xl md:text-7xl"
      >
        <span className="about-heading-line">
          {renderLetters("Curious by nature.", "line1")}
        </span>
        <br />
        <span className="about-heading-line">
          {renderLetters("Developer by choice.", "line2")}
        </span>
      </h1>

      <p
        ref={paragraphRef}
        className="max-w-2xl text-center text-base leading-8 text-[var(--common-text-color)] sm:text-lg"
      >
        A curious developer passionate about software engineering, AI, and
        system architecture. I love exploring how technology works behind the
        scenes, building practical projects, and constantly learning new ways
        to solve problems. For me, curiosity is the starting point of every
        great idea.
      </p>

      <div ref={techRef} className="w-full max-w-2xl">
        <TechStack />
      </div>
    </section>
  );
}