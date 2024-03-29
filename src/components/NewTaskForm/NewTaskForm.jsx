import React from 'react'

import './NewTaskForm.scss'

const TaskInput = ({addTodo}) => {
  const [fieldValue, setFieldValue] = React.useState('')
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addTodo(fieldValue)
        setFieldValue('')
      }}
    >
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={fieldValue}
        onChange={(e) => setFieldValue(e.target.value)}
      />
    </form>
  )
}

export default TaskInput
