import { motion } from "framer-motion";
import profile from "../../assets/profile-picture.jpeg";

export default function Introduce() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col justify-center items-center md:flex-row gap-8 md:gap-12 px-4 pb-12"
    >
      {/* Profile Image */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <img
          src={profile}
          className="relative object-cover rounded-2xl shadow-2xl w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
          alt="Arturo Morales - Full Stack Developer"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={itemVariants}
        className="flex-1 max-w-3xl"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            SOBRE MÍ 👋
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            <strong className="text-gray-900 font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Full-Stack Developer
            </strong>{" "}
            con 5+ años transformando ideas en aplicaciones web que funcionan—del diseño a producción.
          </p>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            🚀 No solo escribo código. Trabajo en todo el ciclo: desde UX/UI hasta SEO y marketing,
            para que cada proyecto no solo funcione técnicamente, sino que también genere resultados reales.
          </p>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            💻 He construido APIs REST escalables, microservicios con Laravel, plugins para WordPress,
            y arquitecturas híbridas con React, Vue y GraphQL—siempre priorizando rendimiento y mantenibilidad.
          </p>

          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            📈 Mi experiencia en SEO técnico me permite crear sitios que no solo se ven bien,
            sino que también se encuentran fácilmente. Analytics 4, Tag Manager, y auditorías de performance
            son parte de mi día a día.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Proyectos
          </a>
          <a
            href="#skills"
            className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:-translate-y-1 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Habilidades
          </a>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
