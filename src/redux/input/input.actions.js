import InputActionTypes from "./input.types";

const setInputVisible = value => ({
    type: InputActionTypes.SET_IS_VISIBLE,
    payload: value
})

const clearInputFields = () => ({
    type: InputActionTypes.CLEAR_INPUT_FIELDS
})

const setUserInput = data => ({
    type: InputActionTypes.SET_USER_INPUT,
    payload: data
})

export { setInputVisible, setUserInput, clearInputFields }