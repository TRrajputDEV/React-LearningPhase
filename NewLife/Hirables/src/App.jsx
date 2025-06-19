import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider2 from './context/UserContextProvider2'
export default function App() {
  return (
    
      <UserContextProvider2>
        {/* <h1>Yolo</h1> */}
        <Login/>
        <Profile/>

      </UserContextProvider2>
  )
}
