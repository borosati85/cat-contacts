import { takeLatest, put, all, call } from 'redux-saga/effects';
import CardActionTypes from './card.types';
import { fetchCardsSuccess, fetchCardsFailure, setIsLoading } from './card.actions';

function* fetchCards() {
    try {
        yield put (setIsLoading(true));
        const data = yield fetch('https://random-data-api.com/api/users/random_user?size=10');
        const users = yield data.json();
        yield put (setIsLoading(false));
        yield put (fetchCardsSuccess(users))
    } catch(error) {
        yield put (fetchCardsFailure(error.message))
    }
}

function* onFetchCardsStart() {
    yield takeLatest(CardActionTypes.FETCH_CARDS_START, fetchCards);
}

export function* cardSagas() {
    yield all([
        call(onFetchCardsStart)
    ]);
}