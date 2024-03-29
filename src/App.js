import React from 'react'
import TaskInput from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'

const App = () => {
  const [data, setData] = React.useState([])

  //new task
  const newTodo = (text) => {
    const newTodo = {
      id: Math.random().toString(16).slice(2),
      text,
    }

    setData([...data, newTodo])
  }

  //delete task
  const destroyTodo = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TaskInput addTodo={newTodo} />
      </header>
      <section className="main">
        <TaskList todos={data} taskDestroy={destroyTodo} />
      </section>
    </section>
  )
}

export default App
