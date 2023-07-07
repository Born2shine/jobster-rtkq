import { useWindowSize } from '@react-hookz/web/esm/useWindowSize';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { LOGO } from '../../assets';
import { useState } from 'react';
import { MobileNav, Sidebar } from '../../components';
import { toggleNavbar, toggleShowLogoutBtn } from '../../features/slugSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { showSidebar, showLogoutBtn } = useSelector((state) => state.slug)
  const dispatch = useDispatch()
  const { width } = useWindowSize()


  return (
    <main className='relative'>
      <section className='md:flex'>
        {!showSidebar && width <= 767 && <MobileNav />}
        <Sidebar />

        <main className='w-full'>
          <header className='px-7 h-[6rem] bg-isWhite border-b flex justify-between items-center md:px-12'>
            <span className='text-3xl text-primary500 cursor-pointer' onClick={() => dispatch(toggleNavbar())}><FaAlignLeft /></span>
            <img className='w-[25%] md:hidden' src={LOGO} alt="logo" />
            <h1 className='hidden md:block tracking-widest text-gray-800 text-2xl'>Dashboard</h1>
            <div className='relative'>
              <div className='flex items-center gap-x-2 text-isWhite px-3 bg-primary500 rounded-r25 shadow-shadow3 cursor-pointer hover:bg-primary700 transition-all ease-in-out duration-500' onClick={() => dispatch(toggleShowLogoutBtn())}>
                <span> <FaUserCircle /></span>
                <span className='capitalize tracking-wider'>Test User</span>
                <span> <FaCaretDown /></span>
              </div>
                <Link to='/' className={` ${showLogoutBtn ? 'block' : 'hidden'} absolute left-0 -bottom-12 w-full text-center p-[.35rem] rounded-r25 bg-primary100 shadow-shadow3 text-primary600 tracking-wider`}>Logout</Link>
            </div>
          </header>
        </main>
      </section>
    </main>
  )
}

export default Dashboard