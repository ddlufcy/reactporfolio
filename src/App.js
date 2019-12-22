import React from 'react';
import './App.css';
import Footer from './Components/MainPage/Footer';
import Topnav from './Components/MainPage/Topnav';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
     <Router>
      <Topnav />
     </Router>   
    
    </div>
    
  );
}

export default App;
