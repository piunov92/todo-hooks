import React from 'react'

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

export default Footer
