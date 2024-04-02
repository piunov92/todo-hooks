import React from 'react'
import PropTypes from 'prop-types'

import './Footer.scss'

const Footer = ({ counter, clearDone, children }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{counter} items left</span>
      {children}
      <button className="clear-completed" onClick={clearDone}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.element.isRequired,
  counter: PropTypes.number,
  clearDone: PropTypes.func.isRequired,
}

Footer.defaultProps = {
  counter: 0,
}
export default Footer
