import React from 'react'
import TaskInput from '../NewTaskForm/NewTaskForm'
import { formatDistanceToNow } from 'date-fns'

import './Task.scss'

const Task = ({ todoText, date, taskDestroy, taskEdit, taskDone, isDone }) => {
  const [isEditing, setEdited] = React.useState(false)

  return (
    <li className={isDone ? 'completed' : isEditing ? 'editing' : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isDone}
          onChange={taskDone}
        />
        <label>
          <span onClick={taskDone} className="description">
            {todoText}
          </span>
          <span className="created">{`created ${formatDistanceToNow(date, {
            includeSeconds: true,
            addSuffix: true,
          })}`}</span>
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
          value={todoText}
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
