/* eslint-disable no-nested-ternary */
import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import TaskInput from '../NewTaskForm/NewTaskForm'

import './Task.scss'

function Task({ todoText, date, taskDestroy, taskEdit, taskDone, isDone }) {
  const [isEditing, setEdited] = React.useState(false)

  return (
    <li className={isDone ? 'completed' : isEditing ? 'editing' : null}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={isDone}
          onChange={taskDone}
        />
        <label htmlFor='task'>
          <span onChange={taskDone} className='description'>
            {todoText}
          </span>
          <span className='created'>
            {`created ${formatDistanceToNow(date, {
              includeSeconds: true,
              addSuffix: true,
            })}`}
          </span>
        </label>
        <button
          className='icon icon-edit'
          onClick={() => setEdited(true)}
          type='button'
        />
        <button
          className='icon icon-destroy'
          onClick={taskDestroy}
          type='button'
        />
      </div>
      {isEditing && (
        <TaskInput
          className='edit'
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

Task.propsTypes = {
  todoText: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  taskDestroy: PropTypes.func,
  taskEdit: PropTypes.func,
  taskDone: PropTypes.func,
  isDone: PropTypes.bool,
}

export default Task
