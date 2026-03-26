import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import prodDevs from "../../assets/online-prod.svg";
import ProjectCard from "../../components/ProjectCard";
import { productionDevs } from "../../libs/data";

export default function ProdDevs() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      id="projects"
      className="py-20 px-4 scroll-mt-40"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <img
              src={prodDevs}
              className="w-32 h-32 md:w-40 md:h-40"
              alt="Desarrollos en producción"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent px-2">
            DESARROLLOS ON-LINE 🖥️🌎
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Proyectos en producción que miles de usuarios utilizan cada día.
            Desde landing pages que convierten hasta aplicaciones web completas con APIs REST y SOAP.
            <br />
            <br />
            Stack: PHP, Angular, React, Bootstrap, y Tailwind. En algunos lideré el diseño completo,
            en otros,transformé mockups de diseñadores en interfaces funcionales y optimizadas.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productionDevs.map((project, index) => (
            <ProjectCard key={project.id} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
