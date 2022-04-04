import React from 'react'
import './header.css'

function Header({ title }) {
  return (
    <div className='header bg-primaryBg px-4 py-2 flex items-center'>
      <div>{title}</div>
    </div>
  )
}

export default Header
