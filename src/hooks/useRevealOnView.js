import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function useRevealOnView(scopeRef, selector = ".reveal") {
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const elements = gsap.utils.toArray(selector, scopeRef.current);
      gsap.set(elements, { y: 40, autoAlpha: 0 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry, index) => {
              gsap.to(entry.target, {
                y: 0,
                autoAlpha: 1,
                duration: 0.7,
                delay: index * 0.12,
                ease: "power3.out",
                clearProps: "transform",
              });
              observer.unobserve(entry.target);
            });
        },
        { threshold: 0.15 }
      );

      elements.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    },
    { scope: scopeRef }
  );
}
