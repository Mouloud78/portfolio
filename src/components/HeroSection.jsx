import { ArrowBigDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Bonjour, </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Je suis
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Mouloud
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            Développeur Web Full-Stack avec expérience. Passionné par la
            création d’applications web performantes et évolutives, je sais
            traduire des besoins complexes en solutions techniques concrètes.
            Motivé à rejoindre une équipe agile pour relever de nouveaux défis
            et contribuer à des projets innovants.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Voir mes projets
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/hero-illustration.svg"
            alt="hero"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-sm text-muted-foreground">
        Scroll
        <ArrowBigDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
