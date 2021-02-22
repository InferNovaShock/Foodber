import {
    ADD_RECIPE,
    OPEN_RECIPE,
    REMOVE_RECIPE,
    UPDATE_COLLECTION,
    UPDATE_PREFERENCES,
    UPDATE_CURRENT_INDEX,
} from '../actions/Types';
import KALE_PESTO from '../../images/kale-pesto.webp';
import PIZZA_HOMEMADE from '../../images/pizza-homemade.webp';

const initalState = {
    items: [],
    recipes: [
        {
            label: 'Vegan kale pesto pasta',
            body:
                "Whizz up kale, pumpkin seeds, basil and garlic to make this easy kale pesto. It's perfect stirred through wholemeal spaghetti for a heatlhy vegan meal",

            ingredients: [
                '150g kale',
                'small bunch of basil',
                '1 small garlic clove',
                '3 tbsp pumpkin seeds',
                '5 tbsp extra virgin olive oil',
                '3 tbsp nutritional yeast',
                '1 lemon, zested and juiced',
                '350g wholemeal spaghetti',
            ],
            method: [
                'Bring a pan of water to the boil. Cook the kale for 30 secs, drain and transfer to a bowl of ice-cold water for 5 mins. Drain again and pat dry with kitchen paper.',
                'Put the basil, garlic, seeds, oil, nutritional yeast, lemon juice and zest, and drained kale in a food processor. Blitz until smooth, then season. Loosen with a splash of water, if it’s too thick.',
                'Cook the pasta following pack instructions, then toss with the pesto and serve.',
            ],
            image: KALE_PESTO,
        },
        {
            label: 'Pizza with homemade sauce',
            body:
                'Make pizza for the family with a homemade base and tomato sauce. The recipe is perfect to get kids involved in cooking. Top with mozzarella and fresh basil',
            ingredients: [
                '300g strong white bread flour',
                '1 tsp instant yeast',
                '1 tbsp olive oil',
                '1 tbsp olive oil , plus a drizzle',
                '2 garlic cloves , crushed',
                '200ml passata',
                '8 mozzarella pearls , halved',
                'small bunch fresh basil',
            ],
            method: [
                'Tip the flour into a bowl, then stir in the yeast and 1 tsp salt. Make a well in the centre and pour in 200ml warm water (make sure it’s not too hot) along with the oil. Stir together with a wooden spoon until you have a soft, fairly wet dough.',
                'Tip the dough out onto a lightly floured surface and knead for 5 mins until smooth. Cover with a tea towel and set aside for an hour or so or until the dough has puffed up and doubled in size. You can also leave the rough, unkneaded dough in the bowl, cover with a tea towel and leave in the fridge overnight and the dough will continue to prove on its own.',
                'Meanwhile, make the tomato sauce. Put the oil in a small pan and fry the garlic briefly (don’t let it brown), then add the passata and simmer everything until the sauce thickens a little. Leave to cool.',
                'Once the dough has risen, knead it quickly in the bowl to knock it back, then tip out onto a lightly floured surface and cut into two balls. Roll out each ball into a large teardrop that is very thin and about 25cm across (teardrop shapes fit baking sheets more easily than rounds)',
                'Heat oven to 240C/220C fan/ gas 9 with a large baking sheet inside. Lift one of the bases onto another floured baking sheet. Smooth the sauce over the base with the back of a spoon, scatter over half the mozzarella, drizzle with olive oil and season. Put the pizza, still on its baking sheet, on top of the hot sheet in the oven and bake for 8-10 mins until crisp. ',
            ],
            image: PIZZA_HOMEMADE,
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
                recipes: action.payload,
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
