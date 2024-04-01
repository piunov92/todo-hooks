import React from 'react'
import TaskInput from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'
import TaskFilter from './components/TasksFilter/TaskFilter'

const App = () => {
  const [data, setData] = React.useState([])
  const [todoCount, setTodoCount] = React.useState(0)

  console.log(data)

  const newTodo = (text) => {
    const newTodo = {
      id: Math.random().toString(16).slice(2),
      isDone: false,
      text,
    }
    setTodoCount(todoCount + 1)
    setData([...data, newTodo])
  }

  const destroyTodo = (id) => {
    setTodoCount(todoCount - 1)
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

  const doneTodo = (id) => {
    setData(
      data.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone
          if (todo.isDone) setTodoCount(todoCount - 1)
          else setTodoCount(todoCount + 1)
        }
        return todo
      })
    )
  }

  const clearDone = () => {
    data.forEach((todo) => {
      if (todo.isDone) {
        setData(data.filter((item) => !item.isDone))
      }
    })
  }

  const isDone = () => {}

  const isActive = () => {}

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TaskInput
          className={'new-todo'}
          placeholder={'What needs to be done?'}
          value={''}
          submit={(state, setState) => {
            newTodo(state)
            setState('')
          }}
        />
      </header>
      <section className="main">
        <TaskList
          todos={data}
          taskDestroy={destroyTodo}
          taskEdit={editTodo}
          taskDone={doneTodo}
        />
        <Footer counter={todoCount} clearDone={clearDone}>
          <TaskFilter completed={isDone} active={isActive} />
        </Footer>
      </section>
    </section>
  )
}

export default App
