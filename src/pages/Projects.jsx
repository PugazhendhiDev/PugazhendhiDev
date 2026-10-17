import ProjectCard from "../components/ProjectCard";
import projects from "../Data/projects.json";

const images = import.meta.glob("../assets/projects/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

export default function Projects({ className = "" }) {
  const validProjects = projects
    .map((project) => ({
      ...project,
      image: images[`../assets/projects/${project.image}`] ?? project.image,
    }))
    .filter((project) => project.image && project.title && project.description);

  return (
    <section
      id="projects"
      className={`relative flex min-h-dvh w-full content-center gap-8! px-6! py-20! border-t-2 border-t-[var(--faded-text-color)]/30 bg-[var(--common-bg-color)] ${className}`}
    >
      <h1 className="text-5xl gradient-text-light">Projects</h1>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 self-center sm:grid-cols-2 lg:grid-cols-3">
        {validProjects.map(({ id, ...project }) => (
          <ProjectCard key={id ?? project.title} {...project} />
        ))}
      </div>
    </section>
  );
}