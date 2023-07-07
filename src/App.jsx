import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard, Home, Login, Register } from './pages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <section className='h-screen w-screen overflow-y-scroll'>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/login' element={<Login/>} />
        <Route index path='/register' element={<Register/>} />
        <Route index path='/dashboard' element={<Dashboard/>} />

        <Route index path='/all-jobs' element={<Dashboard/>} />
        <Route index path='/add-job' element={<Dashboard/>} />
        <Route index path='/profile' element={<Dashboard/>} />
      </Routes>
        <ToastContainer position='top-center'/>
    </section>
  )
}

export default App
