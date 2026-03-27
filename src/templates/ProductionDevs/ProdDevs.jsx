import { motion } from "framer-motion";
import prodDevs from "../../assets/online-prod.svg";
import ProjectCard from "../../components/ProjectCard";
import { productionDevs } from "../../libs/data";

export default function ProdDevs() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 scroll-mt-40 overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          {/* Title Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="p-4 sm:p-6 bg-neo-accent border-3 sm:border-4 border-neo-black shadow-brutal">
                <img
                  src={prodDevs}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
                  alt="Desarrollos en producción"
                />
              </div>
            </motion.div>

            <div className="flex-1">
              <div className="inline-block border-3 sm:border-4 border-neo-black bg-neo-yellow px-4 sm:px-6 py-2 sm:py-3 mb-4 shadow-brutal-sm">
                <h2 className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase text-neo-black tracking-tighter">
                  Proyectos Live
                </h2>
              </div>
              
              <div className="h-1.5 sm:h-2 w-16 sm:w-24 bg-neo-accent border-2 border-neo-black mb-3 sm:mb-4"></div>
              
              <p className="font-mono text-xs sm:text-sm text-neo-gray uppercase tracking-wider mb-3 sm:mb-4">
                // EN PRODUCCIÓN Y ACTIVOS
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-neo-black border-3 sm:border-4 border-neo-black p-4 sm:p-6 md:p-8 shadow-brutal">
            <p className="font-sans text-neo-white text-sm sm:text-base md:text-lg leading-relaxed">
              Proyectos en producción que <span className="text-neo-accent font-bold">miles de usuarios</span> utilizan cada día.
              Desde landing pages que convierten hasta aplicaciones web completas con APIs REST y SOAP.
            </p>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t-2 border-neo-border">
              <p className="font-mono text-neo-accent text-xs sm:text-sm">
                <span className="text-neo-yellow">&gt;</span> Stack: PHP, Angular, React, Bootstrap, Tailwind
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productionDevs.map((project, index) => (
            <ProjectCard key={project.id} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
