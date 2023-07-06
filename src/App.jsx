import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from './pages'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <section className='h-screen w-screen overflow-y-scroll'>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/login' element={<Login/>} />
        <Route index path='/register' element={<Register/>} />
      </Routes>
        <ToastContainer position='top-center'/>
    </section>
  )
}

export default App
