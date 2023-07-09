import React from 'react'

const HeroContainer = ({title, children}) => {
    return (
        <section className="p-10 bg-isWhite rounded-r25 shadow-shadow2 hover:shadow-shadow3">
            <h1 className="tracking-wider text-3xl text-gray-800">{title}</h1>
            {children}
        </section>
    )
}

export default HeroContainer