import { useRef } from "react";
import AchievementCard from "../components/AchievementCard";
import achievements from "../Data/achievements.json";
import useRevealOnView from "../hooks/useRevealOnView";

const images = import.meta.glob("../assets/achievements/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

export default function Achievements({ className = "" }) {
  const sectionRef = useRef(null);
  useRevealOnView(sectionRef);

  const validAchievements = achievements
    .map((item) => ({
      ...item,
      image: images[`../assets/achievements/${item.image}`] ?? item.image,
    }))
    .filter((item) => item.image && item.title && item.content);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className={`relative flex min-h-dvh w-full content-center gap-8! px-6! py-20! border-t-2 border-t-[var(--faded-text-color)]/30 bg-[var(--common-bg-color)] ${className}`}
    >
      <h1 className="reveal text-5xl gradient-text-light">Achievements</h1>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 self-center sm:grid-cols-2">
        {validAchievements.map(({ id, ...item }) => (
          <div key={id ?? item.title} className="reveal h-full">
            <AchievementCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}