import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const assetUrls = Object.values(
  import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,gif,svg}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

const FONTS = ["1em Impact", "1em Inter"];
const MAX_WAIT_MS = 12000;

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = resolve;
    img.src = src;
  });

const loadFont = (font) => document.fonts.load(font).catch(() => {});

const pageLoaded = () =>
  document.readyState === "complete"
    ? Promise.resolve()
    : new Promise((resolve) =>
        window.addEventListener("load", resolve, { once: true })
      );

export default function Loader({ onDone }) {
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const numberRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useGSAP(
    () => {
      const tasks = [
        ...assetUrls.map(loadImage),
        ...FONTS.map(loadFont),
        pageLoaded(),
      ];
      const total = tasks.length;
      const shown = { value: 0 };
      let done = 0;
      let cancelled = false;
      let exited = false;

      const render = () => {
        numberRef.current.textContent = Math.round(shown.value);
        barRef.current.style.transform = `scaleX(${shown.value / 100})`;
      };

      const exit = () => {
        if (exited || cancelled) return;
        exited = true;
        gsap
          .timeline({ onComplete: onDone })
          .to(contentRef.current, {
            autoAlpha: 0,
            y: -20,
            duration: 0.4,
            delay: 0.2,
            ease: "power2.in",
          })
          .to(rootRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
          });
      };

      const update = (target) =>
        gsap.to(shown, {
          value: target,
          duration: 0.5,
          ease: "power1.out",
          overwrite: true,
          onUpdate: render,
          onComplete: () => target === 100 && exit(),
        });

      tasks.forEach((task) =>
        task.then(() => {
          if (cancelled) return;
          done += 1;
          update(Math.round((done / total) * 100));
        })
      );

      const timeout = setTimeout(() => !cancelled && update(100), MAX_WAIT_MS);

      return () => {
        cancelled = true;
        clearTimeout(timeout);
      };
    },
    { scope: rootRef }
  );

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--common-bg-color)]"
    >
      <div ref={contentRef} className="flex flex-col items-center gap-6">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--common-text-color)]/60">
          Loading
        </span>

        <h1 className="flex items-baseline gap-1 text-7xl leading-none gradient-text-light sm:text-9xl">
          <span ref={numberRef} className="tabular-nums">0</span>
          <span className="text-3xl sm:text-5xl">%</span>
        </h1>

        <div className="h-[2px] w-48 overflow-hidden bg-white/15 sm:w-72">
          <div
            ref={barRef}
            className="h-full w-full origin-left bg-[var(--text-color)]"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}
