import React, { useState } from 'react'
import Modal from '../Modal'
import './main.css'

function Main() {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState('')
  const Card = ({ title, className }) => (
    <div className={`card ${className}`}>
      <div className='card-head'>
        <div>{title}</div>
        <button
          onClick={() => {
            setOpen(true)
            setContent(title)
          }}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z' />
          </svg>
        </button>
      </div>
    </div>
  )
  return (
    <div className='main'>
      <Card title='Files' className='files' />
      <Card title='Info' className='info' />
      <Card title='Content' className='content' />
      {open && <Modal title={content} onClose={() => setOpen(false)} />}
    </div>
  )
}

export default Main
