import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';

import Navigation from './navigation.jsx';
import Title from './title.jsx';
import Main from './main.jsx';

function App () {


    return (
        <>
            <Navigation />
            <Title />
            <Main />
        </>    
    )
};

export default App;
