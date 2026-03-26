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
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-purple-100 to-pink-100">
        <img
          src={imagen}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Link Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          Ver Proyecto
          <Icon icon="heroicons:arrow-top-right-on-square" className="w-5 h-5" />
        </a>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 opacity-10 rounded-bl-full" />
    </motion.div>
  );
};

export default ProjectCard;
