import {
    ADD_RECIPE,
    REMOVE_RECIPE,
    OPEN_RECIPE,
    UPDATE_CURRENT_INDEX,
    UPDATE_COLLECTION,
} from "../actions/Types";

const initalState = {
    items: [],
    recipeCollection: [],
    item: "",
    index: 0,
};

export default (state = initalState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_INDEX:
            return {
                ...state,
                index: action.payload,
            };
        case UPDATE_COLLECTION:
            return {
                ...state,
                recipeCollection: [action.payload],
            };
        case ADD_RECIPE:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case REMOVE_RECIPE:
            const recipes = [...state.items];
            recipes.splice(action.payload, 1);
            return {
                ...state,
                items: [...recipes],
            };
        case OPEN_RECIPE:
            return {
                ...state,
                item: action.payload,
            };
        default:
            return state;
    }
};