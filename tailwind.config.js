/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { min: "250px", max: "639px" },
      },
      colors: {
        // Neo-Brutalist palette
        'neo-black': '#0a0a0a',
        'neo-white': '#fafafa',
        'neo-gray': '#888888',
        'neo-light': '#e8e8e8',
        'neo-accent': '#00ff88',
        'neo-accent-dark': '#00cc6a',
        'neo-yellow': '#ffed4e',
        'neo-border': '#1a1a1a',
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        tilt: "tilt 10s infinite linear",
        gradient: "gradient 3s ease infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "glitch": "glitch 0.5s cubic-bezier(.25,.46,.45,.94) both infinite",
        "border-dance": "borderDance 4s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        borderDance: {
          "0%, 100%": { borderColor: "#00ff88" },
          "50%": { borderColor: "#ffed4e" },
        },
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-sm': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-lg': '12px 12px 0px 0px rgba(0, 0, 0, 1)',
        'brutal-accent': '8px 8px 0px 0px #00ff88',
        'brutal-yellow': '8px 8px 0px 0px #ffed4e',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
    },
    fontFamily: {
      sans: ["DM Sans", "system-ui", "sans-serif"],
      display: ["Unbounded", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [],
};

