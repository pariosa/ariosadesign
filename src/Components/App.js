import css from "../css/styles.css";  
import React, { useReducer } from 'react';
import Title from "./Title";
import Navigation from "./Navigation"; 
import Footer from "./Footer";  
import UIReducer from '../Reducers/UIReducer';
import { initialState } from '../Store/UIContext'
import Page from "./Page";
export default function App() {
  const [state,dispatch] = useReducer(UIReducer, initialState);
  return (
    <>

      <div id="App" className="App ">
        <div className="wrapper">
            <Title/>
            <Navigation meowingTab={state.meowingTab} activeTab={state.activeTab} dispatch={dispatch} />
            <Page state={state} />
            <Footer/>
          <div className="background zigzag zigzag2"/>  
          <div className="background zigzag2"/> 

        </div> 
      </div>
    </>
  )
} 