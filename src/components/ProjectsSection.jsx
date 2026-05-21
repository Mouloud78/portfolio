import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description: "Un site web pour présenter mes compétences et projets.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "social-media-app",
    description:
      "Une application de réseau social pour le collège pour le partage d'articles, de documents et d'images.",
    image: "/projects/social-maisonneuve.png",
    tags: ["Laravel", "HTML", "CSS "],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Vino",
    description:
      "Une application de gestion de cave à vin pour suivre les bouteilles, les dégustations et les notes.",
    image: "/projects/vino.png",
    tags: ["Laravel", "Vue.js", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "clone pourvoiries du Québec",
    description:
      "Un clone de deux pages du site web des pourvoiries du Québec pour pratiquer mes compétences en développement web.",
    image: "/projects/pourvoirie-quebec.png",
    tags: ["HTML", "CSS", "javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 5,
    title: "travel-agency",
    description:
      "Un site web pour une agence de voyage fictive, avec des pages de destination, d'ajout de destination, de modification et de suppression.",
    image: "/projects/travel-agency.png",
    tags: ["React.js", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "lord-stampee",
    description:
      "Un projet de développement d'une application web pour la gestion d'une boutique en ligne de timbres.",
    image: "/projects/Lord-stampee.png",
    tags: ["PHP", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mes <span className="text-primary">Projets</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Une sélection de projets personnels et académiques démontrant mes
          compétences en développement frontend, backend et intégration
          d’applications web modernes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg  overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <SiGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Mouloud78?tab=repositories"
            target="_blank"
          >
            Consultez mon Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
