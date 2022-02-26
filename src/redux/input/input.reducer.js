import InputActionTypes from './input.types';

const initialState = {
    isVisible: false,
    firstName: '',
    lastName: '',
    email: ''
}

const inputReducer = (state = initialState, action) => {
    switch(action.type) {
        case InputActionTypes.SET_IS_VISIBLE:
            return {
                ...state,
                isVisible: action.payload
            }
        case InputActionTypes.CLEAR_INPUT_FIELDS:
            return {
                ...state,
                firstName: '',
                lastName: '',
                email: ''
            }
        case InputActionTypes.SET_USER_INPUT:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}

export default inputReducer;