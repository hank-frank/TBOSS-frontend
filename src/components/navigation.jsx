import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { AiOutlineHome, AiTwotoneCalendar} from 'react-icons/ai';

function Navigation () {


    return (
        <div className="nav-container">
            <div className="icon-container">
                <AiOutlineHome className="home-icon"/>
            </div>
            <a href="https://www.schedulicity.com/scheduling/SVA6BT" target="_blank" className="icon-container">
                <AiTwotoneCalendar className="home-icon"/>
            </a>
        </div>    
    )
};

export default Navigation;
