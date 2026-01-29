
import { NavLink } from "react-router-dom";
export function App() {
  return (
    <>
      <div className="mt-5 flex flex-col justify-center items-center  h-[20rem]">

        <button className="px-2 bg-orange-700 text-black py-2 rounded-sm dark:bg-orange-400 dark:text-white  " id="btn">Toggle theme</button>

        <div className="p-4  border-2 mt-4 w-[25rem] space-y-4">
          <h1 className="text-2xl font-serif font-bold">Card Title</h1>
          <p className="text-wrap "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolores ducimus neque nobis nihil aspernatur, tenetur suscipit eos ut laborum. Repellat, rem quae?</p>

          <NavLink
            to="/"
            className={({ isActive }) =>
              ` px-2 bg-orange-400 text-white py-2 rounded-sm duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
              } `
            }
          >
            Move to Home Page ➡️
          </NavLink>
        </div>
      </div>



    </>
  );
}

export default App;
