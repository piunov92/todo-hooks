import React from 'react'

import './TaskFilter.scss'

const TaskFilter = ({ filter, onChangeFilter }) => {

  const checkFilter = (filterStatus) => filter === filterStatus
  
  return (
    <ul className="filters">
      <li>
        <button
          className={checkFilter('All') ? 'selected' : null}
          onClick={() => onChangeFilter('All')}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={checkFilter('Active') ? 'selected' : null}
          onClick={() => onChangeFilter('Active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={checkFilter('Completed') ? 'selected' : null}
          onClick={() => onChangeFilter('Completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TaskFilter
