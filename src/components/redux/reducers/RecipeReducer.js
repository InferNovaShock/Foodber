import {
	ADD_RECIPE,
	OPEN_RECIPE,
	REMOVE_RECIPE,
	UPDATE_COLLECTION,
	UPDATE_PREFERENCES,
	UPDATE_CURRENT_INDEX,
} from '../actions/Types';
import PIZZA_CHIPS from '../../images/pizza_chips.jpg';
import SPAGHETTI from '../../images/spaghetti.jpg';
import TACO_CHIPS from '../../images/taco_chips.jpg';
import VEGAN_DINNER from '../../images/vegan_dinner.jpg';
import VEGAN_WRAP from '../../images/vegan_wrap.jpg';

const initalState = {
	items: [],
	recipeCollection: [
		{
			label: 'Delicious Pizza with chips',
			body:
				'A pizza that you have never seen before ! A calorie bomb which you will love ❤️',
			image: PIZZA_CHIPS,
		},
		{
			label: 'Delicious Pizza with chips',
			body:
				'A pizza that you have never seen before ! A calorie bomb which you will love ❤️',
			image: SPAGHETTI,
		},
		{
			label: 'Delicious Pizza with chips',
			body:
				'A pizza that you have never seen before ! A calorie bomb which you will love ❤️',
			image: TACO_CHIPS,
		},
		{
			label: 'Delicious Pizza with chips',
			body:
				'A pizza that you have never seen before ! A calorie bomb which you will love ❤️',
			image: VEGAN_DINNER,
		},
		{
			label: 'Delicious Pizza with chips',
			body:
				'A pizza that you have never seen before ! A calorie bomb which you will love ❤️',
			image: VEGAN_WRAP,
		},
	],
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
			console.log(action.payload);
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
			console.log(action.payload);
			return {
				...state,
				item: action.payload,
			};
		default:
			return state;
	}
};
