import PropTypes from 'prop-types'

import './TaskFilter.scss'

function TaskFilter({ filter, onChangeFilter }) {
  const checkFilter = (filterStatus) => filter === filterStatus

  return (
    <ul className='filters'>
      <li>
        <button
          type='button'
          className={checkFilter('All') ? 'selected' : null}
          onClick={() => onChangeFilter('All')}
        >
          All
        </button>
      </li>
      <li>
        <button
          type='button'
          className={checkFilter('Active') ? 'selected' : null}
          onClick={() => onChangeFilter('Active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type='button'
          className={checkFilter('Completed') ? 'selected' : null}
          onClick={() => onChangeFilter('Completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TaskFilter.propsTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
}

TaskFilter.defaultProps = {
  filter: 'All',
}

export default TaskFilter
