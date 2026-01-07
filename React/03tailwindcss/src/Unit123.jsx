import { createContext, useContext, useState } from "react";

const Mycontext = createContext("default");

export default function Unit123() {
  const [baka, setValue] = useState("Hello world!!");

  return (
    <Mycontext.Provider value={baka}>
        <Display/>
    </Mycontext.Provider>

  );
}

function Display() {
  const contextValue = useContext(Mycontext)

    return <h1>{contextValue}</h1>
}
