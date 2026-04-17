import { ReactNode } from "react";
import { FaReact, FaJava, FaLaravel } from "react-icons/fa";
import {
  SiHuggingface,
  SiPytorch,
  SiCplusplus,
  SiCss,
  SiExpress,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiSupabase,
  SiSwift,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

interface ITechnology {
  name: string;
  icon: ReactNode;
  year: number;
  type: string;
}

const technologies: ITechnology[] = [
  { name: "Hugging Face", icon: <SiHuggingface />, year: 2025, type: "AI Development" },
  { name: "PyTorch", icon: <SiPytorch />, year: 2025, type: "AI Development" },
  { name: "Laravel", icon: <FaLaravel />, year: 2025, type: "Full-Stack" },
  { name: "React", icon: <FaReact />, year: 2020, type: "Web" },
  { name: "Java", icon: <FaJava />, year: 2024, type: "Mobile" },
  { name: "Next.js", icon: <SiNextdotjs />, year: 2022, type: "Web" },
  { name: "Express.js", icon: <SiExpress />, year: 2022, type: "Web" },
  { name: "TypeScript", icon: <SiTypescript />, year: 2022, type: "Web" },
  { name: "JavaScript", icon: <SiJavascript />, year: 2020, type: "Web" },
  { name: "C++", icon: <SiCplusplus />, year: 2024, type: "Programming" },
  { name: "C#", icon: <TbBrandCSharp />, year: 2022, type: "Programming" },
  { name: "HTML5", icon: <SiHtml5 />, year: 2020, type: "Web" },
  { name: "CSS3", icon: <SiCss />, year: 2020, type: "Web" },
  { name: "Python", icon: <SiPython />, year: 2019, type: "Programming" },
  { name: "Firebase", icon: <SiFirebase />, year: 2019, type: "Database" },
  { name: "Swift", icon: <SiSwift />, year: 2019, type: "Mobile" },
  { name: "MySQL", icon: <SiMysql />, year: 2022, type: "Database" },
  { name: "MongoDB", icon: <SiMongodb />, year: 2022, type: "Database" },
  { name: "Supabase", icon: <SiSupabase />, year: 2024, type: "Database" },
];

export default function SkillsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-start max-h-[60vh] pb-5 overflow-y-scroll no-scrollbar">
      {technologies
        .sort((a, b) => b.year - a.year)
        .map((tech) => (
          <ItemContainer key={tech.name} tech={tech} />
        ))}
    </div>
  );
}

function ItemContainer({ tech }: { tech: ITechnology }) {
  return (
    <div className="p-6 bg-neutral-100 dark:bg-[#242424] backdrop-blur-lg rounded-lg border border-white/10 transition-all duration-300 dark:hover:border-darkaccent hover:border-accent dark:hover:shadow-[0_0_10px_#2DC8C5] hover:shadow-[0_0_10px_#12918F]">
      <div className="flex flex-row items-center gap-3">
        <span className="text-3xl">{tech.icon}</span>
        <p className="font-bold text-xl">{tech.name}</p>
      </div>
      <div className="mt-3 flex flex-row items-center gap-2">
        <p className="bg-lightbtnhover dark:bg-darkbtnhover px-2 py-1 rounded-lg lg:text-base">
          {tech.year}
        </p>
        <p className="bg-lightbtnhover dark:bg-darkbtnhover px-2 py-1 rounded-lg lg:text-base">
          {tech.type}
        </p>
      </div>
    </div>
  );
}