import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //  ref hook
  const passwordRef = useRef(null);

  // password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*{}[]~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // copy button functionality
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 p-4 text-gray-500 bg-gray-800">
        <h3 className="text-center p-5 text-2xl">Key Generator</h3>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-400">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-gray-800 pl-4"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none text-white px-3 py-0.5 shrink-0 bg-gray-900 cursor-pointer">
            Copy
          </button>
        </div>

        {/* this is modifier in password */}
        <div className="flex text-sm gap-x-2">

          {/* This is slider */}
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={8}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label> Length: {length}</label>
          </div>

          {/* this is for number allowed */}
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id="numberInput"
            onChange={(e)=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>

          {/* this is for character allowed */}
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id="charInput"
            onChange={(e)=>{
              setNumberAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor="charInput">Characters</label>
            
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
