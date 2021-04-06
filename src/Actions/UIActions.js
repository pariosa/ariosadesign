import { 
	UPDATE_ACTIVE_TAB, 
	UPDATE_MEOWING_TAB,
	UPDATE_ACTIVE_RECIPE,
	UPDATE_ACTIVE_SONG,
	UPDATE_ACTIVE_CODE
 } from "../Constants/actionTypes";

export const updateActiveTab = activeTab => ({
	type: UPDATE_ACTIVE_TAB,
	payload: activeTab
});
export const updateActiveRecipe = activeRecipe =>({
	type: UPDATE_ACTIVE_RECIPE,
	payload: activeRecipe
});
export const updateActiveSong = activeSong =>({
	type: UPDATE_ACTIVE_SONG,
	payload: activeSong
});
export const updateActiveCode = activeCode =>({
	type: UPDATE_ACTIVE_CODE,
	payload: activeCode
});
export const updateMeowingTab = activeTab => ({
	type: UPDATE_MEOWING_TAB,
	payload: activeTab
});