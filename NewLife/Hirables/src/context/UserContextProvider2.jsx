import React, { useState } from 'react'
import Usercontext2 from './Usercontext2'
function UserContextProvider2({children}) {
    const[user,setuser] = useState(null);
    const[pass,setPass] = useState(null);
    return (
        <Usercontext2.Provider value={{user,setuser,pass,setPass}}>
            {children}
        </Usercontext2.Provider>
    )
}

export default UserContextProvider2