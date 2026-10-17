import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  image,
  title,
  description,
  tech = [],
  repo = "",
  live = "",
}) {
  const linkClass =
    "flex items-center gap-2 border border-white/20 !px-3 !py-2 text-xs font-bold uppercase tracking-widest text-[var(--common-text-color)] transition-colors duration-200 hover:bg-white hover:text-black";

  return (
    <article className="project-card flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1">
      <img
        src={image}
        alt={`${title} preview`}
        loading="lazy"
        className="aspect-video w-full object-cover"
      />

      <div className="flex grow flex-col gap-4 !p-5">
        <h3 className="text-2xl text-[var(--common-text-color)]">{title}</h3>

        <p className="grow text-sm leading-6 text-[var(--common-text-color)]/70">
          {description}
        </p>

        {tech.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-full bg-white/10 !px-3 !py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--common-text-color)]"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {(repo || live) && (
          <div className="flex flex-wrap gap-3">
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer" className={linkClass}>
                <FaGithub aria-hidden="true" /> Repo
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className={linkClass}>
                <FaExternalLinkAlt aria-hidden="true" /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}