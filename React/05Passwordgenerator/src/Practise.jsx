import React, { useCallback, useEffect, useState, useRef } from "react";


function Practise() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharALlowed] = useState(false);
  const[password ,setPassword] = useState("");
// useref hook
  const passref = useRef(null)



  // password generator mechanism

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+= "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',.<>/?";

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);

    }

    setPassword(pass);

  },[length ,numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passref.current?.select();
      window.navigator.clipboard.writeText(password);
      // alert("Copied to clipboard");
  },[password])


  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator ])

  return(
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black bg-slate-800">
      <h1 className="text-white text-center">Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">

        <input 
        type="text" 
        value={password}
        className="outline-none w-full py-1  bg-white p-4" 
        placeholder="Your Password will be shown here..."
        readOnly 
        ref={passref}
        />

        <button 
        onClick={copyPasswordToClipboard}
        className="text-white bg-blue-500 px-2 shrink-0">Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
              <input 
              type="range" 
              className="cursor-pointer"
              min={6}
              max={100}
              value={length}
              onChange={(e)=>{setlength(e.target.value)}}
              />
              <label className="text-white bg-blue-500 p-1 rounded-sm"> length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setnumberAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="numberInput" className="text-white bg-blue-500 p-1 rounded-sm">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={()=>{
                setCharALlowed((prev) => !prev)
              }}
              />
              <label htmlFor="charInput" className="text-white bg-blue-500 p-1 rounded-sm">Character</label>
          </div>
      </div>

      </div>
    </>
  );
}

export default Practise;
