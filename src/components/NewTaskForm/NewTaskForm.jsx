import React from 'react'
import PropTypes from 'prop-types'

import './NewTaskForm.scss'

const TaskInput = ({ className, placeholder, value, submit }) => {
  const [fieldValue, setFieldValue] = React.useState(value)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        submit(fieldValue, setFieldValue)
      }}
    >
      <input
        className={className}
        placeholder={placeholder}
        autoFocus
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      />
    </form>
  )
}

TaskInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  submit: PropTypes.func.isRequired,
}

TaskInput.defaultTypes = {
  placeholder: null,
}

export default TaskInput
