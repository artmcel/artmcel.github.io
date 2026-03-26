import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white mt-20">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#f9f4ef]"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contáctame
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://github.com/artmcel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Icon icon="logos:github-octocat" height="32" width="32" />
              </a>
              <a
                href="https://www.linkedin.com/in/arturo-mor-celis/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Icon icon="logos:linkedin-icon" height="32" width="32" />
              </a>
              <a
                href="mailto:artmcel@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Icon icon="logos:google-inbox" height="32" width="32" />
              </a>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Creado con
            </h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://vitejs.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Icon icon="logos:vitejs" height="32" width="32" />
              </a>
              <a
                href="https://es.react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Icon icon="logos:react" height="32" width="32" />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
              >
                <Icon icon="logos:tailwindcss-icon" height="32" width="32" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-purple-200">
            © 2026 Arturo Morales Celis. Hecho con ❤️ y React
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
