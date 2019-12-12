import React from 'react';


const Footer = () => {
    const footerStyle={
        'color': '#f8f8f8',
        'position': 'fixed',
        'bottom': '0',
        'text-align': 'center'
    }
    return(
        <div style={footerStyle} className="footer">
              <h5 >Made with &hearts; by Daniel Lufcy 2019</h5>
        </div>  
    )
}
export default Footer;