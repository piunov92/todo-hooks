import React from 'react'
import Task from '../Task/Task'

import './TaskList.scss'

const TaskList = ({ todos, taskDestroy, taskEdit }) => {
  const list = todos.map((todo) => (
    <Task
      key={todo.id}
      todoText={todo.text}
      taskDestroy={() => taskDestroy(todo.id)}
      taskEdit={(text) => taskEdit(todo.id, text)}
    />
  ))

  return <ul className="todo-list">{list}</ul>
}

export default TaskList
