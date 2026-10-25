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

const ANGLE = -45;
const ROWS = 22;
const COLS = 12;
const FONT_FAMILY = "Impact, 'Arial Black', sans-serif";

const SHIMMER_MASK =
  "linear-gradient(110deg, transparent 42%, #000 50%, transparent 58%)";

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

function Pattern() {
  return (
    <div
      className="absolute left-1/2 top-1/2 flex size-[150vmax] flex-col justify-center"
      style={{
        transform: `translate(-50%, -50%) rotate(${ANGLE}deg)`,
        fontFamily: FONT_FAMILY,
        fontSize: "3vmax",
      }}
    >
      {Array.from({ length: ROWS }, (_, row) => (
        <div
          key={row}
          className="flex shrink-0 whitespace-nowrap leading-none"
          style={{
            marginBottom: "1.4em",
            transform: row % 2 ? "translateX(-2.45em)" : undefined,
          }}
        >
          {Array.from({ length: COLS }, (_, col) => (
            <span key={col} style={{ marginRight: "1.5em" }}>
              Pugazhendhi
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Loader({ onDone, onReady }) {
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const numberRef = useRef(null);
  const barRef = useRef(null);
  const fillRef = useRef(null);
  const shimmerRef = useRef(null);
  const watermarkRef = useRef(null);

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
        document.fonts.ready.catch(() => {}),
        pageLoaded(),
      ];
      const total = tasks.length;
      const shown = { value: 0 };
      const sweep = { p: 100 };
      let done = 0;
      let cancelled = false;
      let exited = false;

      const render = () => {
        const v = shown.value;
        numberRef.current.textContent = Math.round(v);
        barRef.current.style.transform = `scaleX(${v / 100})`;
        fillRef.current.style.clipPath =
          v >= 99.9
            ? "none"
            : `inset(-0.2em ${100 - v}% -0.2em -0.1em)`;
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
            onStart: () => onReady?.(),
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

      render();

      Promise.race([
        loadFont(FONTS[0]),
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]).then(() => {
        if (cancelled) return;
        gsap.to([watermarkRef.current, contentRef.current], {
          autoAlpha: 1,
          duration: 0.5,
        });
      });

      gsap.to(sweep, {
        p: 0,
        duration: 2.4,
        repeat: -1,
        repeatDelay: 0.2,
        ease: "none",
        onUpdate: () => {
          const position = `${sweep.p}% 0%`;
          shimmerRef.current.style.maskPosition = position;
          shimmerRef.current.style.webkitMaskPosition = position;
        },
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
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--common-bg-color)]"
    >
      <div
        ref={watermarkRef}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        <div className="absolute inset-0 text-white/[0.06]">
          <Pattern />
        </div>
        <div
          ref={shimmerRef}
          className="absolute inset-0 text-white/[0.3]"
          style={{
            maskImage: SHIMMER_MASK,
            WebkitMaskImage: SHIMMER_MASK,
            maskSize: "300% 100%",
            WebkitMaskSize: "300% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "100% 0%",
            WebkitMaskPosition: "100% 0%",
          }}
        >
          <Pattern />
        </div>
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex w-full flex-col items-center gap-6 px-4"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        <div
          role="img"
          aria-label="Pugazhendhi"
          className="relative whitespace-nowrap leading-none"
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: "min(18vw, 15rem)",
          }}
        >
          <span
            className="block text-transparent"
            style={{
              WebkitTextStroke: "max(1.5px, 0.012em) rgba(255, 255, 255, 0.6)",
            }}
          >
            Pugazhendhi
          </span>
          <span
            ref={fillRef}
            aria-hidden="true"
            className="absolute inset-0 block text-white"
            style={{ clipPath: "inset(-0.2em 100% -0.2em -0.1em)" }}
          >
            Pugazhendhi
          </span>
        </div>

        <h1 className="flex items-baseline gap-1 text-5xl leading-none text-white sm:text-7xl">
          <span ref={numberRef} className="tabular-nums">0</span>
          <span className="text-2xl sm:text-4xl">%</span>
        </h1>

        <div className="h-[2px] w-48 overflow-hidden bg-white/15 sm:w-72">
          <div
            ref={barRef}
            className="h-full w-full origin-left bg-white"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}