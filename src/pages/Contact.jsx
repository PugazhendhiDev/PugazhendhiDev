import { useRef, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaLocationDot,
  FaRegCopy,
  FaCheck,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import contact from "../Data/contact.json";
import useRevealOnView from "../hooks/useRevealOnView";

const ICONS = { FaLinkedin, FaGithub, FaLocationDot };

export default function Contact({ className = "" }) {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);
  useRevealOnView(sectionRef);

  const { heading, subheading, status, email, links } = contact;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const cardClass =
    "group flex h-full items-center gap-4 rounded-xl border border-white/10 bg-white/5 !p-5 text-[var(--common-text-color)] transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative flex min-h-dvh w-full content-center gap-8! px-6! py-20! border-t-2 border-t-[var(--faded-text-color)]/30 bg-[var(--common-bg-color)] ${className}`}
    >
      <div className="reveal flex items-center gap-3 rounded-full border border-white/15 bg-white/5 !px-4 !py-2 text-xs font-semibold uppercase tracking-widest text-[var(--common-text-color)]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        {status}
      </div>

      <h1 className="reveal max-w-4xl text-center text-4xl leading-tight gradient-text-light sm:text-6xl md:text-7xl">
        {heading}
      </h1>

      <p className="reveal max-w-xl text-center text-base leading-8 text-[var(--common-text-color)]/70 sm:text-lg">
        {subheading}
      </p>

      <div className="reveal flex w-full max-w-3xl flex-col items-center gap-4">
        <a
          href={`mailto:${email}`}
          className="group flex max-w-full items-center gap-3 break-all text-center text-xl font-semibold text-[var(--common-text-color)] sm:text-3xl md:text-4xl"
        >
          <span className="border-b-2 border-white/30 transition-colors duration-300 group-hover:border-white">
            {email}
          </span>
          <FaArrowRight
            aria-hidden="true"
            className="shrink-0 text-lg transition-transform duration-300 group-hover:translate-x-2"
          />
        </a>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 bg-[var(--common-text-color)] !px-5 !py-3 text-xs font-bold uppercase tracking-widest text-black transition-transform duration-200 hover:-translate-y-1"
          >
            Say Hello
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="flex cursor-pointer items-center gap-2 border border-white/20 !px-5 !py-3 text-xs font-bold uppercase tracking-widest text-[var(--common-text-color)] transition-colors duration-200 hover:bg-white hover:text-black"
          >
            {copied ? <FaCheck aria-hidden="true" /> : <FaRegCopy aria-hidden="true" />}
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {links.map(({ label, value, url, icon }) => {
          const Icon = ICONS[icon];
          const content = (
            <>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                {Icon && <Icon aria-hidden="true" />}
              </span>
              <span className="flex min-w-0 grow flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--common-text-color)]/50">
                  {label}
                </span>
                <span className="truncate text-sm font-semibold">{value}</span>
              </span>
              {url && (
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  className="shrink-0 text-xs opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
            </>
          );

          return (
            <div key={label} className="reveal h-full">
              {url ? (
                <a href={url} target="_blank" rel="noreferrer" className={cardClass}>
                  {content}
                </a>
              ) : (
                <div className={cardClass}>{content}</div>
              )}
            </div>
          );
        })}
      </div>

      <p className="reveal text-center text-xs uppercase tracking-widest text-[var(--common-text-color)]/40">
        © {new Date().getFullYear()} Pugazhendhi · Designed & built with React, Tailwind & GSAP
      </p>
    </section>
  );
}