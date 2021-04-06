import css from "../css/styles.css";  
import React, { useReducer, useContext } from 'react'; 
import { updateActiveTab, updateMeowingTab} from "../Actions/UIActions";
import { UIProvider, UIContext, initialState } from "../Store/UIContext";
import UIReducer from '../Reducers/UIReducer'; 
const mapDispatch = {
 updateActiveTab,
 updateMeowingTab
}

export default function Navigation(props) {
  const actions = mapDispatch;
  const {state, dispatch} = props;  
  const activeTab = props.activeTab; 
  const meowingTab = props.meowingTab; 
  console.log(state);
  return (
    <UIProvider initialState={initialState} reducer={UIReducer} dispatch={dispatch}>
      <nav className="navigation">
        <ul className="navItems">
          <li 
            id="nav-item-main" 
            onMouseDown={()=>{
              dispatch(actions.updateActiveTab("nav-item-main"))
              dispatch(actions.updateMeowingTab("nav-item-main"))
            }}
            onTouchStart={()=>{
              dispatch(actions.updateActiveTab("nav-item-main"))
              dispatch(actions.updateMeowingTab("nav-item-main"))
            }}
            onTouchEnd={()=>dispatch(actions.updateMeowingTab("none"))}
            
            onMouseLeave={()=> dispatch(actions.updateMeowingTab("none"))}
            onMouseUp={()=>dispatch(actions.updateMeowingTab("none"))}
            onClick={()=>dispatch(actions.updateActiveTab("nav-item-main"))}
            className={`
          nav-item 
          ${meowingTab && meowingTab === "nav-item-main" ? "meowing active" : ""} 
          ${activeTab && activeTab === "nav-item-main" ? "active" : "inactive"} 
          nav-item-main`}>
            <div className="cat"></div>
             Links 
          </li>
          <li 
          onMouseDown={()=>{
            dispatch(actions.updateActiveTab("nav-item-about"))
            dispatch(actions.updateMeowingTab("nav-item-about"))
          }}
          onMouseUp={()=>dispatch(actions.updateMeowingTab("none"))}
          onMouseLeave={()=> dispatch(actions.updateMeowingTab("none"))}
          onClick={()=>{ 
              dispatch(actions.updateActiveTab("nav-item-about"))
            }
          }
          onTouchStart={()=>{
            dispatch(actions.updateActiveTab("nav-item-about"))
            dispatch(actions.updateMeowingTab("nav-item-about"))
          }}
          onTouchEnd={()=>dispatch(actions.updateMeowingTab("none"))}
           
          className={`
            nav-item
            ${meowingTab && meowingTab === "nav-item-about" ? "meowing active" : ""}
            ${activeTab && activeTab === "nav-item-about" ? "active" : "inactive"} 
             nav-item-about
          `}>
            <div className="cat"></div>
              About
          </li>   
          <li 
          onMouseDown={()=>{
            dispatch(actions.updateActiveTab("nav-item-portfolio"))
            dispatch(actions.updateMeowingTab("nav-item-portfolio"))
          }}
          onTouchStart={()=>{
            dispatch(actions.updateActiveTab("nav-item-portfolio"))
            dispatch(actions.updateMeowingTab("nav-item-portfolio"))
          }}
          onTouchEnd={()=>dispatch(actions.updateMeowingTab("none"))}
          
          onMouseUp={()=>dispatch(actions.updateMeowingTab("none"))}
          onMouseLeave={()=> dispatch(actions.updateMeowingTab("none"))}
          onClick={()=>{ 
              dispatch(actions.updateActiveTab("nav-item-portfolio"))
            }
          } className={`    
          nav-item ${activeTab === "nav-item-portfolio" ? "active" : "inactive"} 
          ${meowingTab && meowingTab === "nav-item-portfolio" ? "meowing active" : ""}nav-item-about`
          }>
            <div className="cat"></div>
              Code
          </li>
          <li 
          onMouseDown={()=>{
            dispatch(actions.updateActiveTab("nav-item-music"))
            dispatch(actions.updateMeowingTab("nav-item-music"))
          }}
          onTouchStart={()=>{
            dispatch(actions.updateActiveTab("nav-item-music"))
            dispatch(actions.updateMeowingTab("nav-item-music"))
          }}
          onTouchEnd={()=>dispatch(actions.updateMeowingTab("none"))}
          
          onMouseUp={()=>dispatch(actions.updateMeowingTab("none"))}
          onMouseLeave={()=> dispatch(actions.updateMeowingTab("none"))}
          onClick={()=>{ 
              dispatch(actions.updateActiveTab("nav-item-music"))
            }
          } className={`    
          nav-item 
          ${meowingTab && meowingTab === "nav-item-music" ? "meowing active" : ""}
          ${ activeTab === "nav-item-music" ? "active" : "inactive"} nav-item-music`
          }>
            <div className="cat"></div>
              Music
          </li>
          <li 
          onMouseDown={()=>{
            dispatch(actions.updateActiveTab("nav-item-recipes"))
            dispatch(actions.updateMeowingTab("nav-item-recipes"))
          }}
          onTouchStart={()=>{
            dispatch(actions.updateActiveTab("nav-item-recipes"))
            dispatch(actions.updateMeowingTab("nav-item-recipes"))
          }}
          onTouchEnd={()=>dispatch(actions.updateMeowingTab("none"))}
          
          onMouseUp={()=>dispatch(actions.updateMeowingTab("none"))}
          onMouseLeave={()=> dispatch(actions.updateMeowingTab("none"))}
          onClick={()=>{ 
              dispatch(actions.updateActiveTab("nav-item-recipes"))
            }
          } className={`    
          nav-item 
          ${meowingTab && meowingTab === "nav-item-recipes" ? "meowing active" : ""}
          ${activeTab === "nav-item-recipes" ? "active" : "inactive"} nav-item-recipes`
          }>
            <div className="cat"></div>
              Recipes
          </li>
        </ul>
      </nav>
    </UIProvider>
  )
} 