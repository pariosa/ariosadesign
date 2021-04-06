import css from "../../css/styles.css";  
import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faReact, FANodejs, faFireAlt, faFire } from '@fortawesome/free-solid-svg-icons'

export default function Website(props) {
    const {
        title,
        link,
        githubLink,
        description,
        technologies,
        technologiesIcons,
        screenshot
    } = props.props;
    const getTechnologies = (technology) =>technology.map(technologyItem=>
        <li>
            {technologyItem}
        </li> 
    );
    const getIcons = (techIcons) => technologiesIcons.map(icon =>(
        <i className={`fas ${icon}`} icon={icon}></i>)
    );
  return (
    <div className="website">
       <div className="website-title">
           {title}
       </div>
       <div className="website-link">
           {link!==""?
            <a href={link}>Hosted Source</a>
           :
           ""}
          
       </div>
       <div className="website-github">
           {githubLink}
       </div>
       <div className="website-description">
           {description}
       </div>
       utilizing:
       <ul className="website-technologies">
           {getTechnologies(technologies)}
       </ul>
       <div className="website-technologies-icons">
       <i class='fas fa-fire-alt fa-lg'>fa-lg</i><br/>
           {getIcons(technologiesIcons)}
       </div>
       <div className="website-screenshot">
           <img src={screenshot} />

       </div>
    </div>
  )
} 