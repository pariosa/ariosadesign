import { useCallback } from "react";
import { UPDATE_ACTIVE_TAB,UPDATE_MEOWING_TAB } from "../Constants/actionTypes"; 
import UIContext from "../Store/UIContext";
import { useContext } from "react";
 

const UIReducer = (state , action) => { 
    switch(action.type){
        case UPDATE_ACTIVE_TAB:
            return {...state, activeTab:action.payload};
        case UPDATE_MEOWING_TAB:
            return {...state, meowingTab:action.payload};
        default:
            return {state}
    }
}
export default UIReducer;