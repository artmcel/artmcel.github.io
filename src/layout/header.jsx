import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          {/* Nombre */}
          <h1
            className={`font-bold text-xl sm:text-2xl md:text-3xl tracking-tight transition-colors duration-300 text-center ${
              scrolled
                ? "text-slate-900 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                : "text-white"
            }`}
          >
            Arturo Morales Celis
          </h1>

          {/* Cargo */}
          <p
            className={`text-sm sm:text-base transition-colors duration-300 text-center ${
              scrolled ? "text-slate-600" : "text-purple-200"
            }`}
          >
            Full-Stack Developer
          </p>

          {/* Iconos de Contacto */}
          <div className="flex items-center gap-2 sm:gap-3 mt-1">
            <a
              href="https://github.com/artmcel"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 cursor-pointer ${
                scrolled
                  ? "hover:bg-slate-100"
                  : "hover:bg-white/10 backdrop-blur-sm"
              }`}
              aria-label="GitHub"
            >
              <Icon
                icon={scrolled ? "mdi:github" : "logos:github-octocat"}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/arturo-mor-celis/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 cursor-pointer ${
                scrolled
                  ? "hover:bg-slate-100"
                  : "hover:bg-white/10 backdrop-blur-sm"
              }`}
              aria-label="LinkedIn"
            >
              <Icon
                icon={scrolled ? "mdi:linkedin" : "logos:linkedin-icon"}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>

            <a
              href="mailto:artmcel@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 cursor-pointer ${
                scrolled
                  ? "hover:bg-slate-100"
                  : "hover:bg-white/10 backdrop-blur-sm"
              }`}
              aria-label="Email"
            >
              <Icon
                icon={scrolled ? "mdi:email" : "logos:google-inbox"}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
