
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const revealStage = document.querySelector(".reveal-stage");

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 10) {
        setActiveSection("home");
        return;
      }

      const about = document.getElementById("about");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      const revealTrigger = revealStage
        ? ScrollTrigger.getAll().find(
          (trigger) => trigger.trigger === revealStage
        )
        : null;

      const aboutStart = revealTrigger
        ? revealTrigger.end
        : about?.offsetTop ?? 0;

      if (scrollPosition < aboutStart) {
        setActiveSection("home");
      } else if (
        contact &&
        scrollPosition >= contact.offsetTop - window.innerHeight / 2
      ) {
        setActiveSection("contact");
      } else if (
        projects &&
        scrollPosition >= projects.offsetTop - window.innerHeight / 2
      ) {
        setActiveSection("projects");
      } else {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    requestAnimationFrame(updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavigation = (target) => {
    if (target === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    if (target === "about") {
      const revealStage = document.querySelector(".reveal-stage");

      if (revealStage) {
        const trigger = ScrollTrigger.getAll().find(
          (item) => item.trigger === revealStage
        );

        const targetPosition = trigger
          ? trigger.end
          : revealStage.offsetTop + window.innerHeight * 1.5;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }

      return;
    }

    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const textColor =
    activeSection === "home"
      ? "var(--faded-text-color)"
      : "var(--common-text-color)";

  return (
    <nav
      className="fixed top-0 z-50 flex h-20 w-full items-center justify-center"
      style={{
        paddingLeft: "16px",
        paddingRight: "16px",
        boxSizing: "border-box",
      }}
    >
      <div
        className={`flex h-14 items-center justify-center gap-4 rounded-full border-2 border-[${textColor}]/30 bg-[var(--bg-color)]/30 text-lg shadow-sm backdrop-blur-xs transition-transform duration-300 hover:scale-105 active:scale-95`}
        style={{
          color: textColor,
          width: "100%",
          maxWidth: "576px",
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.target}
            type="button"
            onClick={() => handleNavigation(item.target)}
            className="cursor-pointer whitespace-nowrap text-sm transition-transform duration-300 hover:scale-105 active:scale-95 sm:text-base"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
