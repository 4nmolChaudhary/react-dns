import React, { useState } from 'react'
import { MinimalInput, Button } from '../components'
import { Link } from 'react-router-dom'

function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div className='col-span-full flex-col row-span-full flex justify-center items-center'>
      <div className='text-2xl mb-8'>Sign Up 🚀</div>
      <MinimalInput placeholder='eg.john@email.com' label='Email' w={24} value={email} onChange={setEmail} autoComplete='off' />
      <MinimalInput placeholder='eg.john@123' label='Username' w={24} value={username} onChange={setUsername} autoComplete='off' />
      <MinimalInput placeholder='xxxxxxxx' label='Password' w={24} value={password} onChange={setPassword} type='password' autoComplete='new-password' />
      <div className='flex justify-between mt-4' style={{ width: '23%' }}>
        <Link to='/login' className='bg-none border-none outline-none px-8 py-2 font-extrabold text-black'>
          Go to login page
        </Link>
        <Button variant='primary'>Sign Up</Button>
      </div>
    </div>
  )
}

export default Signup
