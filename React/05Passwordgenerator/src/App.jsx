import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import './App.css'

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
      (includeNumbers ? "0123456789" : "") +
      (includeSymbols ? "!@#$%^&*()_+~`|}{[]:;?><,./-=" : "");

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Password Generator</h1>
        <p
          ref={passwordRef}
          className="text-lg font-mono bg-gray-100 p-3 rounded-lg mb-4 select-all transition duration-300 ease-in-out"
        >
          {password || "Your secure password will appear here!"}
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="text-gray-600">Length:</label>
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
          <div className="flex items-center justify-between">
            <label htmlFor="numbers" className="text-gray-600">Include Numbers:</label>
            <input
              type="checkbox"
              id="numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="w-5 h-5"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="symbols" className="text-gray-600">Include Symbols:</label>
            <input
              type="checkbox"
              id="symbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="w-5 h-5"
            />
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generatePassword}
            className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            Generate Password
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            Copy to Clipboard
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
