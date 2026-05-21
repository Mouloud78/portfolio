import { ArrowUp, Mail, MapPin } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub, FaInstagram } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-800 text-white">
      <div className="container mx-auto max-w-7xl px-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* CONTACT */}
          <div>
            <h3 className="flex items-start text-lg font-bold uppercase mb-6">
              Contact
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed text-left relative">
              Pour toute question, opportunité ou collaboration, n’hésitez pas à
              me contacter par email.
            </p>

            <a
              href="mailto:mouloudouldali78@gmail.com"
              className="text-muted hover:text-primary transition-colors duration-300 relative"
            >
              mouloudouldali78@gmail.com
            </a>
          </div>
          {/* DOWNLOAD CV */}
          <div className="relative">
            <h3 className="text-lg font-bold uppercase mb-6">
              Télécharger mon CV
            </h3>

            <a
              href="/CV_Mouloud.pdf"
              download
              className="
                inline-flex
                items-center
                gap-2
                border
                border-gray-500
                px-4
                py-2
                rounded
                hover:bg-primary
                hover:border-primary
                transition-colors
                relative
              "
            >
              ↓ Français
            </a>

            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              Le CV est disponible au format PDF.
            </p>
          </div>
          {/* SOCIALS */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-6">Follow Me</h3>

            <div className="flex items-start gap-4 mx-34 relative">
              <a
                href="https://www.linkedin.com/in/mouloud-ouldali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <LiaLinkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/Mouloud78"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 relative">
        <a href="#hero">
          <ArrowUp
            className="p-2 rounded-full bg-primary/30 mt-2 hover:bg-primary/20 text-primary transition-colors"
            size={32}
          />
          UP
        </a>
      </div>
    </section>
  );
};
