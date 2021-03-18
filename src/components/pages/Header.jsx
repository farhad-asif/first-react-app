import React from 'react';
import logo from '../assets/images/favicon.png';
import '../assets/css/header.css';
import {Link } from "react-router-dom";


function header() {
    return (
        <header>
            <div className="header-area">
                <div className="wrapper">
                    <div className="we-row">
                        <div className="logo we-col-2" id="logo">
                
                            <Link to='#' alt="picture">
                                <img src={logo} alt='Logo' /> 
                                <span>JUICY</span>
                            </Link>
                        </div>
                        <div className="main-menu we-col-9">
                            <nav className="we-text-right"> 
                                <ul className="menu-ul">
                                    <li>
                                        <Link to='#' alt="picture"> HOME</Link>
                                    </li>
                                    <li>
                                        <Link to='#' alt="picture"> PPORTFOLIO</Link>
                                    </li>
                                    <li>
                                        <Link to='#' alt="picture"> SERVICES</Link>
                                    </li>
                                    <li>
                                        <Link to='#' alt="picture"> ABOUT US</Link>
                                    </li>
                                    <li>
                                        <Link to='#' alt="picture"> CONTACT</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default header;
