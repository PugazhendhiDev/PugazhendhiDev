import {
  FaPython,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaRobot,
  FaLayerGroup,
  FaServer,
  FaLaptopCode,
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFastapi,
  SiTailwindcss,
  SiPostman,
  SiUnity,
  SiGit,
  SiFirebase,
  SiVercel,
  SiRender,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiSpringboot,
} from "react-icons/si";
import defaultStack from "../Data/techStack.json";

const ICONS = {
  FaPython, FaNodeJs, FaGithub, FaAws, FaRobot, FaLayerGroup, FaServer,
  FaLaptopCode, FaReact, FaJava, FaHtml5, FaCss3Alt, FaNetworkWired,
  SiJavascript, SiFastapi, SiTailwindcss, SiPostman, SiUnity, SiGit,
  SiFirebase, SiVercel, SiRender, SiMysql, SiMongodb, SiExpress, SiSpringboot,
};

export default function TechStack({ sections = defaultStack, className = "" }) {
  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      {sections.map(({ category, items = [] }) => (
        <div key={category} className="tech-section flex flex-col gap-4">
          <h2 className="tech-heading text-2xl gradient-text-light">{category}</h2>
          <ul className="flex flex-wrap gap-3">
            {items.map(({ name, icon, bg, color }) => {
              const Icon = ICONS[icon];
              return (
                <li
                  key={name}
                  style={{ backgroundColor: bg, color }}
                  className="tech-badge flex items-center gap-2 !px-4 !py-2.5 text-xs font-bold uppercase tracking-widest transition-transform duration-200 hover:-translate-y-1"
                >
                  {Icon && <Icon className="text-base" aria-hidden="true" />}
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}