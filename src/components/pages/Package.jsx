import React from 'react';
import '../assets/css/package.css';
import pimage1 from '../assets/images/tower1.jpg';
import pimage3 from '../assets/images/tower3.jpg';
import packagebg from '../assets/images/delicious.jpg';

function Package() {
    return (
        <div id="package" className="package sec-pad" style={{backgroundImage:`url(${packagebg})`}}>
            <div className="wrapper">
                <div className="package-inner">
                    <div className="we-row">
                        <div className="we-col-4 package-child package-box">
                            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum amet voluptatum nulla fugiat sapiente quaerat et assumenda porro! Vero, tenetur?</p>
                            <a href="#" className="btn">view all</a>
                        </div>
                        <div className="we-col-4 package-child">
                            <img src={pimage1} alt="image"/>
                        </div>
                        <div className="we-col-4 package-child">
                            <img src={pimage3} alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Package;

