export default function Projects({ className = "" }) {
  return (
    <section
      id="projects"
      className={`relative flex min-h-dvh w-full flex-col justify-center gap-8 border-t-2 border-t-[var(--faded-text-color)]/30 bg-[var(--common-bg-color)] px-6 py-16 ${className}`}
    >
      <h1 className="text-5xl gradient-text-light">Projects</h1>
    </section>
  );
}