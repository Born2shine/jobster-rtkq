import { useWindowSize } from '@react-hookz/web'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LOGO } from '../../assets'
import links from '../../utils/data/links'

const Sidebar = () => {
    const { showSidebar } = useSelector((state) => state.slug)
    const { width } = useWindowSize()

    const defaultLink = 'capitalize py-4 px-10 flex gap-4 items-center transition-all duration-200 ease-in hover:bg-gray-100 hover:px-12'
    const activeLink = defaultLink + ' text-primary500'

    return (
        <aside className={`hidden py-5 bg-isWhite  md:block ${!showSidebar && width >= 768 ? 'px-0 md:w-0' : 'md:w-[25%]'} h-screen transition-all ease-out duration-500`}>
            <img className='px-10' src={LOGO} alt="logo" />
            <section className={`border- ${!showSidebar && width >= 768 ? 'hidden' : ''}`}>
                <div className='mt-10'>
                    {
                        links.map(({ id, text, path, icon }) => (
                            <div key={id} className='text-gray-500'>
                                <NavLink to={path} className={({ isActive }) => (isActive ? activeLink : defaultLink)}>
                                    {({ isActive }) => (
                                        <>
                                            <span className='text-2xl'>{icon}</span>
                                            <span className={isActive ? 'text-gray-700' : ''}>{text}</span>
                                        </>
                                    )}
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </section>
        </aside>
    )
}

export default Sidebar