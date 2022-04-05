import React from 'react'
import Header from '../Header/Header'
import './main.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import Sidebar from '../Sidebar/Sidebar'

function Main() {
  const WithTitle = props => {
    const Body = props.bodyComponent || null
    return (
      <>
        <Header title={props.title} />
        <Sidebar />
        <div className='main'>{props.bodyComponent && <Body />}</div>
      </>
    )
  }
  return (
    <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/home' element={<WithTitle bodyComponent={Home} title='Home' />} />
      <Route path='/recent' element={<WithTitle title='Recent' />} />
      <Route path='/sent' element={<WithTitle title='Sent' />} />
      <Route path='/uploaded' element={<WithTitle title='Uploaded' />} />
      <Route path='/drafts' element={<WithTitle title='Drafts' />} />
      <Route path='/deleted' element={<WithTitle title='Deleted' />} />
    </Routes>
  )
}

export default Main
