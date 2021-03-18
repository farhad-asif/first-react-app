import React from 'react';
import welcomebg from '../assets/images/city.jpg';
import '../assets/css/welcome.css';

function welcome() {
    return (
        <div id="welcome" className="sec-pad welcome" style={ {backgroundImage: `url(${welcomebg})` }}>
            <div className="wrapper we-text-center welcome-cover">
                <div className="welcome-inner">
                    <h2>160 stories about 160 storeys!</h2>
                    <h1>burj  khalifa</h1>
                    <div className="welcome-btn">
                        <a href="#" className="btn">BOOK NOW</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default welcome
