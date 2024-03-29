import React from 'react'
import TaskInput from '../NewTaskForm/NewTaskForm'

import './Task.scss'

const Task = ({ todoText, taskDestroy, taskEdit }) => {
  const [isCompleted, setCompleted] = React.useState(false)
  const [isEditing, setEdited] = React.useState(false)

  return (
    <li className={isCompleted ? 'completed' : isEditing ? 'editing' : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isCompleted}
          onChange={() => setCompleted(!isCompleted)}
        />
        <label>
          <span
            onClick={() => setCompleted(!isCompleted)}
            className="description"
          >
            {todoText}
          </span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => setEdited(true)}
        ></button>
        <button className="icon icon-destroy" onClick={taskDestroy}></button>
      </div>
      {isEditing && (
        <TaskInput
          className={'edit'}
          placeholder={''}
          submit={(state, setState) => {
            taskEdit(state)
            setState('')
            setEdited(!isEditing)
          }}
        />
      )}
    </li>
  )
}

export default Task
