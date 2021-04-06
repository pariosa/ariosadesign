import css from "../../css/styles.css";  
import React, {useReducer, useContext, useEffect, useState} from 'react'; 
import {initialState, UIProvider, UIContext}from '../../Store/UIContext'
import UIReducer from "../../Reducers/UIReducer";
import { SocialIcon } from 'react-social-icons'
import Recipes from "../Recipes/Recipes"


export default function Introduction(props) { 
  const {state} = props;
  return (
    <>
      { state.activeTab === "nav-item-main" ? 
      <div className="page introduction"> 
        <h1 className="center">Hey, welcome to my website!</h1>
        <div className="page-text"> 



          <div className="social github">
            <SocialIcon url="https://github.com/pariosa" />
            <a className="github link" href="https://github.com/pariosa">Github</a>
          </div>

          <div className="social facebook">
            <SocialIcon url="https://www.facebook.com/Ariosadj-104327988434299/" />
            <a className="facebook link" href="https://www.facebook.com/Ariosadj-104327988434299/">Facebook</a>
          </div>

          <div className="social instagram">
            <SocialIcon url="https://www.instagram.com/ariosape/" />
            <a className="instagram link" href="https://www.instagram.com/ariosape/">Instagram</a>
          </div>

          <div className="social linkedin">
            <SocialIcon url="https://www.linkedin.com/in/peter-ariosa-760b372a/" />
            <a className="linkedin link" href="https://www.linkedin.com/in/peter-ariosa-760b372a/">Linkedin</a>
          </div>

          <div className="social youtube">
            <SocialIcon url="https://www.youtube.com/watch?v=-5pMNJ0MK2U&list=PLJ-47dnNMd_jke6l27GmEiDk5XJGcr_HE" />
            <a className="youtube link" href="https://www.youtube.com/watch?v=-5pMNJ0MK2U&list=PLJ-47dnNMd_jke6l27GmEiDk5XJGcr_HE">Youtube</a>
          </div>

          <div className="social tumblr">
            <SocialIcon url="https://ghettoblasting101.tumblr.com/"/>
            <a className="tumblr link" href="https://ghettoblasting101.tumblr.com/">Tumblr</a>
          </div>

          <div className="social twitter">
            <SocialIcon url="https://twitter.com/_w0xy" /> 
            <a className="twitter link" href="https://twitter.com/_w0xy">Twitter </a>
          </div>

          <div className="social soundcloud">
            <SocialIcon url="https://soundcloud.com/ariosa" />
            <a className="soundcloud link" href="https://soundcloud.com/ariosa">Soundcloud</a>
          </div>
          <div className="social mixcloud">
            <SocialIcon url="https://www.mixcloud.com/ariosa/" />
            <a className="mixcloud link" href="https://www.mixcloud.com/ariosa/">Mixcloud</a>
          </div>

          <div className="social email">
            <SocialIcon url="mailto:ariosa@gmail.com" />
            <a className="email link" href="mailto:ariosa@gmail.com">Email</a>
          </div>

        </div>
      </div>
         
      :
      ""
      }
    </>
  )
} 