import React from 'react'
import { Link } from 'react-router-dom'
import { AuthenticationWrapper } from '../components'
import { flashMessage as flash} from '../utils/helpers/flashMessage'

const Login = () => {
    // flash('error', 'success loading..')
    return (
        <AuthenticationWrapper>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="email" className='text-gray-800 tracking-wider block'>Email</label>
                        <input type="text" placeholder='' className='bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]' />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="password" className='text-gray-800 tracking-wider block'>Password</label>
                        <input type="text" placeholder='' className='bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]' />
                    </div>
                    <div className='mt-10 mb-3'>
                        <button className='p-1 w-full text-isWhite bg-primary500 rounded-r25 shadow-shadow3 tracking-wider hover:bg-primary700 transition duration-500 ease-in-out'>Submit</button>
                        <button className='p-1 mt-4 w-full text-primary500 bg-primary200 rounded-r25 shadow-shadow4 tracking-wider hover:bg-primary700 transition duration-500 ease-in-out hover:text-isGrey50'>Demo App</button>

                        <p className='text-center mt-3 text-gray-800'>Not a member yet? <Link to='/register' className='text-primary500'>Register</Link></p>
                    </div>
                </form>
            </div>
        </AuthenticationWrapper>
    )
}

export default Login