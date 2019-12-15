import React from 'react';
import './componentCSS/page3.css';
import reactPic from './assets/react.png';
import javaScript from './assets/javascript.png';
import  html5 from './assets/html5.png';
import angular from './assets/angular.png';
import css3 from './assets/css3.png';
import express from './assets/express.png';
import nodejs from './assets/nodejs.png';
import postgres from './assets/postgres.png';

const Page3 = () => {
    return(
        <div className ="linkedPage">
            <div className="page3 card skills">
               <h3>Skills</h3>  
                <div className="skillLogos">
                  <span><img id="reactLogo" src={reactPic} /> <br /> <figcaption>React</figcaption></span>
                  <span><img id="javaScriptLogo" src={javaScript} /> <br />  <figcaption>JavaScript</figcaption></span>
                  <span><img id="HtmlLogo" src={html5} /> <br />  <figcaption>Html5</figcaption></span>
                  <span><img id="angularLogo" src={angular} /> <br />  <figcaption>Angular</figcaption></span>
                  <span><img id="css3Logo" src={css3} /><br />   <figcaption>CSS3</figcaption></span>
                  <span><img id="expressLogo" src={express} /><br />   <figcaption>Express JS</figcaption></span>
                  <span><img id="nodejsLogo" src={nodejs} /><br />   <figcaption>Node JS</figcaption></span>
                  <span><img id="postgresLogo" src={postgres} /> <br />  <figcaption>PosgreSQL</figcaption></span>
                </div>
            </div>
           
        </div>
    )
}
export default Page3;