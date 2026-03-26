import { motion } from "framer-motion";
import personalDevs from "../../assets/programador.svg";
import { developmentDevs } from "../../libs/data";
import ProjectCard from "../../components/ProjectCard";

export default function PersonalDevs() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-50"
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
              src={personalDevs}
              className="w-32 h-32 md:w-40 md:h-40"
              alt="Desarrollos personales"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-2">
            DESARROLLOS PERSONALES
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experimentos, migraciones tecnológicas y proyectos de aprendizaje.
            Cada uno representa una nueva habilidad dominada o una tecnología explorada—desde
            CRUDs con Angular hasta chats en tiempo real con Socket.io.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developmentDevs.map((project, index) => (
            <ProjectCard key={project.id} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
