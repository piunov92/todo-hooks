import React from 'react'

import './NewTaskForm.scss'

const TaskInput = ({ className, placeholder, submit }) => {
  const [fieldValue, setFieldValue] = React.useState('')
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

export default TaskInput
