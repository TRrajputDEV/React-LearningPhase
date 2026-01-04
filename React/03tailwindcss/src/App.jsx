import { useContext, useEffect, useState, useRef } from "react";
import "./App.css";
import { createContext } from "react";

// ------------------Template--------------------

export default function Home (){
    return (
        <>
            this is part 2
        </>
    )
}

// counter
// export default function Home() {
// let cnt = 0;
//     const[count, setCount] = useState(0);

//     const addCount = () =>{
//       let newcount = count+1;
//       setCount(newcount);
//       console.log(newcount);
//     }
//     const decCount = ()=>{
//       let newCount = count - 1;
//       setCount(newCount);
//       console.log(newCount);
//     }
//     useEffect(()=>{
//       console.log("count mein change haii")
//     },[cnt])

//   return (
//     <>
//     <div>
//       <h3 className="mb-3 border-black border-2 rounded-xl">{count}</h3>

//     </div>
//     <div className="gap-2 flex flex-row">

//     <div onClick={()=>{
//       console.log("parent clicked")
//     }}>
//       <button onClick={addCount}
//       className="bg-green-700 text-xl" >Add</button>
//     </div>

//     <div onClick={()=>{
//       console.log("parent clicked")
//     }}>
//       <button onClick={decCount}
//       className="bg-red-700 text-xl" >Minus</button>
//     </div>
//     </div>
//     </>

//   );
// }
// Form - side by side
// export default function Home(){
//   const[name, setName] = useState('');

//   return(
//     <>
//     <label id="one"> Name: </label>
//     <input id="one" type="text" placeholder="Enter your text here"  className="bg-white outline p-2" value={name}
//     onChange={(e)=>{
//       setName(e.target.value)}}
//     />

//     <div className="p-4 bg-slate-400 text-black font-serif mt-5">
//       <p>{name}</p>
//     </div>
//     </>
//   )
// }

//  multiform

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [pass, setPass] = useState("");

//   return (
//     <>
//       <div className="max-w-sm mx-auto p-4 space-y-3">
//         <div className="flex flex-col">
//           <label htmlFor="username" className="text-sm mb-1">Username</label>
//           <input
//             id="username"
//             name="username"
//             type="text"

//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="border rounded px-2 py-1 bg-white"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label htmlFor="password" className="text-sm mb-1">Password</label>
//           <input
//             id="password"
//             name="password"
//             type="password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             className="border rounded px-2 py-1 bg-white"
//           />
//         </div>

//         <div className="text-sm text-gray-700">
//           <p>Your Username: <span className="font-medium">{username}</span></p>
//           <p>Your Password: <span className="font-medium">{pass}</span></p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default function Home() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="max-w-sm mx-auto p-4 space-y-3">
//       <div className="flex flex-col">
//         <label htmlFor="username" className="text-sm mb-1">Username</label>
//         <input
//           id="username"
//           name="username"
//           type="text"
//           value={formData.username}
//           onChange={handleChange}
//           className="border rounded px-2 py-1 bg-white"
//         />
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="password" className="text-sm mb-1">Password</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//           className="border rounded px-2 py-1 bg-white"
//         />
//       </div>

//       <div className="text-sm text-gray-700">
//         <p>Your Username: <span className="font-medium">{formData.username}</span></p>
//         <p>Your Password: <span className="font-medium">{formData.password}</span></p>
//       </div>
//     </div>
//   );
// }
// this is the thing we gotta have the in capital and it should have {} curly on yayy

// export default function Home(){

//   const Say = ({ name }) => {
//     return <h1>hello {name}</h1>
//   }

//   return(
//     <>
//       <div>

//         <h1>this is a greeting page by props</h1>
//         <Say name="Tushar" />

//       </div>
//     </>
//   )
// }
//  complex state -
// export default function Home() {
//   const [form, setForm] = useState({ username: "", password: "" });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   }

//   return (
//     <>
//       <input
//         type="text"
//         name="username"
//         value={form.username}
//         onChange={handleChange}
//       />

//       <input
//         type="password"
//         name="password"
//         value={form.password}
//         onChange={handleChange}
//       />

//       <h1>{form.username}</h1>

//     </>
//   );
// }

// state as array

// export default function Home() {
//   const [items, setItems] = useState([]); // we have used int , "string" and now list
//   function addItem() {
//     setItems((prev) => [...prev, `Item ${prev.length + 1}`]);
//   }

//   return (
//     <>
//       <button onClick={addItem}>Add Item</button>
//       <ul>
//         {items.map((i) => (
//           <li key={i}>{i}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default function Home() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Effect ran!");
//   });

//   return <button onClick={() => setCount(count + 1)}>{count}</button>;
// }

// export default function Home() {
//   const [user, setUser] = useState(null);
//   const userId = 1; // simulate prop

//   useEffect(() => {
//     let cancelled = false;

//     fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (!cancelled) setUser(data);
//       });

//     return () => {
//       cancelled = true;
//     };
//   }, [userId]);

//   if (!user) return <div>Loading...</div>;

//   return <div>{user.name}</div>;
// }

// use context study here lets gooo

// const Mycontext = createContext("default");

// export default function Home(){
//   const[baka, setValue] = useState("Hello World!");

//   return(
//     <Mycontext.Provider value={baka}>
//       <Display/>
//     </Mycontext.Provider>
//   )
// }

// function Display(){
//   const contextValue = useContext(Mycontext);
//   return <h1>{contextValue}</h1>
// }

