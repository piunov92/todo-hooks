import React from 'react'

import './TaskFilter.scss'

const TaskFilter = ({completed, active}) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button onClick={active}>Active</button>
      </li>
      <li>
        <button onClick={completed}>Completed</button>
      </li>
    </ul>
  )
}

export default TaskFilter
