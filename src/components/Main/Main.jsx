import React, { useState } from 'react'
import Header from '../Header/Header'
import Modal from '../Modal'
import './main.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'

function Main() {
  const WithTitle = props => {
    const Body = props.bodyComponent || null
    return (
      <>
        <Header title={props.title} />
        <div className='main'>{props.bodyComponent && <Body />}</div>
      </>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<WithTitle bodyComponent={Home} title='Home' />} />
      <Route path='/recent' element={<WithTitle title='Recent' />} />
    </Routes>
  )
}

export default Main
