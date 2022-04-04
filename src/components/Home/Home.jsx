import React, { useState } from 'react'
import Modal from '../Modal'
import BarChartComp from './BarChartComp'

function Home() {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState('')
  const Card = ({ title, className, children }) => (
    <div className={`card ${className}`}>
      <div className='card-head text-lg'>
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
      {children}
    </div>
  )
  return (
    <div className='h-full home'>
      <Card title='Files' className='files bg-secondary' />
      <Card title='Info' className='info bg-secondary'>
        <BarChartComp />
      </Card>
      <Card title='Content' className='content bg-secondary' />
      {open && (
        <Modal title={content} onClose={() => setOpen(false)}>
          <BarChartComp />
        </Modal>
      )}
    </div>
  )
}

export default Home
