import { ADD_RECIPE, REMOVE_RECIPE } from "./Types";

export const addRecipe = (recipe) => (dispatch) => {
    dispatch({
        type: ADD_RECIPE,
        payload: recipe,
    });
};

export const removeRecipe = (recipe) => (dispatch) => {
    dispatch({
        type: REMOVE_RECIPE,
        payload: recipe,
    });
};
