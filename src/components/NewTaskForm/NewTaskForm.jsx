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

  return (
    <>
      <form
        className='header-form'
        onSubmit={(e) => {
          e.preventDefault()
          submit(fieldValue, setFieldValue)
        }}
      >
        <input
          className={className}
          placeholder={placeholder}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
        />
      </form>
      {editTodoStatus && <TimeForm className={className} setTime={setTime} />}
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
