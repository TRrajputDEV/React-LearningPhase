import { useState } from "react";
import { motion } from "framer-motion"; 
import './App.css'
function App() {
  const [color, setColor] = useState("black");

  // Function to generate random colors
  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center duration-500 overflow-hidden relative"
      style={{ backgroundColor: color }}
    >
      {/* Background Particle Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient"></div>

      {/* Button Panel */}
      <motion.div
        className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-5 py-4 rounded-3xl backdrop-blur-sm bg-opacity-80">
          {/* Buttons with Hover Effect */}
          {["red", "yellow", "orange", "olive", "purple", "pink", "cyan", "green"].map((bgColor) => (
            <motion.button
              key={bgColor}
              onClick={() => setColor(bgColor)}
              className="outline-none px-4 py-1 rounded-full text-slate-900 shadow-lg hover:scale-110 transition-all"
              style={{ backgroundColor: bgColor }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}
            </motion.button>
          ))}
          {/* Random Color Button */}
          <motion.button
            onClick={getRandomColor}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-gray-300 hover:scale-110 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Random Color
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
