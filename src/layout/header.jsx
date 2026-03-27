import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neo-white border-b-4 border-neo-black shadow-brutal"
          : "bg-neo-accent border-b-4 border-neo-black"
      }`}
    >
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
          {/* Logo/Nombre */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h1 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-neo-black uppercase tracking-tighter">
              Arturo <span className="text-neo-black">Morales</span>
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-2 w-2 bg-neo-black rounded-full"></span>
              <p className="font-mono text-xs md:text-sm text-neo-black uppercase tracking-wider">
                Full-Stack Dev
              </p>
            </div>
          </motion.div>

          {/* Enlaces sociales */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <a
              href="https://github.com/artmcel"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 sm:p-3 bg-neo-black border-3 sm:border-4 border-neo-black hover:bg-neo-white transition-all duration-150 hover:shadow-brutal-sm hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Icon
                icon="mdi:github"
                className="w-5 h-5 sm:w-6 sm:h-6 text-neo-accent group-hover:text-neo-black transition-colors"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/arturo-mor-celis/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 sm:p-3 bg-neo-black border-3 sm:border-4 border-neo-black hover:bg-neo-white transition-all duration-150 hover:shadow-brutal-sm hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Icon
                icon="mdi:linkedin"
                className="w-5 h-5 sm:w-6 sm:h-6 text-neo-accent group-hover:text-neo-black transition-colors"
              />
            </a>

            <a
              href="mailto:artmcel@hotmail.com"
              className="group relative p-2 sm:p-3 bg-neo-black border-3 sm:border-4 border-neo-black hover:bg-neo-white transition-all duration-150 hover:shadow-brutal-sm hover:-translate-y-1"
              aria-label="Email"
            >
              <Icon
                icon="mdi:email"
                className="w-5 h-5 sm:w-6 sm:h-6 text-neo-accent group-hover:text-neo-black transition-colors"
              />
            </a>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:block px-6 py-3 bg-neo-yellow text-neo-black font-bold border-4 border-neo-black shadow-brutal-sm uppercase text-sm tracking-wider transition-all duration-150 hover:shadow-brutal hover:translate-x-1 hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contacto
            </a>
          </motion.div>
        </div>
      </div>

      {/* Animated accent line */}
      <motion.div
        className="h-1 bg-neo-yellow"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.header>
  );
}
