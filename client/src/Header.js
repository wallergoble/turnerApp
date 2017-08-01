import React from 'react';

import { Link } from 'react-router-dom';

const Header = () =>
    <div className="jumbotron header-container">
        <h1> Turner Movie Database </h1>
        <nav className="navbar">
            <Link className="nav-item nav-link btn" to="/">
                {' '}Search{' '}
            </Link>
            <Link className="nav-item nav-link btn" to="/allMovies">
                {' '}All Movies{' '}
            </Link>
            <Link className="nav-item nav-link btn" to="/about">
                {' '}About{' '}
            </Link>
        </nav>
    </div>;

export default Header;
