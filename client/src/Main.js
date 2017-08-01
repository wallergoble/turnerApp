import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Search from './Search'
import Title from './Title'
import AllMovies from './AllMovies'
import About from './About'


const Main = () => (
    <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/title/:titleId" component={Title} />
        <Route exact path="/AllMovies" component={AllMovies} />
        <Route exact path="/about" component={About} />
    </Switch>
)

export default Main