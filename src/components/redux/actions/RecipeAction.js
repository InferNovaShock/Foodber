import {
    ADD_RECIPE,
    REMOVE_RECIPE,
    OPEN_RECIPE,
    UPDATE_CURRENT_INDEX,
} from "./Types";

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