// const UserContext = createContext();
// export default function Home() {
//   const [user] = useState("Tushar");
//   const [authstatus] = useState(true);

//   // send both values as a single object
//   const value = { user, authstatus };

//   return (
//     <UserContext.Provider value={value}>
//       <Parent />
//     </UserContext.Provider>
//   );
// }

// // In Child (or any consumer):
// // const { user, authstatus } = useContext(UserContext);

// function Parent(){
//   return <Child/>
// }

// function Child(){

//   const {user, authstatus} = useContext(UserContext);

//   return authstatus ? <p> Onboard {user}</p>: <p>Not logged IN</p>

// }

// const AuthContext = createContext();

// export default function Home() {
//   return (
//     <AuthProvider>
//       <ToggleLogin />
//       <Status />
//     </AuthProvider>
//   );
// }

// function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// function ToggleLogin() {
//   const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

//   return (
//     <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//       {isLoggedIn ? "Logout" : "Login"}
//     </button>
//   );
// }

// function Status() {
//   const { isLoggedIn } = useContext(AuthContext);
//   return <h3>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h3>;
// }

// export default function Home() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <>
//       <input ref={inputRef} placeholder="Click button to focus me" />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// }

/* *************************************************** UNIT - 4 ****************************************************
    Part 1 : 
    1. Basic Form with all validation - Revise the functions again and then learn about writing form structure 
    2. Learn about using UseRef - uncontrollable Form. 
    Part 2 : 
    1. Different Type of FORM = Practise all for once. 
    2. Learn Use Reducer - for Advanced form. 

*/

/* Part 1 */

// export default function Home() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = (values) => {
//     // make a new obj for newErrors:
//     const newErrors = {};

//     // email verification:
//     if (!values.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       newErrors.email = "Email format is Invalid";
//     }

//     //  Password verification

//     if (!values.password) {
//       newErrors.password = "Password is required";
//     } else if (values.password.length < 8) {
//       newErrors.password = "Password must be of 8 character ";
//     }

//     // username Verification

//     if (!values.username) {
//       newErrors.username = "Username is required";
//     } else if (values.username.length < 3) {
//       newErrors.username = "Username must be at least 3 characters";
//     }

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Optional: Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload

//     const validationErrors = validateForm(formData);
//     setErrors(validationErrors);

//     // Check if form is valid
//     if (Object.keys(validationErrors).length === 0) {
//       console.log("Form submitted:", formData);
//       // Process form data - API call, etc.
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>

//         <div>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             placeholder="Username"
//           />
//           {errors.username && <span className="error">{errors.username}</span>}
//         </div>

//         <div>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>

//         <button type="submit">Submit</button>
//       </form>

//       <div>
//         <h4> your username is: {formData.username}</h4>
//         <h4> your username is: {formData.email}</h4>
//         <h4> your PASSWORD is: {formData.password}</h4>
//       </div>
//     </>
//   );
// }

/* Part 2 */
// |-------------------------------------------------------------|
// 1. Select Dropdown

// export default function Home() {
//   const [formData, setFormData] = useState({
//     country: "",
//   });
//   const handleChange = (e) =>{
//     const{name, value} = e.target;

//     setFormData(prev =>({...prev, [name]: value}));

//   }
//   return (
//     <>
//       <select name="country" id="country" onChange={handleChange}>
//         <option value="">select country</option>
//         <option value="india">India</option>
//         <option value="spain">Spain</option>
//         <option value="Brazil">Brazil</option>
//       </select>

//     <div>

//     <br />

//     </div>

//       {!formData.country? "Please Select a country": <span>
//             Your Selected country is: {formData.country}
//         </span>}
//     </>
//   );
// }

// 2. CheckBox

// export default function Home() {
//   const [formData, setFormData] = useState({
//     hobbies: [], // Array to store multiple selections
//   });

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;

//     if (checked) {
//       // Add to array
//       setFormData((prev) => ({
//         ...prev,
//         hobbies: [...prev.hobbies, value],
//       }));
//     } else {
//       // Remove from array
//       setFormData((prev) => ({
//         ...prev,
//         hobbies: prev.hobbies.filter((hobby) => hobby !== value),
//       }));
//     }
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           value="coding"
//           checked={formData.hobbies.includes("coding")}
//           onChange={handleCheckboxChange}
//         />
//         Coding
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           value="gaming"
//           checked={formData.hobbies.includes("gaming")}
//           onChange={handleCheckboxChange}
//         />
//         Gaming
//       </label>
//     </div>
//   );
// }

// 3. Radio Button

// export default function Home() {
//   const [formData, setFormData] = useState({
//     gender: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="radio"
//           name="gender"
//           value="male"
//           checked={formData.gender === "male"}
//           onChange={handleChange}
//         />
//         Male
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="gender"
//           value="female"
//           checked={formData.gender === "female"}
//           onChange={handleChange}
//         />
//         Female
//       </label>
//     </div>
//   );
// }

/* -----------> Advanced Form: usin UseReduce

    import React, { useReducer } from 'react';

// Define initial state
const initialState = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
  role: 'user'
};

// Reducer function - handles all state updates
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'RESET_FORM':
      return initialState;
    case 'SET_MULTIPLE_FIELDS':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

function ComplexForm() {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: 'UPDATE_FIELD',
      field: name,
      value: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // After successful submission
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label>
        <input
          name="agreeToTerms"
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        Agree to Terms
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}



*/



//|----------------------------------------------------------------|