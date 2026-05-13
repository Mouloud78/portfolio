import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  {
    name: "HTML",
    level: "Avancé",
    description: "Structure sémantique, accessibilité, responsive",
    progress: 85,
    category: "Frontend",
  },
  {
    name: "CSS",
    level: "Avancé",
    description: "Flexbox, Grid, animations, responsive design",
    progress: 80,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    level: "Intermédiaire",
    description: "ES6+, DOM, API REST, async/await",
    progress: 70,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    level: "Intermédiaire",
    description: "Typage, interfaces, composants React",
    progress: 65,
    category: "Frontend",
  },
  {
    name: "React",
    level: "Intermédiaire",
    description: "Hooks, routing, composants réutilisables",
    progress: 70,
    category: "Frontend",
  },
  {
    name: "Angular",
    level: "En apprentissage",
    description: "Services, composants, architecture Angular",
    progress: 50,
    category: "Frontend",
  },
  {
    name: "Vue.js",
    level: "En apprentissage",
    description: "Bases des composants et réactivité",
    progress: 55,
    category: "Frontend",
  },
  {
    name: "TailwindCSS",
    level: "Intermédiaire",
    description: "UI responsive et rapide",
    progress: 65,
    category: "Frontend",
  },

  // Backend
  {
    name: "Node.js",
    level: "Intermédiaire",
    description: "Création d’API REST",
    progress: 65,
    category: "Backend",
  },
  {
    name: "Express",
    level: "Intermédiaire",
    description: "Routing, middleware, API",
    progress: 60,
    category: "Backend",
  },
  {
    name: "Laravel",
    level: "Intermédiaire",
    description: "MVC, authentification, API",
    progress: 65,
    category: "Backend",
  },
  {
    name: ".NET",
    level: "Intermédiaire",
    description: "API backend et architecture",
    progress: 60,
    category: "Backend",
  },

  // Database
  {
    name: "MongoDB",
    level: "Intermédiaire",
    description: "CRUD, collections, mongoose",
    progress: 55,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    level: "Intermédiaire",
    description: "Requêtes SQL et relations",
    progress: 55,
    category: "Database",
  },
  {
    name: "SQL",
    level: "Intermédiaire",
    description: "Jointures, filtres, requêtes",
    progress: 60,
    category: "Database",
  },

  // Tools
  {
    name: "Git/GitHub",
    level: "Intermédiaire",
    description: "Versioning et collaboration",
    progress: 70,
    category: "Tools",
  },
  {
    name: "VS Code",
    level: "Avancé",
    description: "Extensions, debugging, productivité",
    progress: 85,
    category: "Tools",
  },
];

const categories = ["all", "Frontend", "Backend", "Database", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) =>
    activeCategory === "all" ? true : skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">compétences</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card hover:bg-primary/10 border-border",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border border-primary/50
                    bg-card/60
                    backdrop-blur-sm
                    p-6
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/40
                    hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]
                  "
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                    {skill.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
