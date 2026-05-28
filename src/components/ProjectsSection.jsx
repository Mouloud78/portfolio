import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description:
      "Portfolio moderne développé avec React et Tailwind CSS pour présenter mes projets, compétences et expériences avec une interface responsive et des animations interactives.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://portfolio-xi-mauve-77.vercel.app/",
    githubUrl: "https://github.com/Mouloud78/portfolio",
  },

  {
    id: 2,
    title: "Shopping Card",
    description:
      "Application e-commerce frontend avec système de filtrage dynamique, recherche de produits et interface responsive développée en React.",
    image: "/projects/shopping-card.png",
    tags: ["React", "CSS"],
    demoUrl: "https://shopping-card-with-filtring-957s.vercel.app/",
    githubUrl: "https://github.com/Mouloud78/shopping-card-with-filtring",
  },

  {
    id: 3,
    title: "Airbnb Clone",
    description:
      "Reproduction de la page d’accueil d’Airbnb afin de pratiquer l’intégration UI moderne, le responsive design et l’organisation de composants React.",
    image: "/projects/airbnb-clone.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://airbnb-clone-reactjs-silk.vercel.app/",
    githubUrl: "https://github.com/Mouloud78/airbnbClone-reactjs",
  },

  {
    id: 4,
    title: "Social Media App",
    description:
      "Plateforme collaborative développée pour un projet scolaire permettant le partage d’articles, documents et images entre étudiants.",
    image: "/projects/social-maisonneuve.png",
    tags: ["Laravel", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mouloud78/maisonneuve-2595298",
  },

  {
    id: 5,
    title: "Vino",
    description:
      "Application de gestion de cave à vin permettant le suivi des bouteilles, des dégustations et des notes personnelles avec une interface dynamique.",
    image: "/projects/vino.png",
    tags: ["Laravel", "Vue.js", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mouloud78/projet-equipe",
  },

  {
    id: 6,
    title: "Clone Pourvoiries du Québec",
    description:
      "Reproduction de plusieurs pages du site Pourvoiries du Québec afin de pratiquer l’intégration responsive, le positionnement CSS et le développement frontend.",
    image: "/projects/pourvoirie-quebec.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://pourvoiriesquebectp3.vercel.app/",
    githubUrl: "https://github.com/Mouloud78/pourvoiriesquebectp3",
  },

  {
    id: 7,
    title: "Travel Agency",
    description:
      "Application web de gestion de destinations touristiques avec fonctionnalités d’ajout, modification et suppression de contenu.",
    image: "/projects/travel-agency.png",
    tags: ["Vue.js", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mouloud78/travel-agency",
  },

  {
    id: 8,
    title: "Lord Stampee",
    description:
      "Projet de boutique en ligne pour la gestion et la vente de timbres avec fonctionnalités de catalogue, navigation et gestion de contenu.",
    image: "/projects/Lord-stampee.png",
    tags: ["PHP", "HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mouloud78/lord_stampee",
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
