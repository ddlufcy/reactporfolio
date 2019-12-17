import React from 'react';
import './componentCSS/Page4.css';
import AQIAPI from './assets/API Screenshot.png';
import Loan from './assets/Loan (1).png';
import Weight from './assets/WeightConverter.png';
import Task from './assets/TaskList.png';
import BlueBadge from './assets/BlueBadge.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import SvgIcon from '@material-ui/icons/GitHub';


const Page4 = () => {
    return(
        <div className="linkedPage">
             <div className="page4 ">
               <h3>Projects</h3>  
                <div className="projects">
                      <a href="https://ddlufcy-api-project.firebaseapp.com/"><img id="aqi" src={AQIAPI} alt="aqi" /><p>generic placeholder text</p></a> 
                      <a href="https://ddlufcy.github.io/Loan-Calculator/"><img  id="loan" src={Loan} alt="loan"/> <p>generic placeholder text</p></a> 
                      <a href="https://ddlufcy.github.io/Weight-Converter/"><img id="weight" src={Weight}  alt="weight" /> <p>generic placeholder text</p></a>
                      <a href="https://ddlufcy.github.io/Task-List/"><img id="task" src={Task}  alt="task" /> <p>generic placeholder text</p></a>
                      <a href="https://github.com/ddlufcy/blueBadgeClient"><img id="blueBadge" src={BlueBadge}  alt="blue badge" /> <p>generic placeholder text</p></a> 
                      <a href="https://github.com/ddlufcy"> <SvgIcon id="git"component={GitHubIcon} alt="github" />
                       <figcaption>Many more projects on my GitHub</figcaption></a>

               </div>
            </div>
        </div>
    )
}
export default Page4;