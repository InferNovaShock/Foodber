import { ADD_RECIPE, REMOVE_RECIPE, OPEN_RECIPE } from "../actions/Types";

const initalState = {
    items: [],
    item: "",
};

export default (state = initalState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case REMOVE_RECIPE:
            return {};
        case OPEN_RECIPE:
            return {
                ...state,
                item: action.payload,
            };
        default:
            return state;
    }
};
