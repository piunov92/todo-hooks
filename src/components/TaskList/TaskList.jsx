import PropTypes from 'prop-types'
import Task from '../Task/Task'

import './TaskList.scss'

function TaskList({
  todos,
  taskDestroy,
  taskEdit,
  editTodoStatus,
  taskDone,
  todoTimer,
  time,
}) {
  const list = todos.map((todo) => (
    <Task
      key={todo.id}
      id={todo.id}
      todoText={todo.text}
      taskDestroy={() => taskDestroy(todo.id, todo.isDone)}
      taskEdit={(text) => taskEdit(todo.id, text)}
      editTodoStatus={(isEditing) => editTodoStatus(isEditing)}
      isDone={todo.isDone}
      taskDone={() => taskDone(todo.id)}
      date={todo.date}
      todoTimer={(seconds, isTime) => todoTimer(todo.id, seconds, isTime)}
      seconds={todo.seconds}
      isTimeUpdate={todo.isTimeUpdate}
      time={time}
    />
  ))

  return <ul className='todo-list'>{list}</ul>
}

TaskList.propsTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      isDone: PropTypes.bool,
      date: PropTypes.instanceOf(Date),
      text: PropTypes.string,
    }),
  ),
}

TaskList.defaultProps = {
  todos: {},
}

export default TaskList
