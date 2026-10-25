import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Pugazhendhi from "../assets/pugazhendhi.png";

gsap.registerPlugin(useGSAP);

const GLOW_WARM = "from-amber-200 to-yellow-300";
const GLOW_COOL = "from-teal-700 to-cyan-600";

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const MOTTLE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='900'><filter id='m'><feTurbulence type='fractalNoise' baseFrequency='0.011' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23m)'/></svg>\")";

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const scope = heroRef.current;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const orbit = { angle: 225 };
      const place = () => {
        const w = scope.clientWidth;
        const h = scope.clientHeight;
        const r = (orbit.angle * Math.PI) / 180;
        gsap.set(".orb-a", {
          x: Math.cos(r) * w * 0.45,
          y: Math.sin(r) * h * 0.45,
        });
        gsap.set(".orb-b", {
          x: -Math.cos(r) * w * 0.45,
          y: -Math.sin(r) * h * 0.45,
        });
      };
      place();

      if (!reduceMotion) {
        gsap.to(orbit, {
          angle: 225 + 360,
          duration: 40,
          repeat: -1,
          ease: "none",
          onUpdate: place,
        });
        gsap.to(".ring-spin", {
          rotation: 360,
          duration: 24,
          repeat: -1,
          ease: "none",
        });
      }

      gsap.from(".rings", {
        opacity: 0,
        scale: 0.85,
        duration: 1.6,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(".greeting", {
        y: -60,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      });

      gsap.from(".text-h1", {
        y: -200,
        opacity: 0,
        duration: 1,
      });

      gsap.to(".text-h1", {
        y: 0,
        duration: 1,
        onComplete: () => {
          scope.querySelector(".text-h1")?.classList.add("animate-float");
        },
      });

      gsap.from(".pugazh-image", {
        y: 200,
        opacity: 0,
        duration: 1,
      });

      gsap.to(".pugazh-image", { y: 0, duration: 1 });

      gsap.from(".text-p", {
        x: -100,
        opacity: 0,
        stagger: 0.5,
        delay: 1,
      });

      gsap.to(".text-p", {
        x: 0,
        onComplete: () => {
          scope.querySelector(".text-box")?.classList.add("animate-float");
        },
      });
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      style={{ "--fs": "min(18vw, 24dvh)", "--c": "max(42vmax, 24rem)" }}
      className="relative isolate flex h-dvh w-full flex-col overflow-hidden bg-gradient-to-b from-[#e8e3d8] via-[#d6d0c3] to-[#bdb5a5]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`orb-a size-[var(--c)] shrink-0 rounded-full bg-gradient-to-br ${GLOW_WARM} opacity-60 blur-[110px] will-change-transform`}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`orb-b size-[var(--c)] shrink-0 rounded-full bg-gradient-to-tl ${GLOW_COOL} opacity-40 blur-[110px] will-change-transform`}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_85%,rgba(255,250,240,0.6),transparent_60%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center pb-[10%]">
        <div className="rings relative size-[118vmin] shrink-0">
          <div className="absolute inset-0 rounded-full border border-stone-900/10" />
          <div className="absolute inset-[15%] rounded-full border border-stone-900/15" />
          <div className="absolute inset-[31%] rounded-full border border-stone-900/20" />
          <div className="ring-spin absolute inset-[15%]">
            <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500 shadow-[0_0_14px_3px_rgba(245,158,11,0.7)]" />
          </div>
        </div>
      </div>

      <div
        style={{ paddingTop: "clamp(5.5rem, 13dvh, 8rem)" }}
        className="relative z-10 flex flex-col items-center"
      >
        <p className="greeting pl-[0.3em] text-base font-medium tracking-[0.3em] text-stone-700 sm:text-xl md:text-2xl lg:text-3xl">
          Hi, I&apos;m
        </p>
        <h1
          style={{ fontSize: "var(--fs)" }}
          className="text-h1 gradient-text whitespace-nowrap pb-[0.08em] text-center font-bold leading-none"
        >
          Pugazhendhi
        </h1>
      </div>

      <div
        style={{ marginTop: "calc(var(--fs) * -0.45)" }}
        className="relative min-h-0 flex-1"
      >
        <div className="pointer-events-none absolute inset-0 z-30 flex items-end justify-center">
          <img
            src={Pugazhendhi}
            className="pugazh-image h-[66%] w-auto max-w-[92vw] object-contain object-bottom drop-shadow-[0_10px_40px_rgba(30,22,10,0.55)] sm:h-[70%] md:h-[88%] lg:h-full"
            alt="Pugazhendhi"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[8%] z-40 flex justify-center !pl-6 !pr-6 md:top-[18%] md:justify-start md:!pl-[5%] md:!pr-0 lg:top-[36%] lg:!pl-[7%]">
          <div className="text-box w-full max-w-sm text-center md:w-[28%] md:max-w-none md:text-left lg:w-[24%]">
            <p className="text-p text-xl font-semibold leading-tight text-stone-900 sm:text-2xl lg:text-3xl">
              Curious mind.
              <br />
              Endless questions.
            </p>
            <p className="text-p mt-2 text-xs leading-relaxed text-stone-700 sm:text-sm lg:mt-3 lg:text-base">
              Building software &amp; exploring AI. Always learning, always
              exploring.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: MOTTLE }}
        className="pointer-events-none absolute inset-0 z-50 opacity-[0.45] mix-blend-soft-light"
      />
      <div
        style={{ backgroundImage: GRAIN }}
        className="pointer-events-none absolute inset-0 z-50 opacity-[0.24] mix-blend-multiply"
      />
      <div className="pointer-events-none absolute inset-0 z-50 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(40,30,18,0.4)_100%)]" />
    </div>
  );
}