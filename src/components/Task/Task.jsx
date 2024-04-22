/* eslint-disable no-nested-ternary */
import { useState, useEffect, useRef } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import TaskInput from '../NewTaskForm/NewTaskForm'

import './Task.scss'

function Task({
  todoText,
  date,
  taskDestroy,
  taskEdit,
  taskDone,
  isDone,
  id,
  todoTimer,
  seconds,
}) {
  const [isEditing, setEdited] = useState(false)
  const [enabled, setEnabled] = useState(false)
  // const timeNow = useRef(null)
  // const currentTime = () =>
  //   (new Date().getHours() * 60 + new Date().getMinutes()) * 60 +
  //   new Date().getSeconds()
  const [timer, setTimer] = useState(seconds)
  const intervalId = useRef(null)

  const handleStart = () => {
    if (!enabled) {
      setEnabled((e) => !e)
    }
  }

  const handlePause = () => {
    if (enabled) {
      setEnabled((e) => !e)
    }
  }

  useEffect(() => {
    if (!enabled) return undefined
    intervalId.current = setInterval(() => {
      if (!isDone) {
        setTimer((t) => t + 1)
        todoTimer(timer + 1)
      } else {
        setTimer(0)
        todoTimer(0)
        setEnabled((e) => !e)
      }
    }, 1000)
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current)
      }
    }
  }, [timer, enabled, seconds, todoTimer, isDone])

  const s = () => `0${timer % 60}`.slice(-2)
  const m = () => Math.floor((timer / 60) % 60)
  const h = () => Math.floor((timer / 3600) % 24)

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
            <label htmlFor={`play_${id}`} className='icon icon-play'>
              <input
                type='radio'
                name={`radio_${id}`}
                id={`play_${id}`}
                onChange={handleStart}
              />
            </label>

            <label htmlFor={`pause_${id}`} className='icon icon-pause'>
              <input
                type='radio'
                id={`pause_${id}`}
                name={`radio_${id}`}
                onChange={handlePause}
              />
            </label>
            <span style={{ padding: 10 }}>{`${h()}:${m()}:${s()}`}</span>
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
