import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skillsObject } from "../libs/skills";

export const SkillsComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6 }}
      id="skills"
      className="py-12 sm:py-16 md:py-20 px-4 scroll-mt-40 bg-neo-light border-y-4 border-neo-black overflow-hidden"
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
          <div className="inline-block border-3 sm:border-4 border-neo-black bg-neo-accent px-4 sm:px-6 py-2 sm:py-3 mb-4">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-neo-black tracking-tighter">
              Tech Stack
            </h2>
          </div>
          
          <p className="font-mono text-neo-gray text-sm uppercase tracking-wider mt-4">
            // Tecnologías y herramientas que domino
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto"
        >
          {skillsObject.map(({ name, icon }, index) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.2 },
              }}
              className="group relative flex flex-col items-center justify-center bg-neo-white border-3 sm:border-4 border-neo-black shadow-brutal-sm hover:shadow-brutal p-4 sm:p-6 transition-all duration-150 hover:translate-x-1 hover:-translate-y-1 cursor-pointer"
            >
              {/* Index badge */}
              <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-5 h-5 sm:w-6 sm:h-6 bg-neo-black border-2 border-neo-black flex items-center justify-center">
                <span className="font-mono text-[8px] sm:text-xs font-bold text-neo-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-2 sm:mb-3 transform group-hover:scale-110 transition-transform duration-200">
                <Icon icon={`logos:${icon}`} width="40" height="40" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>

              {/* Name */}
              <span className="relative z-10 text-[9px] sm:text-xs font-bold text-center text-neo-black uppercase tracking-wider group-hover:text-neo-black transition-colors duration-200">
                {name}
              </span>

              {/* Accent line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-neo-accent border-t-2 border-neo-black"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 h-2 bg-neo-yellow border-2 border-neo-black max-w-md mx-auto"
        />
      </div>
    </motion.article>
  );
};
