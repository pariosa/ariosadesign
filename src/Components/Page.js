import css from "../css/styles.css";  
import React, {useReducer, useContext, useEffect, useState} from 'react'; 
import {initialState, UIProvider, UIContext} from '../Store/UIContext'
import Introduction from "../Components/Introduction/Introduction"
import Portfolio from '../Components/Portfolio/Portfolio'
import About from "../Components/About/About"
import UIReducer from "../Reducers/UIReducer"
import Recipes from "../Components/Recipes/Recipes"
import Music from "../Components/Music/Music"

export default function Page(props) {
  const {state} = props;
  //const [activeChildren, setActiveChildren] = useState("about").
  const uiProvider = UIProvider(UIReducer, initialState, state);
  console.log(uiProvider);
  const activeTab = useContext(UIContext); 
  return (
    <>
      { state.activeTab === "nav-item-main" ? 
        <Introduction state={state}  />
      :
      ""
      }
    { state.activeTab === "nav-item-about" ? 
      <About/>
      :
      ""
      }
       { state.activeTab === "nav-item-portfolio" ? 
      
      <Portfolio/>
      :
      ""
      }
       { state.activeTab === "nav-item-music" ? 
      <Music />
      :
      ""
      }
       { state.activeTab === "nav-item-recipes" ? 
      <Recipes />
      :
      ""
      }
    </>
  )
} 