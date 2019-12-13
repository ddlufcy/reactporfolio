import React from 'react';
import Pic from './assets/willchestnut.jpg';

import './componentCSS/Page2.css';
const Page2 = () => {
    return(
        <div className="linkedPage">
          <div className="page2 card about">
            <h2>
                <h4>About</h4>
                <div className="bioText">
                <p>Hi, I'm Daniel Lufcy. I'm a fullstack JavaScript developer in Indianapolis. I love to build things that people love to use. Feel free to reach out if you would be interested in using me for your next project.</p>
                </div>
                <img id="profilePic" src={Pic} />
            </h2>
         </div>
        </div>
    )
}
export default Page2;