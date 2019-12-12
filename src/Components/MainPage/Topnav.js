import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import './componentCSS/Nav.css';



const Topnav = () => {
    const navStyle = {
        'color': '#f8f8f8',
        'text-decoration': 'none',
        'font-size': '1.2em'
    };
    return(
        <div className="topNavBar">

        <div className="navbar-header"></div>
           <div className="navLinks">
                   <h4><Link to="/" style={navStyle}activeStyle={{color: 'tomato'}}>Home</Link></h4>
                   <h4><Link to="/Page2"style={navStyle}activeStyle={{color: 'tomato'}}>About</Link></h4>
                   <h4><Link to="/Page3" style={navStyle}activeStyle={{color: 'tomato'}}>Skills</Link></h4>
                   <h4><Link to="/Page4" style={navStyle}activeStyle={{color: 'tomato'}}>Contact</Link></h4>   
           </div>
         
           <div className="navRoutes">
               <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/Page2"><Page2 /></Route>
                <Route exact path="/Page3"><Page3 /></Route>
                <Route exact path="/Page4"><Page4 /></Route>
               </Switch>
           </div>
        </div>
        
    )
};

export default Topnav;