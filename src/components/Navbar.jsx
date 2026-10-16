import { ScrollTrigger } from "gsap/ScrollTrigger";

const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
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

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-center">
      <div className="flex h-14 w-full max-w-xl items-center justify-center gap-4 rounded-full border-2 border-[var(--faded-text-color)]/30 bg-[var(--bg-color)]/30 text-lg text-[var(--faded-text-color)] shadow-sm backdrop-blur-xs transition-all duration-300 hover:scale-[1.02]">
        {navItems.map((item) => (
          <button
            key={item.target}
            type="button"
            onClick={() => handleNavigation(item.target)}
            className="cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}