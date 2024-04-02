import React from 'react'
import PropTypes from 'prop-types'
import Task from '../Task/Task'

import './TaskList.scss'

function TaskList({ todos, taskDestroy, taskEdit, taskDone }) {
  const list = todos.map((todo) => (
    <Task
      key={todo.id}
      todoText={todo.text}
      taskDestroy={() => taskDestroy(todo.id, todo.isDone)}
      taskEdit={(text) => taskEdit(todo.id, text)}
      isDone={todo.isDone}
      taskDone={() => taskDone(todo.id)}
      date={todo.date}
    />
  ))

  return <ul className='todo-list'>{list}</ul>
}

TaskList.propsTypes = {
  todos: PropTypes.shape({
    id: PropTypes.string,
    isDone: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
    text: PropTypes.string,
  }),
}

export default TaskList
