import css from "../../css/styles.css";  
import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
 export default function Website(props) {
    const {
        title,
        link,
        className,
        githubLink,
        description,
        technologies,
        technologiesIcons, 
    } = props.props; 
    const getTechnologies = (technology) =>technology.map(technologyItem=>
        <li className="list-item">
            {technologyItem}
        </li> 
    );
    const getIcons = (techIcons) => technologiesIcons.map(icon =>{
        return(
        <li className="list-item list-icon"> 
            <FontAwesomeIcon icon={icon} size="2x"/> 
        </li>
        )
    }
    );
  return (
    <div className="website">
       <div className="website-title">
           <h2>{title}</h2>
       </div>
       <div className="website-link">
           {link!==""?
            <a href={link}><h3>{link}</h3></a>
           :
           ""}
          
       </div>
       <div className="website-github">
       <a href={githubLink}><h3>{githubLink}</h3></a>
       </div>
       <div className="website-description">
           <h4>{description}</h4>
       </div>
       <h5> utilizing: </h5>
       <ul className="website-technologies">
           {getTechnologies(technologies)}
       </ul>
       <div className="website-technologies-icons"> 
        <ul>
           {getIcons(technologiesIcons)}
        </ul>
       </div>
       <div className="website-screenshot">
           <div className={className} />

       </div>
    </div>
  )
} 