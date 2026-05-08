import { Briefcase, Camera, Code, Server, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos <span className="text-primary"> de moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Développeur web junior passionné par la création d’expériences
              modernes et interactives.
            </h3>
            <p className="text-muted-foreground">
              Avec plus d'un an d'expérience en développement web, je me
              spécialise dans la création d'applications web réactives,
              accessibles et performantes utilisant des technologies modernes.
            </p>
            <p className="text-muted-foreground">
              Passionné par le développement web, j’aime concevoir des
              applications modernes, relever des défis techniques et continuer à
              apprendre chaque jour et apprendre continuellement de nouvelles
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Me contacter
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10  transition-colors duration-300"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Développement web</h4>
                  <p className="text-muted-foreground text-sm">
                    Création de sites web responsifs avec des frameworks
                    modernes.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Desing UI/UX</h4>
                  <p className="text-muted-foreground text-sm">
                    Concevoir des interfaces utilisateur intuitives et des
                    expériences utilisateur fluides.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Développement backend
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Création et gestion d’API, manipulation de bases de données
                    et développement de la logique serveur pour des applications
                    web complètes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
