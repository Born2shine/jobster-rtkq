import { FaAlignLeft, FaUserCircle, FaCaretDown, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import { LOGO } from '../../assets';
import links from '../../utils/data/links';
import { toggleNavbar } from '../../features/slug/slugSlice';
import { useDispatch } from 'react-redux';
import { useWindowSize } from '@react-hookz/web';

const MobileNav = () => {
    const dispatch = useDispatch()
    const { width } = useWindowSize()


    const handleNavlinkClicked = () => {
        if (width <= 768) {
            dispatch(toggleNavbar())
        }
    }

    const defaultLink = 'capitalize py-4 flex gap-4 items-center mx-12'
    const activeLink = defaultLink + ' text-primary500'
    return (
        <article className='bg-black bg-opacity-70 top-0 left-0 fixed h-screen w-screen px-6 py-4 md:px-9 z-10'>
            <div className='bg-isWhite h-full rounded-r25'>
                <span className='block absolut pt-5 pl-5 text-3xl text-isRedDark cursor-pointer' onClick={() => dispatch(toggleNavbar())}> <FaTimes /></span>
                <div className='grid place-content-center pt-6'>
                    <img src={LOGO} alt="logo" />
                    <div className='mt-10'>
                        {
                            links.map(({ id, text, path, icon }) => (
                                <div key={id} className='text-gray-500'>
                                    <NavLink to={path} className={({ isActive }) => (isActive ? activeLink : defaultLink)} onClick={handleNavlinkClicked}>
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
                </div>
            </div>
        </article>
    )
}

export default MobileNav