import React from 'react';
import './App.css';

import Header from './Header';
import Main from './Main';
import ScriptTags from './ScriptTags';

const App = () =>
    <div className="app-container">
        <Header />
        <Main />
        <ScriptTags />
    </div>;

export default App;
