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
        <label htmlFor='view'>
          <span onChange={taskDone} className='description'>
            {todoText}
          </span>
          <span className='description description--timer'>
            {/* <button className='icon icon-play' type='button'/> */}
            <label htmlFor='play' className='icon icon-play'>
              <input type='radio' id='play' />
            </label>
            {/* <button className='icon icon-pause' type='button' /> */}
            {/* 12:55 */}
          </span>
          <span className='created'>
            {`created ${formatDistanceToNow(date, {
              includeSeconds: true,
              addSuffix: true,
            })}`}
          </span>
        </label>
        <div className='view__buttons'>
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
        {/* <button
          className='icon icon-edit'
          onClick={() => setEdited(true)}
          type='button'
        />
        <button
          className='icon icon-destroy'
          onClick={taskDestroy}
          type='button'
        /> */}
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
