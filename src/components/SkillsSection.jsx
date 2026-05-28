import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // ================= FRONTEND =================
  {
    name: "HTML",
    description:
      "Maîtrise de la structure sémantique des pages web, accessibilité (ARIA) et intégration de layouts responsive.",
    category: "Frontend",
  },
  {
    name: "CSS",
    description:
      "Flexbox, CSS Grid, animations et responsive design pour créer des interfaces modernes et adaptatives.",
    category: "Frontend",
  },
  {
    name: "TailwindCSS",
    description:
      "Utilisation de classes utilitaires pour développer rapidement des interfaces UI modernes et responsives.",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    description:
      "Manipulation du DOM, ES6+, appels API REST et gestion de logique asynchrone avec async/await.",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    description:
      "Ajout de typage statique, interfaces et amélioration de la robustesse du code dans les projets React.",
    category: "Frontend",
  },
  {
    name: "React",
    description:
      "Développement d'interfaces dynamiques avec composants réutilisables, hooks (useState, useEffect) et routing.",
    category: "Frontend",
  },
  {
    name: "Angular",
    description:
      "Développement d'interfaces dynamiques avec composants, services et architecture d'applications Angular.",
    category: "Frontend",
  },

  // ================= BACKEND =================
  {
    name: "PHP",
    description:
      "Développement backend avec gestion des formulaires, logique serveur et création d’API simples.",
    category: "Backend",
  },
  {
    name: "Node.js",
    description:
      "Création d’API REST et développement backend JavaScript avec gestion des requêtes et middleware.",
    category: "Backend",
  },
  {
    name: "Express",
    description:
      "Construction d’API REST structurées avec routing, middleware et gestion des requêtes HTTP.",
    category: "Backend",
  },

  // ================= DATABASE =================
  {
    name: "MySQL",
    description:
      "Conception de bases de données relationnelles et exécution de requêtes SQL avec jointures et filtres.",
    category: "Database",
  },
  {
    name: "SQL",
    description:
      "Écriture de requêtes avancées, gestion des relations et manipulation des données structurées.",
    category: "Database",
  },

  // ================= TOOLS =================
  {
    name: "Git/GitHub",
    description:
      "Gestion de versions, collaboration en équipe et suivi des projets via Git et GitHub.",
    category: "Tools",
  },
  {
    name: "VS Code",
    description:
      "Environnement de développement optimisé avec extensions, debugging et productivité améliorée.",
    category: "Tools",
  },
];

const basic_skills = [
  {
    name: "Vue.js",
    description:
      "En cours d'apprentissage : réactivité, directives et structure de composants Vue.",
    category: "Frontend",
  },
  {
    name: "MongoDB",
    description:
      "En cours d'apprentissage : bases NoSQL, collections et opérations CRUD avec Mongoose.",
    category: "Database",
  },
  {
    name: ".NET",
    description:
      "En cours d'apprentissage : création d’API backend et compréhension de l’architecture .NET.",
    category: "Backend",
  },
  {
    name: "Laravel",
    description:
      "En cours d'apprentissage : architecture MVC, authentification et développement d’API REST.",
    category: "Backend",
  },
];

const categories = ["all", "Frontend", "Backend", "Database", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeBasicCategory, setActiveBasicCategory] = useState("all");

  const filteredSkills = skills.filter((skill) =>
    activeCategory === "all" ? true : skill.category === activeCategory,
  );

  const filteredBasicSkills = basic_skills.filter((basic_skill) =>
    activeBasicCategory === "all"
      ? true
      : basic_skill.category === activeBasicCategory,
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
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center mt-12">
          Mes <span className="text-primary">compétences de base</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveBasicCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize border",
                activeBasicCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card hover:bg-primary/10 border-border",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Basic Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredBasicSkills.map((basic_skill, key) => (
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
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{basic_skill.name}</h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                    {basic_skill.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {basic_skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
