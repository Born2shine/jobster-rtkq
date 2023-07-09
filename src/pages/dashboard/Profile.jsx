import React from 'react'
import { HeroContainer } from '../../components'

const Profile = () => {
    return (
        <section className="h-screen">
            <HeroContainer title="Profile">
                <section className="mt-5">
                    <form action="">
                        <div className="grid gap-y-3.5 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-gray-800 tracking-wider block"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    value='test user'
                                    className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="text-gray-800 tracking-wider block"
                                >
                                    Last Name 
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    value='shake and bake'
                                    className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                                />
                            </div>
                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="text-gray-800 tracking-wider block"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    value='testUser@test.com'
                                    className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                                />
                            </div>
                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="text-gray-800 tracking-wider block"
                                >
                                    Location
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    value='vegan food truck'
                                    className="bg-isGrey50 border border-isGrey200 rounded-r25 pl-3 p-[0.18rem] mt-1 w-full focus:outline-none focus:border-gray-700 focus:border-[1.5px]"
                                />
                            </div>
                            <div className="mt-4 md:mt-0">
                                <button className="p-[0.2rem] w-full h-fit text-isWhite bg-primary500 rounded-r25 shadow-shadow3 tracking-wider hover:bg-primary800 hover:text-isWhite transition duration-500 ease-in-out md:mt-8">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </HeroContainer>
        </section>
    )
}

export default Profile