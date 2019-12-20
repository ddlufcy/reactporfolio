import React, {useState, useEffect} from 'react';
import './componentCSS/Footer.css';
import SvgIcon from '@material-ui/core/SvgIcon';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';



const Footer = () => {
    const [email, setEmail] = useState("")

    return(
        <div className="footer">
                 <h5>Made with &hearts; by Daniel Lufcy 2019</h5>
                 <a className="logo" href="https://www.linkedin.com/in/daniel-lufcy-93903a17b/">
                  <SvgIcon className="icon" component={LinkedInIcon} />
                 </a>
                 <a className="logo" href="https://github.com/ddlufcy">
                  <SvgIcon className="icon" component={GitHubIcon} />
                 </a>
                 <a id="mailIcon" onClick={() => setEmail("ddlufcy@gmail.com")} className="logo" >
                    <p id="emailName">{email}</p>
                     <SvgIcon className="icon" component={MailOutlineIcon} />
                 </a>
        </div>  
    )
}
 export default Footer;