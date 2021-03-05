import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { AiOutlineHome, AiTwotoneCalendar} from 'react-icons/ai';

function Main () {


    return (
        <>
            <div className="main-container">
                <div className="card card-one-third">
                    <div className="text-container">
                        <p className="text">TBOSS</p>
                        
                    </div>
                    <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">(TBOSS</p>
                    </div>
                    <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">(TBOSS</p>
                    </div>
                </div>
                <div className="card card-one-third">
                    <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">TBOSS</p>
                    </div>
                </div>
                <div className="card card-one-third">
                    <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">TBOSS</p>
                    </div>
                </div>
            </div>
            <div className="main-container two">
                <div className="card card-one-thirds">
                <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">TBOSS</p>
                    </div>
                </div>
                <div className="card card-two-thirds">
                <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">TBOSS</p>
                    </div>
                </div>
            </div>
            <div className="main-container three">
            <div className="card">
                <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">TBOSS</p>
                    </div>
                </div>                
                <div className="card card-full">
                    <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">TBOSS</p>
                    </div>
                </div>
            </div>
            <div className="main-container four">
                <div className="card map-card">
                    <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">TBOSS</p>
                    </div>
                </div>
                <div className="card card-two-thirds">
                    <div className="text-container">
                        <p className="text">TBOSS</p>
                        <p className="text">TBOSS</p>
                    </div>
                </div>
            </div>
        </>  
    )
};

export default Main;
