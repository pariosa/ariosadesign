import { 
	UPDATE_ACTIVE_TAB, 
 } from "../constants/actionTypes";

export const updateActiveTab = (activeTab) => ({
	type: UPDATE_ACTIVE_TAB,
	payload: activeTab
});