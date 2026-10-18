import { FaCertificate, FaGithub } from "react-icons/fa";

// image, title, content are required. tag, certificate, repo are optional.
export default function AchievementCard({
  image,
  title,
  content,
  tag = "",
  certificate = "",
  repo = "",
}) {
  const linkClass =
    "flex items-center gap-2 border border-white/20 !px-3 !py-2 text-xs font-bold uppercase tracking-widest text-[var(--common-text-color)] transition-colors duration-200 hover:bg-white hover:text-black";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="aspect-video w-full object-cover"
      />

      <div className="flex grow flex-col gap-3 !p-5">
        {tag && (
          <span className="w-fit rounded-full bg-white/10 !px-3 !py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--common-text-color)]">
            {tag}
          </span>
        )}

        <h3 className="text-2xl text-[var(--common-text-color)]">{title}</h3>

        <p className="grow text-sm leading-6 text-[var(--common-text-color)]/70">
          {content}
        </p>

        {(certificate || repo) && (
          <div className="flex flex-wrap gap-3">
            {certificate && (
              <a href={certificate} target="_blank" rel="noreferrer" className={linkClass}>
                <FaCertificate aria-hidden="true" /> Certificate
              </a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer" className={linkClass}>
                <FaGithub aria-hidden="true" /> Repo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
