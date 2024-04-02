import React from 'react'
import PropTypes from 'prop-types'

import './NewTaskForm.scss'

function TaskInput({ className, placeholder, value, submit }) {
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
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      />
    </form>
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
