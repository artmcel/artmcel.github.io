import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            className="group relative bg-neo-yellow border-4 border-neo-black shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:translate-x-1 hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            {/* Button content */}
            <div className="flex flex-col items-center justify-center p-3 md:p-4">
              <Icon 
                icon="heroicons:arrow-up-20-solid" 
                className="w-7 h-7 md:w-8 md:h-8 text-neo-black mb-1 group-hover:animate-bounce" 
              />
              <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider text-neo-black">
                Top
              </span>
            </div>
            
            {/* Decorative corner accent */}
            <motion.div
              className="absolute -top-1 -left-1 w-3 h-3 bg-neo-accent border-2 border-neo-black"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
