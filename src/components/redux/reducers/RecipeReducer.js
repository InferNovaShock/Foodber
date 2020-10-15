import {
    ADD_RECIPE,
    OPEN_RECIPE,
    REMOVE_RECIPE,
    UPDATE_COLLECTION,
    UPDATE_PREFERENCES,
    UPDATE_CURRENT_INDEX,
} from "../actions/Types";

const initalState = {
    items: [],
    recipeCollection: [],
    preferences: {},
    item: {},
    index: 0,
};

export default (state = initalState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_INDEX:
            return {
                ...state,
                index: action.payload,
            };

        case UPDATE_PREFERENCES:
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    ...action.payload,
                },
            };
        case UPDATE_COLLECTION:
            return {
                ...state,
                recipeCollection: action.payload,
            };
        case ADD_RECIPE:
            const recipeIndex = state.items.findIndex((recipe) => {
                return action.payload.label === recipe.label;
            });

            if (recipeIndex > -1) {
                return {
                    ...state,
                };
            }

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
