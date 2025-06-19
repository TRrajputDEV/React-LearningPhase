import React, { useContext } from 'react'
import Usercontext2 from '../context/Usercontext2';

function Profile() {
  const{user}  = useContext(Usercontext2);
  const{pass} = useContext(Usercontext2);

  const cardStyle = {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    textAlign: 'center'
  };

  if(!user && !pass){
    return(
      <div style={cardStyle}>
        <div>Please Login </div>
      </div>
    )
  }else{
    return(
      <div style={cardStyle}>
        <h1>Welcome {user.username}</h1>
        <h1>Your Password is {pass.password}</h1>
      </div>
    )
  }
}

export default Profile