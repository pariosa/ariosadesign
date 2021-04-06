import css from "../../css/styles.css";  
import React, {useReducer, useContext} from 'react';
import UIReducer from '../../Reducers/UIReducer';
import { UIContext, UIProvider } from "../../Store/UIContext";

export default function Music() {
  const state = useContext(UIContext);
  return (
    <UIProvider>
      <div className={`page about ${state && state.activeTab === "nav-item-main"? "" : "hidden"}`}>
        Here is my music page, more coming soon!
      </div>
    </UIProvider>
  )
} 