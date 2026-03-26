import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skillsObject } from "../libs/skills";

export const SkillsComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      id="skills"
      className="py-20 px-4 bg-gradient-to-b from-purple-50 to-transparent scroll-mt-40"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
            Mis Skills
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
        >
          {skillsObject.map(({ name, icon }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
              className="group relative flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative z-10 mb-3 transform group-hover:scale-110 transition-transform duration-300">
                <Icon icon={`logos:${icon}`} width="48" height="48" />
              </div>

              {/* Name */}
              <span className="relative z-10 text-sm font-semibold text-gray-700 text-center group-hover:text-purple-600 transition-colors duration-300">
                {name}
              </span>

              {/* Decorative corner */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
};
