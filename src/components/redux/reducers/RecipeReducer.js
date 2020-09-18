import { ADD_RECIPE, REMOVE_RECIPE } from "../actions/Types";

const initalState = {
    items: [],
    item: {},
};

export default (state = initalState, action) => {
    switch (action.type) {
        case ADD_RECIPE:
            console.log(action.payload);
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case REMOVE_RECIPE:
            return {};

        default:
            return state;
    }
};
