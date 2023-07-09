import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ErrorImg from '../assets/images/not-found.svg'

const Error404 = () => {
    const navigate = useNavigate()

    const navigateBack = () => navigate(-1)

    return (
        <section className='p-5 max-w-[30rem] mx-auto md:max-w-[40rem]'>

            <div className='text-center'>
                <img src={ErrorImg} alt="not-found" />
                <h2 className='text-3xl text-gray-800 tracking-wider mt-7'>Ohh! Page Not Found</h2>
                <p className='text-gray-500 py-2'>We can't seem to find the page you're looking for</p>
                <Link onClick={navigateBack} className='text-primary500 underline tracking-wider'>Back Home</Link>
            </div>
        </section>
    )
}

export default Error404