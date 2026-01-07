import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}
        >
          <span className='border-2'>{todo.text}</span>
          <button className="bg-red-900 p-4" onClick={() => dispatch(removeTodo(todo.id))}>
            X
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Todos
