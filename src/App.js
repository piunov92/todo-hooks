import React from 'react'
import TaskInput from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'

const App = () => {
  const [data, setData] = React.useState([])

  const newTodo = (text) => {
    const newTodo = {
      id: Math.random().toString(16).slice(2),
      text,
    }

    setData([...data, newTodo])
  }

  const destroyTodo = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const editTodo = (id, text) => {
    setData(
      data.map((todo) => ({
        ...todo,
        text: todo.id === id ? text : todo.text,
      }))
    )
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TaskInput
          className={'new-todo'}
          placeholder={'What needs to be done?'}
          submit={(state, setState) => {
            newTodo(state)
            setState('')
          }}
        />
      </header>
      <section className="main">
        <TaskList todos={data} taskDestroy={destroyTodo} taskEdit={editTodo} />
      </section>
    </section>
  )
}

export default App
