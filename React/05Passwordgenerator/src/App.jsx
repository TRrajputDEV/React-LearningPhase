import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import './App.css'

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
      (includeNumbers ? "0123456789" : "") +
      (includeSymbols ? "!@#$%^&*()_+~|}{[]:;?><,./-=" : "");

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += charset[Math.floor(Math.random() * charset.length)];
    }
    setPassword(generatedPassword);
  }, [length, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    if (passwordRef.current) {
      navigator.clipboard.writeText(passwordRef.current.innerText);
      alert("Password copied to clipboard!");
    }
  };

  useEffect(()=>{generatePassword()},[length,includeNumbers,includeSymbols,setPassword])

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 shadow-2xl rounded-2xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Password Generator</h1>
        <p
          ref={passwordRef}
          className="text-lg font-mono bg-gray-100 p-3 rounded-lg mb-4 select-all transition duration-300 ease-in-out"
        > 
          {password || "Your Secure Password will be displayed here"}
        </p>

        {/* Modifications in password */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-slate-900">Length:</label>
            <input
              type="number"
              id="length"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-16 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              min={4}
              max={32}
            />
          </div>

          {/* Numbers */}
        
          <div className="flex items-center justify-between">
            <label htmlFor="numbers" className="text-slate-900">Include Numbers:</label>
            <input
              type="checkbox"
              id="numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-5 h-5"
            />
          </div>

        {/* Symbols */}

          <div className="flex items-center justify-between">
            <label htmlFor="symbols" className="text-slate-900">Include Symbols:</label>
            <input
              type="checkbox"
              id="symbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Buttons */}    
        <div className="mt-6 space-y-4 p-3 flex flex-col">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generatePassword}
            className="bg-slate-800 text-white cursor-pointer font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            Generate Password
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            className="bg-green-500 cursor-pointer text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            Copy to Clipboard
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default App;