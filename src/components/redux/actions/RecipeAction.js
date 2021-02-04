import {
	ADD_RECIPE,
	OPEN_RECIPE,
	REMOVE_RECIPE,
	UPDATE_COLLECTION,
	UPDATE_PREFERENCES,
	UPDATE_CURRENT_INDEX,
} from './Types';

export const addRecipe = (recipe) => (dispatch) => {
	dispatch({
		type: ADD_RECIPE,
		payload: recipe,
	});
};

export const removeRecipe = (index) => (dispatch) => {
	dispatch({
		type: REMOVE_RECIPE,
		payload: index,
	});
};

export const openRecipe = (recipe) => (dispatch) => {
	dispatch({
		type: OPEN_RECIPE,
		payload: recipe,
	});
};

export const updateIndex = (index) => (dispatch) => {
	dispatch({
		type: UPDATE_CURRENT_INDEX,
		payload: index,
	});
};

export const updatePreferences = (preferences) => (dispatch) => {
	dispatch({
		type: UPDATE_PREFERENCES,
		payload: preferences,
	});
};

export const updateRecipeCollection = (recipes) => (dispatch) => {
	dispatch({
		type: UPDATE_COLLECTION,
		payload: recipes,
	});
};
