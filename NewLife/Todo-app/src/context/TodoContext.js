import { createContext } from "react";
import { useContext } from "react";
// we are doing all this in a single file coz we dont want it to wrap it in alag alag  file....

// creating context...

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Message",
            completed: false
        }
    ],
    addtodo: (todo) => {},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id)=>{}
});

// Giving the context which we want to create...

export const useTodo = ()=>{
    return useContext(TodoContext);
}

// Provider here ... 
export const TodoProvider = TodoContext.Provider;

