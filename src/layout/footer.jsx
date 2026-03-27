import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-neo-black border-t-8 border-neo-accent mt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-neo-yellow"></div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="border-4 border-neo-accent inline-block px-4 py-2">
              <h3 className="font-display text-2xl font-black text-neo-accent uppercase">
                Contacto
              </h3>
            </div>
            
            <div className="space-y-3">
              <a
                href="mailto:artmcel@hotmail.com"
                className="group flex items-center gap-3 text-neo-white hover:text-neo-accent transition-colors"
              >
                <div className="p-2 bg-neo-accent border-2 border-neo-accent group-hover:bg-transparent transition-colors">
                  <Icon icon="mdi:email" className="w-5 h-5 text-neo-black group-hover:text-neo-accent" />
                </div>
                <span className="font-mono text-sm">artmcel@hotmail.com</span>
              </a>

              <a
                href="https://github.com/artmcel"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-neo-white hover:text-neo-accent transition-colors"
              >
                <div className="p-2 bg-neo-accent border-2 border-neo-accent group-hover:bg-transparent transition-colors">
                  <Icon icon="mdi:github" className="w-5 h-5 text-neo-black group-hover:text-neo-accent" />
                </div>
                <span className="font-mono text-sm">github.com/artmcel</span>
              </a>

              <a
                href="https://www.linkedin.com/in/arturo-mor-celis/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-neo-white hover:text-neo-accent transition-colors"
              >
                <div className="p-2 bg-neo-accent border-2 border-neo-accent group-hover:bg-transparent transition-colors">
                  <Icon icon="mdi:linkedin" className="w-5 h-5 text-neo-black group-hover:text-neo-accent" />
                </div>
                <span className="font-mono text-sm">LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="border-4 border-neo-yellow inline-block px-4 py-2">
              <h3 className="font-display text-2xl font-black text-neo-yellow uppercase">
                Navegar
              </h3>
            </div>
            
            <nav className="space-y-2">
              {[
                { name: "Inicio", href: "#" },
                { name: "Sobre Mí", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Proyectos", href: "#projects" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-neo-white hover:text-neo-yellow transition-colors"
                  onClick={(e) => {
                    if (link.href !== "#") {
                      e.preventDefault();
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="font-mono text-sm group-hover:translate-x-2 transition-transform">
                    &gt; {link.name}
                  </span>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="border-4 border-neo-accent inline-block px-4 py-2">
              <h3 className="font-display text-2xl font-black text-neo-accent uppercase">
                Stack
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "logos:react", name: "React" },
                { icon: "logos:vitejs", name: "Vite" },
                { icon: "logos:tailwindcss-icon", name: "Tailwind" },
                { icon: "logos:nodejs-icon", name: "Node.js" },
                { icon: "logos:php", name: "PHP" },
                { icon: "logos:laravel", name: "Laravel" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="group relative p-3 bg-neo-border border-2 border-neo-gray hover:border-neo-accent transition-all duration-150 hover:shadow-brutal-sm hover:-translate-y-1"
                  title={tech.name}
                >
                  <Icon icon={tech.icon} className="w-8 h-8" />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <p className="font-mono text-neo-gray text-sm mb-3">
                ¿Tienes un proyecto?
              </p>
              <a
                href="mailto:artmcel@hotmail.com"
                className="inline-block px-6 py-3 bg-neo-yellow text-neo-black font-bold border-4 border-neo-yellow shadow-brutal-sm uppercase text-sm tracking-wider transition-all duration-150 hover:shadow-brutal hover:translate-x-1 hover:-translate-y-1"
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t-4 border-neo-border my-8"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-neo-accent rounded-full animate-pulse"></div>
            <p className="font-mono text-neo-gray text-sm">
              © {currentYear} Arturo Morales Celis
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-neo-gray text-xs uppercase">Hecho con</span>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-neo-border border-2 border-neo-gray text-neo-accent font-mono text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-neo-border border-2 border-neo-gray text-neo-accent font-mono text-xs">
                ❤️
              </span>
              <span className="px-2 py-1 bg-neo-border border-2 border-neo-gray text-neo-accent font-mono text-xs">
                Café
              </span>
            </div>
          </div>
        </motion.div>

        {/* Decorative code snippet */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 p-4 bg-neo-border border-2 border-neo-gray font-mono text-xs text-neo-gray"
        >
          <span className="text-neo-yellow">const</span>{" "}
          <span className="text-neo-accent">dev</span> ={" "}
          <span className="text-neo-white">{"{ name: 'Arturo', status: 'Available', mode: '100% Remote' }"}</span>;
        </motion.div>
      </div>
    </footer>
  );
}
