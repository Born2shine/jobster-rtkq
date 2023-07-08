import { Link } from "react-router-dom"
import { LOGO, MAIN_IMG } from "../assets"

const Home = () => {
  return (
    <section className='px-5 md:px-10 lg:px-4 lg:w-[85%] lg:mx-auto'>
      <header className="pt-6">
        <nav>
          <img src={LOGO} alt="" />
        </nav>
      </header>
      <main className="mt-16 md:mt-32 lg:mt-0">
        <section className="lg:grid lg:grid-cols-2 lg:items-center">
          <aside>
            <h1 className="font-extrabold text-3xl font-headingFont md:text-[2.5rem lg:text-4xl">Job <span className="text-primary500 leading-[1.3]"> Tracking </span> App </h1>
            <div className="text-justif w-[23em] my-6 text-gray-600 md:w-[48ch]">
              Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.
            </div>
            <Link to='/login' className="bg-primary500 p-[.72rem] px-6 rounded-r25 shadow-shadow3 text-isWhite transition-all duration-500 ease-in-out hover:bg-primary700 font-bold tracking-wider text-md">Login/Register</Link>
          </aside>
          <aside className="hidden lg:block">
            <img src={MAIN_IMG} className="w-[%]" alt="main-img" />
          </aside>
        </section>
      </main>
    </section>
  )
}

export default Home