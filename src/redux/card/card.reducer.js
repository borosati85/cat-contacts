import CardActionTypes from './card.types';

const INITIAL_STATE = {
    cards: [],
    isLoading: false,
    error: ''
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case CardActionTypes.FETCH_CARDS_SUCCESS: 
            return {
                ...state,
                cards: state.cards.concat(action.payload),
                error: ''
            }
        
        case CardActionTypes.FETCH_CARDS_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case CardActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case CardActionTypes.ADD_CARD: 
            return {
                ...state,
                cards: [action.payload].concat([...state.cards])
            }
        ;
        case CardActionTypes.REMOVE_CARD: 
            return {
                ...state,
                cards: state.cards.filter((card, idx) => idx !== action.payload)
            }
        default: return state;
    }
}

export default cardReducer;