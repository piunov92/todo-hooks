/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react'
import PropTypes from 'prop-types'

import './NewTaskForm.scss'
import TimeForm from './TimeForm'

function TaskInput({
  className,
  placeholder,
  value,
  submit,
  setTime,
  editTodoStatus,
}) {
  const [fieldValue, setFieldValue] = useState(value)
  const [isSubmitTaskInput, setIsSubmitTaskInput] = useState(false)

  return (
    <>
      <form
        className='header-form'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            submit(fieldValue, setFieldValue)
            setIsSubmitTaskInput(true)
          } else {
            setIsSubmitTaskInput(false)
          }
        }}
      >
        <input
          className={className}
          placeholder={placeholder}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          value={fieldValue}
          onChange={(e) => {
            setFieldValue(e.target.value)
          }}
        />
      </form>
      {editTodoStatus && (
        <TimeForm
          className={className}
          setTime={setTime}
          isSubmitTaskInput={isSubmitTaskInput}
        />
      )}
    </>
  )
}

TaskInput.propsTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  submit: PropTypes.func.isRequired,
}

TaskInput.defaultTypes = {
  placeholder: '',
}

export default TaskInput
