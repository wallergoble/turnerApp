import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => (
    <div>
        <h1> Turner Movie Database </h1>
        <nav>
            <Link to='/'> Search </Link>
            <Link to='/allMovies'> All Movies </Link>
            <Link to='/about'> About </Link>
        </nav>
    </div>
)

export default Header