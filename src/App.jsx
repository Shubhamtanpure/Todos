import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './component/Addtodos'
import Todo from './component/Todo'

function App() {


  return (
    <>
      <p style={{ fontSize: '30px' }}>Todo App</p>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
