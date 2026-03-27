/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ProjectCard = ({ title, description, link, imagen, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-neo-white border-3 sm:border-4 border-neo-black shadow-brutal transition-all duration-200 hover:shadow-brutal-lg hover:translate-x-1 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-56 bg-neo-light border-b-3 sm:border-b-4 border-neo-black">
        <img
          src={imagen}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
        />
        
        {/* Overlay badge */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 bg-neo-accent border-2 border-neo-black shadow-brutal-sm">
          <span className="font-mono text-[9px] sm:text-xs font-bold uppercase text-neo-black">Live</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-black mb-3 text-neo-black uppercase tracking-tight line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem]">
          {title}
        </h3>
        
        <div className="h-1 w-12 sm:w-16 bg-neo-accent border-2 border-neo-black mb-3 sm:mb-4"></div>
        
        <p className="font-sans text-neo-gray text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
          {description}
        </p>

        {/* Link Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-neo-black text-neo-accent border-3 sm:border-4 border-neo-black shadow-brutal-sm font-bold uppercase text-xs sm:text-sm tracking-wider transition-all duration-150 hover:bg-neo-accent hover:text-neo-black hover:shadow-brutal hover:translate-x-1 hover:-translate-y-1"
        >
          Ver Proyecto
          <Icon icon="heroicons:arrow-top-right-on-square" className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-neo-yellow opacity-20 -z-10" />
    </motion.div>
  );
};

export default ProjectCard;
