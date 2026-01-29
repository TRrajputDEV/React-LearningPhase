// // ____ Revision of functional updater and react double mounting and basic dependency array of call use effect learnt. _________ -- 9/10/2025/
// import { useEffect, useState } from 'react';
// import './App.css';
// //  learnt about mounting and double rendering by strictmode....
// function App() {
//   const [Counter, setCounter] = useState(0);
//   const [change, setChange] = useState(-1); // state set krdi yenha pe ki change hai zero aur setchange iska papa.

//   // state ui sync up 
//   useEffect(()=>{setChange(prev => prev+1)}, [Counter])

  
//   const addValue = () => {
//     if (Counter < 20) {
//       setCounter(Counter + 1);
//     }
//   };

//   const decValue = () => {
//     if (Counter > -1) {
//       setCounter(Counter - 1);
//     }
//   };

//   const ResetValue = ()=>{

//     setCounter(0);
//   }
  


//   return (
//     <div className="container">
//       <div className="counter-box">
//         <h1>
//           {Counter}
//         </h1>
//       </div>

//       <div className="counter-box">
//         <h1>This is the obsereved no of times button clicked</h1>
//         <h1>
//           {change}
//         </h1>
//       </div>
        
//       <div className="button-group">
//         <button className="btn add" onClick={addValue}>
//           Add
//         </button>
//         <button className="btn remove" onClick={decValue}>
//           Remove
//         </button>
//         <button className="btn remove" onClick={ResetValue}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

import Navbar from "./Nav";
export default function App (){
  return(
    <>
    <Navbar/>
    <h1>Hello</h1>
    </>
  )
}