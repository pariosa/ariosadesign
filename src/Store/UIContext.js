
import React, { createContext, useState, useReducer, useContext } from "react";
import PropTypes from "prop-types";
import UIReducer from "../Reducers/UIReducer";

export const initialState = {
  activeTab:"nav-item-main"
};

export const UIContext = createContext();

export function UIProvider({reducer, initialState, children}) {
  const [activeTab, dispatch] = useReducer(UIReducer);

    
  return (
    <UIContext.Provider value={useReducer(reducer, initialState)}>
      { children }
    </UIContext.Provider>
  )
}   
export const useStateValue = () => useContext(UIContext);