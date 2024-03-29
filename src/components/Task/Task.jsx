import React from 'react'

import './Task.scss'

const Task = ({ todoText, taskDestroy }) => {
  const [isCompleted, setCompleted] = React.useState(false)

  const completed = () => setCompleted(!isCompleted)

  return (
    <li className={isCompleted ? 'completed' : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isCompleted}
          onChange={() => completed()}
        />
        <label>
          <span onClick={() => completed()} className="description">
            {todoText}
          </span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={taskDestroy}></button>
      </div>
    </li>
  )
}

export default Task
