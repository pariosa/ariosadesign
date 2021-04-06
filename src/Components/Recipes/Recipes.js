import css from "../../css/styles.css";  
import React, {useReducer, useContext} from 'react';
import UIReducer from '../../Reducers/UIReducer';
import { UIContext, UIProvider } from "../../Store/UIContext";

export default function Recipes() {
  const state = useContext(UIContext);
  return (
    <UIProvider>
      <div className={`page about ${state && state.activeTab === "nav-item-main"? "" : "hidden"}`}>
        Here are my recipes, more coming soon!
      </div>
    </UIProvider>
  )
} 