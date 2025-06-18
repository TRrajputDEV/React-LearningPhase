import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const{user}  = useContext(UserContext);
    const{pass} = useContext(UserContext);



    if(!user && !pass){
        return(
            <>
                <div>Please Login </div>
            </>
        )
    }else{
        return(
            <>
            <div>
                <h1>Welcome {user.username}</h1>
                <h1>Your Password is {pass.password}</h1>
            </div>
            </>
        )
    }
}

export default Profile  