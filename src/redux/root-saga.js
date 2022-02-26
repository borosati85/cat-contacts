import { all, call } from 'redux-saga/effects';
import { cardSagas } from './card/card.saga'

function* rootSaga() {
    yield all([
        call(cardSagas)
    ])
}

export default rootSaga