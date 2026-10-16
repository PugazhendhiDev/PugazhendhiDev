export default function About({ className = "" }) {
  return (
    <section
      id="about"
      className={`relative flex min-h-dvh w-full flex-col items-center justify-center gap-8 border-t-2 border-t-[var(--faded-text-color)]/30 bg-[var(--common-bg-color)] px-6 py-16 ${className}`}
    >
      <h1 className="max-w-4xl text-center text-4xl leading-tight gradient-text-light sm:text-5xl md:text-7xl">
        Curious by nature.
        <br />
        Developer by choice.
      </h1>

      <p className="max-w-2xl text-center text-base leading-8 text-[var(--common-text-color)] sm:text-lg">
        A curious developer passionate about software engineering, AI, and
        system architecture. I love exploring how technology works behind the
        scenes, building practical projects, and constantly learning new ways
        to solve problems. For me, curiosity is the starting point of every
        great idea.
      </p>
    </section>
  );
}