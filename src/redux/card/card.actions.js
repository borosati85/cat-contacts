import CardActionTypes from "./card.types";

const fetchCards = () => ({
    type: CardActionTypes.FETCH_CARDS_START
})

const fetchCardsSuccess = (cards) => ({
    type: CardActionTypes.FETCH_CARDS_SUCCESS,
    payload: cards
})

const fetchCardsFailure = (errorMessage) => ({
    type: CardActionTypes.FETCH_CARDS_FAILURE,
    payload: errorMessage
})

const setIsLoading = value => ({
    type: CardActionTypes.SET_IS_LOADING,
    payload: value
})

const addCard = (data) => ({
    type: CardActionTypes.ADD_CARD,
    payload: data
})

const removeCard = (idx) => ({
    type: CardActionTypes.REMOVE_CARD,
    payload: idx
})

export { fetchCards, fetchCardsSuccess, fetchCardsFailure, setIsLoading, addCard, removeCard }