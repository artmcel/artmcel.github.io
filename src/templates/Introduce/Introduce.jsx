import { motion } from "framer-motion";
import profile from "../../assets/profile-picture.png";

export default function Introduce() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center px-4 py-8 md:py-16 scroll-mt-40"
    >
      <div className="container mx-auto max-w-7xl px-0">
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-neo-yellow border-3 sm:border-4 border-neo-black mb-4 sm:mb-6"
            >
              <span className="h-2 w-2 sm:h-3 sm:w-3 bg-neo-black rounded-full animate-pulse"></span>
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
                Disponible
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 leading-none uppercase"
            >
              <span className="block text-neo-black">Construyo</span>
              <span className="block text-neo-black relative">
                Productos
                <motion.span
                  className="absolute -bottom-2 left-0 h-4 w-full bg-neo-accent border-2 border-neo-black -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              <span className="block text-neo-black">Digitales</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.div
              variants={itemVariants}
              className="bg-neo-black border-3 sm:border-4 border-neo-black p-4 sm:p-6 mb-6 md:mb-8"
            >
              <p className="font-mono text-neo-accent text-sm sm:text-base md:text-lg leading-relaxed">
                <span className="text-neo-yellow font-bold">&gt;_</span> Full-Stack Developer con 5+ años
                transformando ideas en aplicaciones web que funcionan—del diseño a producción.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 md:mb-8"
            >
              <div className="border-3 sm:border-4 border-neo-black bg-neo-white p-2 sm:p-4 shadow-brutal-sm hover:shadow-brutal transition-all duration-150 hover:translate-x-1 hover:-translate-y-1">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-neo-black">5+</div>
                <div className="font-mono text-[10px] sm:text-xs uppercase text-neo-gray mt-1">Años Exp</div>
              </div>
              <div className="border-3 sm:border-4 border-neo-black bg-neo-white p-2 sm:p-4 shadow-brutal-sm hover:shadow-brutal transition-all duration-150 hover:translate-x-1 hover:-translate-y-1">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-neo-black">50+</div>
                <div className="font-mono text-[10px] sm:text-xs uppercase text-neo-gray mt-1">Proyectos</div>
              </div>
              <div className="border-3 sm:border-4 border-neo-black bg-neo-white p-2 sm:p-4 shadow-brutal-sm hover:shadow-brutal transition-all duration-150 hover:translate-x-1 hover:-translate-y-1">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-neo-black">100%</div>
                <div className="font-mono text-[10px] sm:text-xs uppercase text-neo-gray mt-1">Remoto</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-4"
            >
              <a
                href="#projects"
                className="btn-primary inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Proyectos
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hablemos
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border-3 md:border-4 border-neo-black -z-10 hidden md:block"></div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-neo-yellow border-3 md:border-4 border-neo-black -z-20 hidden md:block"></div>
            
            {/* Image Container */}
            <div className="relative border-4 sm:border-6 md:border-8 border-neo-black shadow-brutal sm:shadow-brutal-lg overflow-hidden bg-neo-accent">
              <img
                src={profile}
                className="object-cover object-top w-full aspect-square grayscale hover:grayscale-0 transition-all duration-300"
                alt="Arturo Morales - Full Stack Developer"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-neo-black border-t-3 sm:border-t-4 border-neo-black px-2 sm:px-4 py-2 sm:py-3">
                <p className="font-mono text-neo-accent text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Arturo Morales Celis
                </p>
                <p className="font-mono text-neo-yellow text-[10px] sm:text-xs uppercase">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6"
            >
              {["React", "Node.js", "PHP", "Laravel", "GraphQL"].map((tech, i) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 bg-neo-black text-neo-accent font-mono text-[10px] sm:text-xs font-bold uppercase border-2 border-neo-black"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-xs uppercase text-neo-gray tracking-wider">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-8 h-12 border-4 border-neo-black bg-neo-white flex items-start justify-center p-2 shadow-brutal-sm"
            >
              <motion.div 
                className="w-2 h-3 bg-neo-accent border-2 border-neo-black"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.1 }}
              />
            </motion.div>
            <div className="h-1 w-8 bg-neo-yellow border-2 border-neo-black"></div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
