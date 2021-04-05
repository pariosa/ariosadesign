import css from "../css/styles.css";  
import React, { useReducer, useContext } from 'react'; 
import { updateActiveTab } from "../Actions/UIActions";
import { UIProvider, UIContext, initialState } from "../Store/UIContext";
import UIReducer from '../Reducers/UIReducer';

const mapDispatch = {
 updateActiveTab
}

export default function Navigation() {
  const actions = mapDispatch;
  const [activeTab, dispatch] = useReducer(UIReducer);
  
  //console.log(state);
  const state = useContext(UIContext);
  return (
    <UIProvider initialState={initialState} reducer={UIReducer} dispatch={dispatch}>
      <nav className="navigation">
        <ul className="navItems">
          <li id="nav-item-main" onClick={()=>{ 
              dispatch(actions.updateActiveTab("nav-item-main"))
            }
          } className={`
          nav-item ${state && state.activeTab === "nav-item-main" ? "active" : "inactive"} nav-item-about`}>
            <div className="cat"></div>
             Peter Ariosa 
          </li>
          <li onClick={()=>{ 
              dispatch(actions.updateActiveTab("nav-item-about"))
            }
          } className={`
            nav-item ${state && state.activeTab === "nav-item-about" ? "active" : "inactive"} nav-item-about
          `}>
            <div className="cat"></div>
              About
          </li>   
          <li onClick={()=>{ 
              dispatch(actions.updateActiveTab("nav-item-portfolio"))
            }
          } className={`    
          nav-item ${state && state.activeTab === "nav-item-portfolio" ? "active" : "inactive"} nav-item-about`
          }>
            <div className="cat"></div>
              Portfolio
          </li>
        </ul>
      </nav>
    </UIProvider>
  )
}