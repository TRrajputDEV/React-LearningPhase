import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { NavLink } from "react-router-dom";
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <NavLink
        to="Home"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Home
      </NavLink>
    </>
  );
}

export default App;
