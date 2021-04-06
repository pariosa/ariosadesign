import { 
	UPDATE_ACTIVE_TAB, 
	UPDATE_MEOWING_TAB
 } from "../Constants/actionTypes";

export const updateActiveTab = (activeTab) => ({
	type: UPDATE_ACTIVE_TAB,
	payload: activeTab
});
export const updateMeowingTab = (activeTab) => ({
	type: UPDATE_MEOWING_TAB,
	payload: activeTab
});