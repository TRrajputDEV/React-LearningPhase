import React, { useContext, useState } from 'react'
import Usercontext2 from '../context/Usercontext2';

function Login() {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const{setuser} = useContext(Usercontext2);
  const{setPass} = useContext(Usercontext2);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setuser({username});
    setPass({password});
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <div className="space-y-4">
          <input 
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input 
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button 
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          > 
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login