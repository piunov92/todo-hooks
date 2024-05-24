import { useState } from 'react'
import TaskInput from './components/NewTaskForm/NewTaskForm'
import TaskList from './components/TaskList/TaskList'
import Footer from './components/Footer/Footer'
import TaskFilter from './components/TasksFilter/TaskFilter'

function App() {
  const [data, setData] = useState([])
  const [todoCount, setTodoCount] = useState(0)
  const [filter, setFilter] = useState('All')
  const [time, setTime] = useState({
    min: 0,
    sec: 0,
  })

  const newTodo = (text) => {
    const todo = {
      id: Math.random().toString(16).slice(2),
      isDone: false,
      seconds: 0,
      isTimeUpdate: false,
      date: new Date(),
      text,
    }
    if (text) {
      setData([...data, todo])
      setTodoCount(todoCount + 1)
    } else {
      setData([...data])
    }
  }

  const destroyTodo = (id, isDone) => {
    if (!isDone) {
      setTodoCount(todoCount - 1)
    }
    setData(data.filter((todo) => todo.id !== id))
  }

  const editTodo = (id, text) => {
    setData(
      data.map((todo) => ({
        ...todo,
        text: todo.id === id ? text : todo.text,
      })),
    )
  }

  const editTodoStatus = (isEditing) => isEditing

  const todoTimer = (id, value, isTime) => {
    setData(
      data.map((todo) => ({
        ...todo,
        seconds: todo.id === id ? value : todo.seconds,
        isTimeUpdate: todo.id === id ? isTime : todo.isTimeUpdate,
      })),
    )
  }

  const doneTodo = (id) => {
    setData(
      data.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.isDone = !todo.isDone
          if (todo.isDone) setTodoCount(todoCount - 1)
          else setTodoCount(todoCount + 1)
        }
        return todo
      }),
    )
  }

  const clearDone = () => {
    data.forEach((todo) => {
      if (todo.isDone) {
        setData(data.filter((item) => !item.isDone))
      }
    })
  }

  const filteredTodo = () =>
    data.filter(({ isDone }) => {
      const all = filter === 'All'
      const completed = filter === 'Completed'
      // eslint-disable-next-line no-nested-ternary
      return all ? true : completed ? isDone === true : isDone === false
    })

  const onChangeFilter = (filterStatus) => {
    setFilter(filterStatus)
  }

  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <TaskInput
          className='new-todo'
          placeholder='What needs to be done?'
          value=''
          submit={(state, setState) => {
            newTodo(state)
            setState('')
          }}
          setTime={setTime}
          editTodoStatus={editTodoStatus}
        />
      </header>
      <section className='main'>
        <TaskList
          todos={filteredTodo()}
          taskDestroy={destroyTodo}
          taskEdit={editTodo}
          editTodoStatus={editTodoStatus}
          taskDone={doneTodo}
          todoTimer={todoTimer}
          time={time}
        />
        <Footer counter={todoCount} clearDone={clearDone}>
          <TaskFilter filter={filter} onChangeFilter={onChangeFilter} />
        </Footer>
      </section>
    </section>
  )
}

export default App
