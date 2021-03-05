import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { AiOutlineHome, AiTwotoneCalendar} from 'react-icons/ai';

function Title () {


    return (
        <div className="title-container">
            <h4 className="site-title">TBOSS</h4>
        </div>    
    )
};

export default Title;
