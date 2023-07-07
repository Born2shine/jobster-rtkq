import React from 'react'
import { LOGO } from '../../assets'
import { Link } from 'react-router-dom'

const AuthenticationWrapper = ({children}) => {
  return (
    <section className='px-5 py-12 h-screen overflow-y-scroll'>
            <div className='bg-isWhite px-9 py-5 rounded-r25 shadow-shadow3 border-t-[5px] border-t-primary500 md:max-w-[400px] md:mx-auto md:px-10'>
                <div className="grid place-content-center mt-2 text-center">
                    <Link to='/'>
                        <img src={LOGO} alt="logo" />
                    </Link>
                    <h1 className='text-3xl my-7 tracking-wider'>Login</h1>
                </div>
                {children}
            </div>
        </section>
  )
}

export default AuthenticationWrapper