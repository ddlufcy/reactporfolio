import React from 'react';
import './componentCSS/Footer.css';
import SvgIcon from '@material-ui/core/SvgIcon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer = () => {
    
    return(
        <div className="footer">
                 <h5>Made with &hearts; by Daniel Lufcy 2019</h5>
                 <a href="https://www.linkedin.com/in/daniel-lufcy-93903a17b/">
                  <SvgIcon className="icon" component={LinkedInIcon} />
                 </a>
                 <a href="https://github.com/ddlufcy">
                  <SvgIcon className="icon" component={GitHubIcon} />
                 </a>
        </div>  
    )
}
export default Footer;