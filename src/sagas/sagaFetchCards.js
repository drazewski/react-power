import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { loadCards } from '../actions/card'

export function* startFetchCards() {
    yield takeEvery('START_FETCH_CARDS', fetchCardsSaga);
}

export function* fetchCardsSaga() {
    const response = yield call(axios.get, 'http://localhost:3001/api/cards')
    yield put(loadCards(response.data))
}
    