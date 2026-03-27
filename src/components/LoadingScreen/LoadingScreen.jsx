import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-neo-accent"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #0a0a0a 0px, #0a0a0a 2px, transparent 2px, transparent 40px),
                            repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 2px, transparent 2px, transparent 40px)`
          }}
        />
      </div>

      <div className="relative text-center">
        {/* Main loading box */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="mb-8 p-8 bg-neo-black border-8 border-neo-black shadow-brutal-lg"
        >
          {/* Animated squares */}
          <div className="flex gap-3 mb-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 bg-neo-yellow border-4 border-neo-black"
              />
            ))}
          </div>

          {/* Loading text */}
          <motion.h2
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="font-display text-3xl font-black text-neo-accent uppercase tracking-tighter"
          >
            Cargando
          </motion.h2>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="w-2 h-2 bg-neo-yellow rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Tech badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-4 py-2 bg-neo-black border-4 border-neo-black"
        >
          <p className="font-mono text-neo-accent text-sm font-bold uppercase tracking-wider">
            Built with React + Tailwind
          </p>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-8 right-8 w-16 h-16 border-8 border-neo-black"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-8 left-8 w-20 h-20 bg-neo-yellow border-8 border-neo-black"
      />
    </motion.div>
  );
};

export default LoadingScreen;
